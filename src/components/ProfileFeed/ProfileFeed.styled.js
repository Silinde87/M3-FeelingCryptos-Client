import styled from 'styled-components';

const SCProfileFeed = styled.section`
    height: fit-content;
    margin-left: 80px;
    margin: 0 auto;

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
    .link-add{
        position: fixed;
        top: 50%;
        left: 50%;
    }
    @media (max-width: 1000px){
        margin-left: 13px;  
    }
}
`;

export default SCProfileFeed;