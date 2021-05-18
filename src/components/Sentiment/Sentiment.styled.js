import styled from "styled-components";

const SCSentiment = styled.div`
	width: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 1200px;

	#sentiment-label {
		display: flex;
		margin-bottom: 5px;
	}
	#sentiment-scores {
		display: flex;
	}
	.fas {
		margin-right: 10px;
		margin-left: 4px;
		font-size: 13px;
	}
`;

export default SCSentiment;
