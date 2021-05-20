import styled from "styled-components";

const SCSentimentRatio = styled.div`
    padding: 5px 15px;
    height: 160px;
    width: 200px;
    margin: 0px 20px;
    margin-top: 10px;
    border: 4px solid rgb(196, 207, 214);
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    box-shadow: 7px 7px 1px 0px ${({theme}) => theme.color.sentimentShadow};
    border-radius: 12px;

    .ratio-icon{
        font-size: 60px;
    }

`;

export default SCSentimentRatio;