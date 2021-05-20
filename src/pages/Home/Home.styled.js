import styled from "styled-components";

const SCHome = styled.main`
    display: flex;
    flex-direction: row;

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

`;

export default SCHome;