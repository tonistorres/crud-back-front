import React, { Component } from 'react'
import Header from './components/Header/Header.jsx';
import Fotter from './components/Fotter/Fotter.jsx';
import reservations from "./service/connection-back.js";
import FormInputsReserve from './components/InputsReserve/FormInputsReserve.jsx';
import ListReserve from './components/ListReserve/ListReserve.jsx';
import { ContainerMain } from './AppStyle';
// import axios from "axios";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayValue: [],
      clientGlogal:'',
      roomGlobal: '',
      daysGlobal: 0,
      reservationDateGlobal:'2022-05-20',
      totalPriceGlobal:0
    };

    this.handleFindAll = this.handleFindAll.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

  }


  componentDidMount() {
    this.handleFindAll();    
  }


  async handleFindAll() {
    try {
      const response = await reservations.get('/');
      this.setState({
        arrayValue: response.data,        
      });

    } catch (error) {
      console.log("Erro Gerado:", error);
    }
  }


  async handleCreate() {
    
    try {
      const {clientGlogal, roomGlobal, daysGlobal, reservationDateGlobal, totalPriceGlobal}= this.state;
      console.log(clientGlogal, roomGlobal);
      await reservations.post('/',
      {
      
        
          client:clientGlogal, 
          room:roomGlobal,
          days:daysGlobal,
          reservation:reservationDateGlobal,
          totalPrice:totalPriceGlobal
        
        });

       this.handleFindAll();

    } catch (error) {
      console.log("Erro Gerado:", error);
    }
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick = () => {
     this.handleCreate();    
  }



  render() {
    const { arrayValue } = this.state;

    return (
      <>
        <Header />
      <ContainerMain>
      <FormInputsReserve
                 onInputChange={ this.onInputChange }
                 onSaveButtonClick={ this.onSaveButtonClick }
                { ...this.state }
              />
        
         <ListReserve
         arrayProps={arrayValue}
         />
      </ContainerMain>
        <Fotter />
      </>
    )
  }
}
