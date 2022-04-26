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

  @media screen and (max-width: 2300px) and (min-width: 1px) {
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
  

  
`;

export const ContainerLogo = styled.section`
  @media screen and (max-width: 2300px) and (min-width: 1px) {
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


`;
