import React from "react";
import Text from "../text";
import SCSentimentRatio from "./SentimentRatio.styled";

export default function SentimentRatio(props) {
	let { ratio, type, opacity } = props;
	console.log(ratio);
	if (ratio) {
		let bgcolor;
		switch (type) {
			case "positive":
				bgcolor = `rgb(0, 128, 0,${opacity})`;
				break;
			case "neutral":
				bgcolor = `rgb(247, 184, 1,${opacity})`;
				break;
			case "negative":
				bgcolor = `rgb(224, 30, 55,${opacity})`;
				break;
		}
		return (
			<SCSentimentRatio style={{ backgroundColor: bgcolor }}>
				<Text size="m" color="letterColor1" weight="mulishRegular" style={{ opacity: 1 }}>
					{ratio}
				</Text>
			</SCSentimentRatio>
		);
	} else {
        //Loading
		return <></>;
	}
}
