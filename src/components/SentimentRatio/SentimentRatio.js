import React from "react";
import Text from "../text";
import SCSentimentRatio from "./SentimentRatio.styled";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";

export default function SentimentRatio(props) {
	let { ratio, type, opacity } = props;
	if (ratio) {
		let bgcolor;
		switch (type) {
			case "positive":
				bgcolor = `rgba(0, 128, 0,${opacity})`;
				break;
			case "neutral":
				bgcolor = `rgba(247, 184, 1,${opacity})`;
				break;
			case "negative":
				bgcolor = `rgba(224, 30, 55,${opacity})`;
				break;
			default:
		}
		return (
			<SCSentimentRatio style={{ backgroundColor: bgcolor }}>
				{type === "positive" ? (
					<TrendingUpIcon className="ratio-icon"/>
				) : type === "neutral" ? (
					<TrendingFlatIcon className="ratio-icon"/>
				) : (
					<TrendingDownIcon className="ratio-icon"/>
				)}
				<Text size="xl" color="letterColor1" weight="mulishMedium" style={{ opacity: 1 }}>
					{ratio}%
				</Text>
			</SCSentimentRatio>
		);
	} else {
		//Loading
		return <></>;
	}
}
