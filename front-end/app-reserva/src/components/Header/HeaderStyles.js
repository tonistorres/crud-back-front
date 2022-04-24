import styled from "styled-components";

export const ContainerMain = styled.section`
  
  @media screen and (max-width: 2300px) and (min-width: 1px) {
  
    display: flex;
    position: fixed;
    height: 69px;
    top: 1px;
    width: 100%;
  }

  
`;

export const ContainerNavBar = styled.section`
  
  @media screen and (max-width: 2300px) and (min-width: 1px) {
    display: flex;
    height: 7vh;
    justify-content: space-between;
    width: 100%;
  }
  
`;

export const ContainerLista = styled.section`
  /* 1º Intervalo de configuração WDTH */
  @media screen and (max-width: 2300px) and (min-width: 1540px) {
    align-items: center;
    background-color: #509FA9;
    color: #f5f5f5;
    font-size: 28px;
    display: flex;
    justify-content: space-around;
    width: 48%;
    margin-left: 1%;
    margin-right: 1%;
    border-radius: 15px;
    a:link,
    a:visited {
      text-decoration: none;
      color:#f5f5f5 ;
    }
    a:hover {
      text-decoration: underline;
      color: #f00;
    }
    a:active {
      text-decoration: none;
    }
  }
  
  @media screen and (max-width: 1539px) and (min-width: 1345px) {
    
    display: none;
    
    }
  
    @media screen and (max-width: 1344px) and (min-width: 1px) {
      align-items: center;
    background-color: #509FA9;
    color: #f5f5f5;
    font-size: 28px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-left: 1%;
    margin-right: 1%;
    border-radius: 15px;
    a:link,
    a:visited {
      text-decoration: none;
      color:#f5f5f5 ;
    }
    a:hover {
      background-color:#fff ;
      border-radius:2px 55px 2px ;
      /* text-decoration: underline; */
      padding:10px 10px;
      color: #509FA9;
    }
    a:active {
      text-decoration: none;
    }
    
    }
  
`;

export const ContainerLogo = styled.section`
  @media screen and (max-width: 2300px) and (min-width: 1345px) {
    align-items: center;
    background-color: #f5f5f5;
    color: #777;
    display: flex;
    justify-content: space-around;
    height: 7vh;
    width: 100%;
    
    img {
      width: 50px;
      height: 50px;
    }
  }

  @media screen and (max-width: 1344px) and (min-width: 1px) {
    display:none;
  }
`;
