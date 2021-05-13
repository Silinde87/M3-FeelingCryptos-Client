import styled from "styled-components";

const SCFormButton = styled.button`
    background-color: ${({ theme }) => theme.color.buttonColor};
    margin-top: 10px;
    padding: 5px 18px;
    border-radius: 3px;

    &:disabled{
        opacity: 0.4;
    }
`;

export default SCFormButton;

