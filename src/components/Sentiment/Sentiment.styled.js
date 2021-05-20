import styled from "styled-components";

const SCSentiment = styled.div`
	width: fit-content;

	width: 100%;
	margin: 0 auto;
	margin-top: 30px;
	margin-bottom: 60px;


	#sentiment-label {
		display: flex;
		margin-bottom: 5px;		
		justify-content:center;
	}
	#sentiment-scores {
		display: flex;
		margin: auto;
		flex-wrap: wrap;
		width: fit-content;
	}
	.fas {
		margin-right: 10px;
		margin-left: 4px;
		font-size: 13px;
		margin-top: 4px;
	}
	@media (max-width: 1000px){
        #sentiment-scores{
            display: flex;
            justify-content: center;
        }
    }
`;

export default SCSentiment;
