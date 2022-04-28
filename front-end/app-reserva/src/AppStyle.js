import styled from "styled-components";

export const ContainerMain = styled.div`
  @media screen and (max-width: 2300px) and (min-width: 1500px) {
  background-color:#F5F5F5;
  display: flex;
  flex-direction:column;
  height:100vh;
  justify-content:start;
  /* overflow: scroll;
  overflow-x: hidden; */
  width:100% ;

     td {
    font-size: 16px;
    letter-spacing:2px ;
    text-align: center;
    padding-top:2.5px;
    } 
/* 
  ::-webkit-scrollbar{
    width:25px;
    border-radius:5px 175px 5px;
  }

  ::-webkit-scrollbar-track{
    background-color:#395C79;
    border-radius:5px 175px 5px;
    width:20px;

  }

  ::-webkit-scrollbar-thumb{
      background-color:#657A70;
      border-radius:5px 175px 5px;
  }


  ::-webkit-scrollbar-thumb:hover{
      background-color:#50A0A9;
      border-radius:5px 175px 5px;
  }

  ::-webkit-scrollbar-button{
      background-color:#50A0A9;
      padding:2px 2px ;
      border-radius:15px 55px 5px;
  } */

  }

`;
