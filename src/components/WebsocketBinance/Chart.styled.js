import styled from "styled-components";

const SCChart = styled.div`
    #chart{
        width: 65vw;
        margin: auto;
    }
    .favorite-btn{
        transform: translate(-25px, 36px);
        font-size: 30px;
        color: #F3BA2E;
    }
    #chart-header{
        width: 65vw;
        margin: auto;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;        
    }
    #form-control{
        margin: 0;
        margin-bottom: 10px;
    }
    .MuiInputLabel-formControl{
        font-size: ${({ theme }) => theme.typographySizes.m.size};
        color: ${({ theme }) => theme.color.letterColor1};
    }
    .MuiInput-input{
        border-radius: 5px;
        border: 1px solid ${({ theme }) => theme.color.white};
    }   
    .MuiInputBase-input{
        color: ${({ theme }) => theme.color.searchInputLetter};
        padding: 5px 7px !important;  
    }
    .MuiInputBase-input > em {
        margin: auto 0;
    }
    #demo-controlled-open-select{
        font-size: 12px;
    }
    .MuiInput-underline:after,
    .MuiInput-underline:hover{
        border-bottom: 0;
    }
}`;

export default SCChart;
