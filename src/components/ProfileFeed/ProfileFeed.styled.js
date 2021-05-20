import styled from 'styled-components';

const SCProfileFeed = styled.div`
    height: fit-content;
    margin-left: 80px;

    #sentiment-container{
        margin-top: 20px;
        margin-bottom: 50px;
    }
    #twitter-container{
        align-items: center;
    }
    #twitter-container,
    #tweets-container{
        height: 100%;
        display: flex;
        align-content: flex-start; 
    }
    #tweets-container > div {
        height: fit-content;
    }
    #twitter-container-header{
        align-self: start;
    }
}
`;

export default SCProfileFeed;