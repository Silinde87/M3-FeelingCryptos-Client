import styled from "styled-components";

const SCSearchBar = styled.div`
    .MuiInput-input{
        border-radius: 5px;
        border: 1px solid ${({theme})=> theme.color.white};
    }   
    .MuiInputBase-input{
        color: ${({theme})=> theme.color.searchInputLetter};
        padding: 5px 15px !important;
    }
    .MuiInput-underline:after{
        border-bottom: 0;
    }
`;

export default SCSearchBar;