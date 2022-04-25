import styled from "styled-components";


export const ContainerManList = styled.div`
  @media screen and (max-width: 2300px) and (min-width: 1500px) {
  background-color:yellow;
  display: flex;
  justify-content:center ;
  height:80% ;
  width:100% ;
  }

`;
export const ContainerMap = styled.div`
  @media screen and (max-width: 2300px) and (min-width: 1500px) {
  background-color:#e9e9e9;
  display: flex;
  height:100%;
  justify-content:center ;
  overflow-x: auto;
  width:100%;
table{
  background:brown;
  display:flex ;
  flex-direction:column;
  margin-bottom:0.5%;
  overflow-x: auto;
  width:100% ;

    /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #2379BD;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

  thead {
    display:flex ;
    background:white;
    font-size:20px;
    font-weight:700;
    color:red;
    justify-content:space-around;
    width:100% ;
    }
    tr{
    display:flex ;
    background:green;
    justify-content:space-between;
    margin-left:9% ;
    width:80% ;
    td{
    align-items:center;
    background:blue ;
    color:white;
    display:flex;
    font-size:20px;
    font-weight:300;
    height:5vh ;
    justify-content:start;
    width:80% ;
    }
    }
}
   
   }

`;

export const TitleMap = styled.h3`
  background: rgba(255, 255, 255, 0.95);
  color: #555;
  display: flex;
  justify-content: center;
`;
