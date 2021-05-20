import styled from "styled-components";

const SCForm = styled.form`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;

    .form-input{
        width: 490px;
        padding: 5px 5px;
        outline: none;
        border:1px solid ${({ theme }) => theme.color.secondary};
        margin-top: 8px;
        margin-bottom: 8px;
        -webkit-transition: all 0.30s ease-in-out;
        -moz-transition: all 0.30s ease-in-out;
        -ms-transition: all 0.30s ease-in-out;
        -o-transition: all 0.30s ease-in-out;
        background-color: ${({ theme }) => theme.color.formInput};
    }
    .form-input:focus{
        border: 1px solid  ${({ theme }) => theme.color.primary};
        box-shadow: 0 0 4px ${({ theme }) => theme.color.tertiary};
    }
    .form-group{
        margin-top: 35px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .form-error{
        padding-left: 5px;
        position: absolute;
        transform: translate(0px, 35px)
    }
    .form-already-label{
        width: 100%;
    }
`;

export default SCForm