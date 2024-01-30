import styled from "styled-components";
import fontUltraRegular from "../../assets/fonts/Ultra-Regular.ttf"

const ultraRegular = "Ultra-Regular"

export const FormStyle = styled.form`
    margin-top: 5%;

    display: flex;
    flex-direction: column;
    width: 42%;
    align-items: center;
    padding: 2%;
    background: transparent;
    height: 75vh;
    overflow-x: hidden;
    overflow-y: auto;

    background: rgba(0, 0, 0, 0.5);;
    border: 5px solid #ffffff;
    border-radius: 10px;

    &::-webkit-scrollbar {
    width: 10px;
    background:transparent ;
    
    
    
    }

    &::-webkit-scrollbar-track {
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: #FF7A00;
        border-radius: 10px;
    }



    @font-face {
    font-family: ${ultraRegular};
    src: url(${fontUltraRegular}) format('truetype');
    
  }

  h1{
    background-color: transparent;
    color: #FF7A00;
    font-family: ${ultraRegular},  Helvetica;
    font-size: 25px;
    font-weight: 300;
    margin-right: 44%;
    margin-bottom: 5%;
  }

  h2{
    color: #ffffff;
    background: transparent;
  }
    fieldset{
        width: 50%;
        background: transparent;
        border-color: transparent;
       
        max-width: 310px;



        div{
            display: flex;
            flex-direction: column;
            background: transparent;
            label{
                background: transparent;
                color: white;
                font-family: ${ultraRegular},  Helvetica;
            }
            input{
                height: 30px;
                background-color: white;
                border-radius: 20px;
            }
            select{
                height: 30px;
                background-color: white;
                border-radius: 20px;
                option{
                    background:transparent;
                   
                }          
            }
        }
        
    }

    .containerAdress{
        display: flex;
        flex-direction: column;
    }

    button{
    background-color: #FF7A00;
    color: black;
    font-family: ${ultraRegular},  Helvetica;
    font-size: 23px;
    padding: 5px;
    margin-top:5%;
    margin-bottom: 2%;
    border-radius: 10px;
    cursor: pointer;;
    }




`