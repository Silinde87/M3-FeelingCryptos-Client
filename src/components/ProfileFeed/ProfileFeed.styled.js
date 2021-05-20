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
    #tweets-container{
        height: 100%;
    }
    #tweets-container > div {
        height: fit-content;
    }
    #twitter-container-header{
        align-self: start;
    }
    @media (max-width: 1000px){
        margin-left: 13px;  
    }
}
`;

export default SCProfileFeed;