import styled from "styled-components";

const SCForm = styled.form`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    .form-input{
        width: 500px;
        padding: 3px 5px;
        outline: none;
        border:1px solid #BEBEBE;
        margin-top: 8px;
        margin-bottom: 8px;
        -webkit-transition: all 0.30s ease-in-out;
        -moz-transition: all 0.30s ease-in-out;
        -ms-transition: all 0.30s ease-in-out;
        -o-transition: all 0.30s ease-in-out;
    }
    .form-input:focus{
        border: 1px solid  ${({ theme }) => theme.color.tertiary};
        box-shadow: 0 0 8px ${({ theme }) => theme.color.tertiary};
    }
    .form-group{
        margin-top: 15px;
    }
    .form-error{
        padding-left: 5px;
    }
`;

export default SCForm