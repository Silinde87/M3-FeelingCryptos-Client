import React, { useEffect, useState } from "react";
import ApexChart from "react-apexcharts";
import SCChart from "./Chart.styled";
import moment from "moment";
import { withAuth } from "../../context/auth.context";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const LightTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: theme.palette.common.white,
		color: "rgba(0, 0, 0, 0.87)",
		boxShadow: theme.shadows[1],
		fontSize: 12,
	},
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 75,
	},
	inputLabel: {
		backgroundColor: theme.palette.common.white,
		color: "rgba(0, 0, 0, 0.87)",
		boxShadow: theme.shadows[1],
		fontSize: 20,
	},
}));

function Chart(props) {
	const classes = useStyles();
	const [toggle, setToggle] = useState(false);
	const [open, setOpen] = React.useState(false);
	const [openForm, setOpenForm] = useState(false);
	const [foreColor, setForeColor] = useState(props.theme === 'light' ? '#0D1B2A' : '#FFFFFF');

	useEffect(() => {
		if (props.user) {
			props.user.favorites_cryptos.includes(props.market) ? setToggle(true) : setToggle(false);
		}
	}, [props.market]);

	useEffect(() => {
		if(props.theme === 'light') setForeColor('#0D1B2A')
		else setForeColor('#FFFFFF')
	},[props.theme])

	const handleClick = () => {
		if (props.user) {
			setToggle(!toggle);
			toggle
				? props.deleteFavoritesCryptos({ favorites_cryptos: props.market })
				: props.addFavoritesCryptos({ favorites_cryptos: props.market });
		} else {
			setOpen(true);
			setTimeout(() => {
				setOpen(false);
			}, 2500);
		}
	};
	const handleChange = (event) => {
		props.setTime(event.target.value);
	};

	const handleClose = () => {
		setOpenForm(false);
	};

	const handleOpen = () => {
		setOpenForm(true);
	};

	return (
		<SCChart id="chart-container">
			<div id="chart-header">
				<LightTooltip
					PopperProps={{
						disablePortal: true,
					}}
					open={open}
					disableFocusListener
					disableHoverListener
					disableTouchListener
					title="Log in to add your favorite market"
					placement="bottom"
				>
					<button onClick={() => handleClick()}>
						{toggle ? (
							<StarRoundedIcon className="favorite-btn" />
						) : (
							<StarBorderRoundedIcon className="favorite-btn" />
						)}
					</button>
				</LightTooltip>
				<FormControl className={classes.formControl} id="form-control">
					<InputLabel className={classes.inuptLabel} id="demo-controlled-open-select-label">
						Interval
					</InputLabel>
					<Select
						labelId="demo-controlled-open-select-label"
						id="demo-controlled-open-select"
						open={openForm}
						onClose={handleClose}
						onOpen={handleOpen}
						value={props.time}
						onChange={handleChange}
					>
						<MenuItem value="1h">
							<em>1h</em>
						</MenuItem>
						<MenuItem value={"30m"}>30m</MenuItem>
						<MenuItem value={"2h"}>2h</MenuItem>
						<MenuItem value={"4h"}>4h</MenuItem>
						<MenuItem value={"8h"}>8h</MenuItem>
						<MenuItem value={"12h"}>12h</MenuItem>
						<MenuItem value={"1d"}>1d</MenuItem>
					</Select>
				</FormControl>
			</div>
			<div id="chart">
				<ApexChart
					options={{
						chart: {
							height: 350,
							foreColor: foreColor,
							type: "candlestick",
						},
						title: {
							text: `${props.market} - SPOT Market`,
							align: "left",
						},

						tooltip: {
							enabled: true,
						},
						xaxis: {
							type: "category",
							labels: {
								// formatter: function (val) {
								//   return dayjs(val).format("MMM DD HH:mm");
								// },
							},
						},
						yaxis: {
							tooltip: {
								enabled: true,
							},
						},
					}}
					series={[
						{
							name: "candle",
							data: props.data.map((el, i) => {
								return {
									x: moment(new Date(parseInt(el[0]))).format("MMM Do h:mm"),
									y: [el[1].open, el[1].high, el[1].low, el[1].close],
								};
							}),
						},
					]}
					type="candlestick"
					height={350}
				/>
			</div>
		</SCChart>
	);
}

export default withAuth(Chart);
