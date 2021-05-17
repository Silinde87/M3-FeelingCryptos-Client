import styled from "styled-components";

const SCTweetFeed = styled.section`
    height: 100%;
    max-width: 1300px;
    display: flex;
    flex-direction: column;

    #twitter-container-header{
        display: flex;
        justify-content: space-between;
        padding: 0px 4% 0px 2%;
    }

    #sentiment-container{
        width: fit-content;
        display: flex;
        align-items: center;
    }
    .fas {
        margin-right: 10px;
        margin-left: 2px;
        font-size: 13px;
        margin-top: -10px;
    }
  
    .twitter-tweet{
        overflow-y: scroll;
        overflow-x: hidden;
        height: 200px;
        margin: 5px;
        border: 1px solid rgb(196, 207, 214);
        border-radius: 12px;
    }
    /* Tweet scrollbar styles */
    .twitter-tweet::-webkit-scrollbar {
        width: 8px;
        //display: none;
    }
    .twitter-tweet::-webkit-scrollbar-track {
        border: 1px solid ${({theme}) => theme.color.primary};
        background-color: ${({theme}) => theme.color.secondary};
        border-radius: 12px; 
        display:none;
    }
    .twitter-tweet::-webkit-scrollbar-thumb {
        border-radius: 12px;
        background-color: ${({theme}) => theme.color.primary};
        border: 1px solid  ${({theme}) => theme.color.secondary};        
    }
    #tweets-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export default SCTweetFeed;