import React, { Component } from 'react';
import Timer from '../Timer/Timer';
import imgDocker from './docker.gif'
import bootstrap from './bootstrap.gif'
import './Button.css';
import './Filter.css';
import './TokenAuthenctication.css';

export default class ListReserve extends Component {



    render() {
        const { arrayProps, onButtonDelete, handleUpdateStatus, typedText,token,handleBootTestTokenExpired} = this.props;
        
        return (
            <>
                <div className="App-container-input">
                    <span>Fileter Cliente:</span>
                    <div className='filter-tecnology'>
                        <div> <input onChange={handleUpdateStatus} value={typedText} className="App-style-search" type="text" /></div>
                        <img src={imgDocker} alt="Docker" width='100px' height='80px' />
                        <div><img src={bootstrap} alt="Bootstrap" width='100px' height='80px' /></div>
                        <Timer shandleBootTestTokenExpired={handleBootTestTokenExpired} />
                    </div>
                </div>
                {
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">CLIENTE</th>
                                    <th scope="col">DIAS</th>
                                    <th scope="col">QUARTO</th>
                                    <th scope="col">PREÇO R$</th>
                                </tr>
                            </thead>
                            <tbody >

                                {


                                    arrayProps.filter((reserve) => reserve.client.toLowerCase().includes(typedText.toLowerCase()))
                                        .map(({ id, client, days, room, totalPrice }) => (

                                            <tr key={id} className="table-success">
                                                <td>{id}</td>
                                                <td>{client}</td>
                                                <td>{days}</td>
                                                <td>{room}</td>
                                                <td>{totalPrice}</td>
                                                <td >  <button className='btn-style-one' onClick={() => onButtonDelete(id)}>Excluir</button></td>
                                            </tr>

                                        ))

                                }
                            </tbody>
                            <tfoot className="table-dark">
                                <tr >
                                    <th>BACK e DB MYSQL - DOKERIZADO</th>
                                </tr>
                            </tfoot>
                        </table>
                            <div className='custom-tken-authentication'><strong>TOKEN:</strong>{`${token}`}</div>
                    </div>
                }
            </>
        )
    }
}
