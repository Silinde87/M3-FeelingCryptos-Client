import styled from "styled-components";

const SCCredits = styled.div`
    margin-bottom: 15px;

    #text{
        text-align: center;
    }
    .links{
        color: ${({theme}) => theme.color.letterColor2}
    }
`;

export default SCCredits;