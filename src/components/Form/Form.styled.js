import styled from "styled-components";

const SCForm = styled.form`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    .form-input{
        width: 490px;
        padding: 3px 5px;
        outline: none;
        border:1px solid ${({ theme }) => theme.color.secondary};
        margin-top: 8px;
        margin-bottom: 8px;
        -webkit-transition: all 0.30s ease-in-out;
        -moz-transition: all 0.30s ease-in-out;
        -ms-transition: all 0.30s ease-in-out;
        -o-transition: all 0.30s ease-in-out;
    }
    .form-input:focus{
        border: 1px solid  ${({ theme }) => theme.color.primary};
        box-shadow: 0 0 4px ${({ theme }) => theme.color.tertiary};
    }
    .form-group{
        margin-top: 15px;
    }
    .form-error{
        padding-left: 5px;
        margin-bottom: 5px;
    }
    .form-already-label{
        width: 100%;
    }
`;

export default SCForm