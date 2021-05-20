import styled from "styled-components";

const SCSkeletonCard = styled.section`
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    column-gap: 20px;
    row-gap: 20px;

    .skeleton-box{
        height: 200px;
        min-width: 250px;
        margin: 5px;
        border: 1px solid rgb(196, 207, 214);
        border-radius: 8px;
    }
    .react-loading-skeleton{
        height: 19%;
        margin: 1px 0px;
    }

    @media (max-width: 1350px) {
        #skeleton-container {
            grid-template-columns: repeat(3,1fr);
            max-width: 800px;
            margin: auto;
        }
    }
    @media (max-width: 1100px) {
        #skeleton-container {
            grid-template-columns: repeat(2,1fr);
            max-width: 540px;
            margin: auto;
        }
    }
    @media (max-width: 700px) {
        #skeleton-container {
            grid-template-columns: repeat(1,1fr);
            max-width: 270px;
        }
    }
`;

export default SCSkeletonCard;