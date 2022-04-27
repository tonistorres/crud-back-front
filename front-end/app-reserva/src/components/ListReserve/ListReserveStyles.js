import styled from "styled-components";


export const ContainerManList = styled.div`
  @media screen and (max-width: 2300px) and (min-width: 1px) {
  display: flex;
  flex-direction: column;
  justify-content:center ;
  height:80% ;
  width:100% ;
  }

`;

export const ContainerMap = styled.div`
  @media screen and (max-width: 2300px) and (min-width: 1px) {
  background-color:#e9e9e9;
  display: flex;
  height:100%;
  justify-content:center ;
  width:100%;
  overflow:auto ; 
  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #fff;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #2379BD;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #999;
  
}

}
`;

export const Button = styled.h3`
  align-items:center;
  border-radius:12px;
  background: #2379BD;
  color: #fff;
  display: flex;
  justify-content: center;
  height:100% ;
  width:100% ;
`;
