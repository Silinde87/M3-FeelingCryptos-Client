import styled from 'styled-components';

const SCProfileEdit = styled.section`

    margin-left: 80px;
    margin: auto;
    max-height: 100vh;
    
    #info-container{
        display: flex;
        justify-content: center;
        margin-top: 20px;
        height: calc(100% - 60px);        
    }

    #form{
        width: 500px;
    }

    #recover-label{
        float:right;
    }

    #profile-pic{
        height: 130px;
        margin-left: 100px;
        margin-top: 60px;
        border-radius: 10px;
    }
    @media (max-width: 1000px){
        margin-left: 13px;
        #profile-pic{
            margin-left: 20px;
        }    
    }

    @media (max-width: 768px) {
        margin: 0;
        margin-left: 110px;

        #profile-pic{
            height: 80px;
        }  
    }
`;

export default SCProfileEdit;