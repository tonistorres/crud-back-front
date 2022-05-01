import React, { Component } from 'react';
import MyContext from '../MyContext/MyContext';
import { FormContainerInputs, InpuText, InpuNumber, InputDate, Button } from './FormInputsReserveStyles';
export default class FormReserve extends Component {

  render() {
    return (
      <MyContext.Consumer>
        {
          value => (
        <form onSubmit={this.onSubmit}>
              <FormContainerInputs>
                <label htmlFor="name">
                  Cliente:
                  <InpuText
                    type="text"
                    name="clientGlogal"
                    value={value.clientGlogal}
                    onChange={value.onInputChange}
                  />
                </label>
                <label htmlFor="room">
                  Room:
                  <InpuText
                    type="text"
                    name="roomGlobal"
                    value={value.roomGlobal}
                    onChange={value.onInputChange}
                  />
                </label>
                <label htmlFor="days">
                  Days:
                  <InpuNumber
                    name="daysGlobal"
                    value={value.daysGlobal}
                    onChange={value.onInputChange}
                    type="number"
                  />
                </label>
                <label htmlFor="DateReserve">
                  Date Reserve:
                  <InputDate
                    name="reservationDateGlobal"
                    value={value.reservationDateGlobal}
                    onChange={value.onInputChange}
                    type="date"
                  />
                </label>
                <label htmlFor="totalPrice">
                  Total Price:
                  <InpuNumber
                    name="totalPriceGlobal"
                    value={value.totalPriceGlobal}
                    onChange={value.onInputChange}
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
           )
         }
      </MyContext.Consumer>
    );
  }
}
