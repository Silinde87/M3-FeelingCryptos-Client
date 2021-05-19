import React from "react";
import SentimentRatio from "../SentimentRatio/SentimentRatio";
import Text from "../text";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import SCSentiment from "./Sentiment.styled";

const LightTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: theme.palette.common.white,
		color: "rgba(0, 0, 0, 0.87)",
		boxShadow: theme.shadows[1],
		fontSize: 13,
	},
}))(Tooltip);

export default function Sentiment({ positives, neutrals, negatives }) {
	return (
		<SCSentiment id="sentiment-container">
			<div id="sentiment-label">
				<Text id="sentiment-label" as="h3" size="m" weight="mulishMedium">
					Sentiment Anaylsis:
				</Text>
				<LightTooltip title="Analysis based on last 100 twits using FINN-165" placement="top-start">
					<Icon className="fas fa-info-circle" />
				</LightTooltip>
			</div>
			<div id="sentiment-scores">
				<SentimentRatio type={"positive"} ratio={positives} opacity={positives / 100} />
				<SentimentRatio type={"neutral"} ratio={neutrals} opacity={neutrals / 100} />
				<SentimentRatio type={"negative"} ratio={negatives} opacity={negatives / 100} />
			</div>
		</SCSentiment>
	);
}
