import styled from "styled-components";

const SCProfile = styled.section`
    display:flex;
    overflow-y: hidden;

    #binance-container{
        width: 100%;
        overflow-y: hidden;
        margin-top: 50px;
    }
    .show{
        width: 200px;
    }
    .hide{
        width: 0px;
    }
`;

export default SCProfile;