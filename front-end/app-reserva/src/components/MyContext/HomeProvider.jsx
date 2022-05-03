import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';
import { apiConnectionReservation } from "../../service/connection-back";
import { toast } from 'react-toastify';


function HomeProvider({ children }) {

  const [arrayValue, setArrayValue] = useState([]);
  const [clientGlogal, setClientGlobal] = useState('');
  const [roomGlobal, setRoomGlobal] = useState('');
  const [daysGlobal, setDayGlobal] = useState(0);
  const [reservationDateGlobal, setReservationGlobal] = useState('2022-05-20');
  const [totalPriceGlobal, setTotalGlobal] = useState(0);
  const [load, setLoad] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [tokenState, setTokenState] = useState('');

  // Maneira correta de fazer um useEfect ComponentDidMount Utilizando o Hook
  // useEfect - callback + lista vazia []
  useEffect(() => {
    const handleFindAll = async () => {
      try {
        const token = JSON.parse(window.localStorage.getItem("token"));
        console.log('token:',token);
        const response = await apiConnectionReservation.get('/',
          {
            headers: { authorization: token }
          });
          console.log('Aqui:',response.data);
        setArrayValue(response.data)
        toast.success('Sucess Authentication');
      } catch (error) {
        console.log("Erro Gerado Achou!!:", error);
      }
    }
    handleFindAll();
  }, []);


  // Maneira correta de fazer um useEfect ComponentDidMount Utilizando o Hook
  // useEfect - callback + lista vazia []
  useEffect(() => {

    const handleTokenLocalStorage = () => {
      var tokenLocalStorage = JSON.parse(localStorage.getItem("token"));
      setTokenState(tokenLocalStorage)
    }
    handleTokenLocalStorage();
  }, [])


  const onInputChangeclientGlogal = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setClientGlobal(value)
  }


  const onInputChangeRoomGlobal = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setRoomGlobal(value)
  }

  const onInputChangeDaysGlobal = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setDayGlobal(value)
  }


  const onInputChangeReservationDateGlobal = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setReservationGlobal(value)
  }
  //
  const onInputChangeTotalPriceGlobal = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setTotalGlobal(value)
  }
  const handleFindAll = async () => {
    try {
      const token = JSON.parse(window.localStorage.getItem("token"));
      const response = await apiConnectionReservation.get('/',
        {
          headers: { authorization: token }
        });
      setArrayValue(response.data)
      toast.success('Sucess Authentication');
    } catch (error) {
      console.log("Erro Gerado:", error);
    }
  }

  const handleTokenLocalStorage = () => {
    var tokenLocalStorage = JSON.parse(localStorage.getItem("token"));
    setTokenState(tokenLocalStorage)
  }

  const handleUpdateStatus = (evt) => {
    setTypedText(evt.target.value);
  }


  const handleBootTestTokenExpired = async () => {

    try {
      const token = JSON.parse(window.localStorage.getItem("token"));
      await apiConnectionReservation.get('/',
        {
          headers: { authorization: token }
        });
    } catch (error) {
      console.log(error.message);
      if (error.message === 'Request failed with status code 401') {
        toast.info('Token Expired');
      }
    }

  }


  const handleDelete = async (id) => {
    try {
      const token = JSON.parse(window.localStorage.getItem("token"));
      await apiConnectionReservation.delete(`/${id}`, { headers: { authorization: token } });
      toast.success('Register DELETE Sucess!!!');
      handleFindAll();
    } catch (error) {
      console.log(error);
    }
  }

  const handleCreate = async () => {

    try {

      const token = JSON.parse(window.localStorage.getItem("token"));
      await apiConnectionReservation.post('/',
        {
          client: clientGlogal,
          room: roomGlobal,
          days: daysGlobal,
          reservation: reservationDateGlobal,
          totalPrice: totalPriceGlobal
        }, { headers: { authorization: token } });

      handleFindAll();

    } catch (error) {
      console.log("Erro Gerado:", error);
    }
  }


  const onSaveButtonClick = () => {
    handleCreate();
  }

  return (
    
      <MyContext.Provider value={{
        handleFindAll,
        handleTokenLocalStorage,
        handleUpdateStatus,
        handleBootTestTokenExpired,
        handleDelete,
        handleCreate,
        onSaveButtonClick,
        arrayValue,
        setArrayValue,
        clientGlogal,
        setClientGlobal,
        roomGlobal,
        setRoomGlobal,
        daysGlobal,
        setDayGlobal,
        reservationDateGlobal,
        setReservationGlobal,
        totalPriceGlobal,
        setTotalGlobal,
        load,
        setLoad,
        redirect,
        setRedirect,
        typedText,
        setTypedText,
        tokenState,
        setTokenState,
        onInputChangeclientGlogal,
        onInputChangeRoomGlobal,
        onInputChangeDaysGlobal,
        onInputChangeReservationDateGlobal,
        onInputChangeTotalPriceGlobal
      }}>
        {children}
      </MyContext.Provider>
    
  );
}

export default HomeProvider;