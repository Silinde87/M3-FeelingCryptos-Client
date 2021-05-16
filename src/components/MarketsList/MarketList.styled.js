import styled from "styled-components";

const SCMarketList = styled.section`

    background-color: ${({ theme }) => theme.color.secondary};

    .component-list{
        max-height: 100vh;
        overflow: auto;
        padding: 35px;
        width: 100%;
    }
    .list-div{
        display: flex;
        flex-direction: column;
        width: 200px;
        justify-content: space-around;
        align-items: center;
    }
    #market-id{
        padding: 10px;
        color: ${({theme}) => theme.color.lettersColorRed}
        font-weight: ${({theme}) => theme.typographySizes.l}

    }
    

`;

export default SCMarketList;