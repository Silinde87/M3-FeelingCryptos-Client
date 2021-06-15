import styled from "styled-components";

const SCMarketList = styled.nav`

    background: linear-gradient(0deg, ${({ theme }) => theme.color.secondary} 0%, ${({ theme }) => theme.color.primary} 100%);
    width: 15vw;
    min-width: fit-content;    
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    
    .active #market-id{
        color: ${({theme}) => theme.color.letterColor3Sel};        
    }
    #market-id{
        transition: color 0.3s;
    }
    #search-container{
        width: 70%;
        margin-top: 20px;
    }
    #search-container div,
    #search-container input{
        width: 100%;
        height: 30px;
    }
    #search-container input{
        padding: 0px 0px 10px 5px;
        font-size: ${({theme}) => theme.typographySizes.m.size}
    }

    .component-list{
        height: calc( 100vh - 60px );
        overflow: auto;
        padding: 0;
        width: 100%;
    }
    .list-div{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    #market-id{
        color: ${({theme}) => theme.color.letterColor1};
        font-size: ${({theme}) => theme.typographySizes.m.size};
        line-height: ${({theme}) => theme.typographySizes.l.line};
        letter-spacing: 1px;
    }
    .market-img-div{
        width: 100px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
        margin: 5px;

    }
    .market-img-div img{
        width: 20px;
        height: 20px;
        margin-right: 10px;
        
    }

    @media (max-width: 768px) {
        display:none;
    }
`;

export default SCMarketList;