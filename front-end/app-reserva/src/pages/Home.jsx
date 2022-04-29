import React, { Component } from 'react';
import Header from '../components/Header/Header';
import FormInputsReserve from '../components/InputsReserve/FormInputsReserve.jsx'
import ListReserve from '../components/ListReserve/ListReserve.jsx';
import reservations from "../service/connection-back";
import { ContainerManList} from '../components/ListReserve/ListReserveStyles';
import MyContext from '../components/MyContext/MyContext';

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
          typedText:''
        };
    
        this.handleFindAll = this.handleFindAll.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.onButtonDelete = this.onButtonDelete.bind(this);
        this.handleUpdateStatus=this.handleUpdateStatus.bind(this);
       }
    
      componentDidMount() {
       this.handleFindAll();        
      }
        
      handleUpdateStatus(evt){
        this.setState({
        typedText: evt.target.value    
        })
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
    const { arrayValue } = this.state;

    // https://pt-br.reactjs.org/docs/context.html
    const valueDefault ={
      clientGlogal:this.state.clientGlogal,
      roomGlobal:this.state.roomGlobal,
      daysGlobal:this.state.daysGlobal,
      reservationDateGlobal:this.state.reservationDateGlobal,
      totalPriceGlobal:this.state.totalPriceGlobal,
      arrayValue:this.state.arrayValue,
      onInputChange:this.onInputChange,
      onSaveButtonClick:this.onSaveButtonClick,
      onButtonDelete:this.onButtonDelete,
      typedText:this.state.typedText,
      handleUpdateStatus:this.handleUpdateStatus,      
    }
    
        return (
            <ContainerManList>
              <Header/>
              <MyContext.Provider value={ valueDefault }>
               <FormInputsReserve />

              <ListReserve
                arrayProps={arrayValue}
                onButtonDelete={this.onButtonDelete}
                handleUpdateStatus={this.handleUpdateStatus}
                typedText={this.state.typedText}
                
              />  
            </MyContext.Provider>
            </ContainerManList>
        )
    }
}
