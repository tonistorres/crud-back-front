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
    background-color: #2379BD;
    color: #f5f5f5;
    font-size: 30px;
    font-weight:400;
    display: flex;
    justify-content: space-around;
    letter-spacing:0.5rem;
    height:6vh ;
    width: 48%;
    border-radius: 15px;
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
