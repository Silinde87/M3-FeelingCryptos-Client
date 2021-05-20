import styled from "styled-components";

const SCProfile = styled.section`
    display:flex;
    overflow-y: scroll;
    height: calc(100% - 60px);
    justify-content: center;

    #ws-profile-container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    #text{
        margin-bottom: 15px;
     
    }

    #binance-container{
        width: 100%;
        overflow-y: hidden;
        margin-top: 50px;
    }
    #profile-container{

    }
    .show{
        width: 200px;
    }
    .hide{
        width: 0px;
    }
    .link-add-favorites{
        position: fixed;
        top: 50%;
        left: 50%;
    #credits{
        width: 100%;
        position: fixed;
        bottom: 20px;
        left: 0;
        margin: 0;
    }

`;

export default SCProfile;