import styled from "styled-components";

const SCTweetFeed = styled.section`
	max-width: 1100px;
	width: 100%

	#twitter-container-header {
		padding: 0px 50px 0px 50px;
		margin-bottom: 10px;
	}
	.tweet-box{
		width: 250px;
	}
	.twitter-tweet {
		overflow-y: scroll;
		overflow-x: hidden;
		height: 200px;
		min-width: 250px;
		border: 1px solid rgb(196, 207, 214);
		border-radius: 12px;
		box-shadow: 5px 5px 15px -3px rgba(156,156,156,1);
	}
	/* Tweet scrollbar styles */
	.twitter-tweet::-webkit-scrollbar {
		width: 8px;
	}
	.twitter-tweet::-webkit-scrollbar-track {
		border: 1px solid ${({ theme }) => theme.color.primary};
		background-color: ${({ theme }) => theme.color.secondary};
		border-radius: 12px;
		display: none;
	}
	.twitter-tweet::-webkit-scrollbar-thumb {
		border-radius: 12px;
		background-color: ${({ theme }) => theme.color.primary};
		border: 1px solid ${({ theme }) => theme.color.secondary};
	}
	#tweets-container {
		display: grid;
    	grid-template-columns: repeat(4,1fr);
    	column-gap: 20px;
    	row-gap: 20px;
		height: fit-content;
		margin-bottom: 40px;
		max-width: 1100px;
		margin-top: 20px;
	}
	#twitter-container {
		height: 100%;
	}

	@media (max-width: 1350px) {
		#tweets-container {
			grid-template-columns: repeat(3,1fr);
			max-width: 800px;
			margin: auto;
		}
		#twitter-container-header{
			margin: 0px 60px;
		}
	}
	@media (max-width: 1100px) {
		#tweets-container {
			grid-template-columns: repeat(2,1fr);
			max-width: 540px;
			margin: auto;
		}
		#twitter-container-header{
			margin: 0px 60px;
		}
	}
	@media (max-width: 700px) {
		#tweets-container {
			grid-template-columns: repeat(1,1fr);
			max-width: 270px;
		}
		#twitter-container-header{
			margin: 0px 60px;
		}
	}
`;

export default SCTweetFeed;
