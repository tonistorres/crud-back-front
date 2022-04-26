import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Fotter from '../components/Fotter/Fotter.jsx';
import reservations from "../service/connection-back";
import FormInputsReserve from '../components/InputsReserve/FormInputsReserve.jsx';
import ListReserve from '../components/ListReserve/ListReserve.jsx';
import { ContainerMain } from '../AppStyle';
import Loading from '../components/Loading/Loading.jsx';
import NotFound from '../components/NotFound/NotFound.jsx';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          arrayValue: [],
          clientGlogal: '',
          roomGlobal: '',
          daysGlobal: 0,
          reservationDateGlobal: '2022-05-20',
          totalPriceGlobal: 0,
          load: false,
          redirect: false,
        };
    
        this.handleFindAll = this.handleFindAll.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.onButtonDelete = this.onButtonDelete.bind(this);

      }
    
    

      componentDidMount() {
        this.setState(
          { load: true },
          async () => {
            this.handleFindAll();
            this.setState(
              { load: false },
            );
          },
        );
      }
        
      async handleFindAll() {
        try {
          const response = await reservations.get('/');
          console.log('response:',response.data);  
          

          this.setState({
            arrayValue: response.data,
          });
    
        } catch (error) {
         
            this.setState({
              redirect:true,
            })
            console.log("Erro Gerado:", error);
        }
      }
    
    
      async handleDelete(id) {
        try {
          await reservations.delete(`/${id}`);
          this.handleFindAll();
        } catch (error) {
          console.log(error);
        }

      }
    
    
    
      onButtonDelete = (id) => {
        this.handleDelete(id);
      }
    
      async handleCreate() {
    
        try {
          const { clientGlogal, roomGlobal, daysGlobal, reservationDateGlobal, totalPriceGlobal } = this.state;
    
          await reservations.post('/',
            {
              client: clientGlogal,
              room: roomGlobal,
              days: daysGlobal,
              reservation: reservationDateGlobal,
              totalPrice: totalPriceGlobal
    
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
        
        const { arrayValue, load, redirect } = this.state;
        if (load) return <Loading />
        if(redirect){
           return <NotFound />           
        }
        return (
          <>
            <Header />
            <ContainerMain>
              <FormInputsReserve
                onInputChange={this.onInputChange}
                onSaveButtonClick={this.onSaveButtonClick}
    
                {...this.state}
              />
    
              <ListReserve
                arrayProps={arrayValue}
                onButtonDelete={this.onButtonDelete}
              />
            </ContainerMain>
            <Fotter />
          </>
        )
      }
    }
