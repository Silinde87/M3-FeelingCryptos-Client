import styled from "styled-components";

const SCMarketList = styled.nav`

    background-color: ${({ theme }) => theme.color.secondary};
    min-width: 260px;
    
    .active{
        color: "red";
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
    

`;

export default SCMarketList;