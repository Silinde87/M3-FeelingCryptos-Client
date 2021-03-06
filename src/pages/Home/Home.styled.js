import styled from "styled-components";

const SCHome = styled.main`
    display: flex;
    flex-direction: row;
    background-color: ${({theme}) => theme.color.background};

    #main-section{
        margin: 0;
        width: 85vw;
        margin-left: 15vw;        
    }
    @media (max-width: 1000px){
        #main-section{
            margin-left: 170px;
        }
    }
    @media (max-width: 768px) {
        #main-section{
            width: 100vw;
            margin-left: 0px;
        }
    }

`;

export default SCHome;