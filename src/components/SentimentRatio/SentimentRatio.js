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
				bgcolor = `rgba(1, 183, 70,${opacity + 0.3})`;
				break;
			case "neutral":
				bgcolor = `rgba(247, 184, 1,${opacity + 0.3})`;
				break;
			case "negative":
				bgcolor = `rgba(238, 64, 60,${opacity + 0.3})`;
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
