import styled from 'styled-components';

const SCLogin = styled.section`  
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({theme}) => theme.color.background};
    padding-top: 40px;

    #social-login{
        width: 250px;
        margin-top: 20px;
        cursor: pointer;
    }

`;

export default SCLogin;