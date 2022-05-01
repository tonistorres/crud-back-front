import React, { Component } from 'react';
import Header from '../components/Header/Header';
import FormInputsReserve from '../components/InputsReserve/FormInputsReserve.jsx'
import ListReserve from '../components/ListReserve/ListReserve.jsx';
import { apiConnectionReservation } from "../service/connection-back";
import { ContainerManList } from '../components/ListReserve/ListReserveStyles';
import MyContext from '../components/MyContext/MyContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


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
      typedText: '',
      tokenState:''
    };

    this.handleFindAll = this.handleFindAll.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.onButtonDelete = this.onButtonDelete.bind(this);
    this.handleUpdateStatus = this.handleUpdateStatus.bind(this);
    this.handleTokenLocalStorage = this.handleTokenLocalStorage.bind(this);
    this.handleBootTestTokenExpired = this.handleBootTestTokenExpired.bind(this);
  }

  componentDidMount() {
    this.handleFindAll();
    this.handleTokenLocalStorage();
  }

handleTokenLocalStorage(){
  var tokenLocalStorage =JSON.parse( localStorage.getItem("token"));  
  this.setState({tokenState:tokenLocalStorage})
}

  handleUpdateStatus(evt) {
    this.setState({
      typedText: evt.target.value
    })
  }

async handleBootTestTokenExpired(){

try {
  const token = JSON.parse(window.localStorage.getItem("token"));
   await apiConnectionReservation.get('/',
    {
      headers: { authorization: token }
    });
} catch (error) {
  console.log(error.message);
  if(error.message==='Request failed with status code 401'){
    toast.info('Token Expired');
  }
}
  
}

  async handleFindAll() {
    try {
      const token = JSON.parse(window.localStorage.getItem("token"));
      
      const response = await apiConnectionReservation.get('/',
        {
          headers: { authorization: token }
        });

      this.setState({
        arrayValue: response.data,
      });
      toast.success('Sucess Authentication');
    } catch (error) {
      console.log("Erro Gerado:", error);
    }
  }


  async handleDelete(id) {
    try {
      const token = JSON.parse(window.localStorage.getItem("token"));
      await apiConnectionReservation.delete(`/${id}`,{ headers: { authorization: token }});
      toast.success('Register DELETE Sucess!!!');
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
      const token = JSON.parse(window.localStorage.getItem("token"));
      await apiConnectionReservation.post('/',
        {
          client: clientGlogal,
          room: roomGlobal,
          days: daysGlobal,
          reservation: reservationDateGlobal,
          totalPrice: totalPriceGlobal
        },{headers: { authorization: token }});

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
    const { tokenState } = this.state;
console.log(this.tokenState);
    // https://pt-br.reactjs.org/docs/context.html
    const valueDefault = {
      clientGlogal: this.state.clientGlogal,
      roomGlobal: this.state.roomGlobal,
      daysGlobal: this.state.daysGlobal,
      reservationDateGlobal: this.state.reservationDateGlobal,
      totalPriceGlobal: this.state.totalPriceGlobal,
      arrayProps: this.state.arrayValue,
      onInputChange: this.onInputChange,
      onSaveButtonClick: this.onSaveButtonClick,
      onButtonDelete: this.onButtonDelete,
      typedText: this.state.typedText,
      handleUpdateStatus: this.handleUpdateStatus,
      handleBootTestTokenExpired:this.handleBootTestTokenExpired
    }

    return (
      <ContainerManList>
        <Header />
        <MyContext.Provider value={valueDefault}>
          <FormInputsReserve />
          <ListReserve token={tokenState} />
        </MyContext.Provider>
        <ToastContainer />
      </ContainerManList>
    )
  }
}
