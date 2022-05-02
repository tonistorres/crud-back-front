import React,{ useContext } from 'react';
import MyContext from '../MyContext/MyContext';
import { FormContainerInputs, InpuText, InpuNumber, InputDate, Button } from './FormInputsReserveStyles';


function FormReserve() {
  const value = useContext(MyContext);
    return (  
        <div >
        <form  >
        <FormContainerInputs>
        <label htmlFor="name">
              Cliente:
              <InpuText
                type="text"
                name="clientGlogal"
                  value={value.clientGlogal}
                  onChange={value.onInputChangeclientGlogal}
              />
            </label>

            <label htmlFor="room">
              Room:
              <InpuText
                type="text"
                name="roomGlobal"
                 value={value.roomGlobal}
                 onChange={value.onInputChangeRoomGlobal}
              />
            </label>

            <label htmlFor="days">
              Days:
              <InpuNumber
                name="daysGlobal"
                 value={value.daysGlobal}
                 onChange={value.onInputChangeDaysGlobal}
                type="number"
              />
            </label>

            <label htmlFor="DateReserve">
              Date Reserve:
              <InputDate
                name="reservationDateGlobal"
                 value={value.reservationDateGlobal}
                onChange={value.onInputChangeReservationDateGlobal}
                type="date"
              />
            </label>


            <label htmlFor="totalPrice">
              Total Price:
              <InpuNumber
                name="totalPriceGlobal"
                 value={value.totalPriceGlobal}
                 onChange={value.onInputChangeTotalPriceGlobal}
                type="number"
              />
            </label>

            <Button
              type="reset"
               onClick={value.onSaveButtonClick}
            >
              Salvar
            </Button>

            
          </FormContainerInputs>
        </form>
       </div> 
    );
}

export default FormReserve;