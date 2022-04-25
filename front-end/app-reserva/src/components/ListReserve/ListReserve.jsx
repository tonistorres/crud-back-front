import React, { Component } from 'react';
import { ContainerMap, TitleMap, ContainerManList } from './ListReserveStyles';

export default class ListReserve extends Component {
    render() {
        const { arrayProps} = this.props;
        return (
            <ContainerManList>
                {
                    // https://www.youtube.com/watch?v=rF6guBbfTl0
                    
                    arrayProps.length ? (
                        <ContainerMap>
                            <table>
                                <thead>
                                    <th>id</th>
                                    <th>Cliente</th>
                                    <th>Dias</th>
                                    <th>Quarto</th>
                                    <th>Preço R$</th>
                                
                              </thead>  
                                {
                                    // https://www.w3schools.com/html/html_tables.asp
                                    arrayProps.map(({ id, client, days, room, totalPrice }, index) => (
                                        <tr key={id}>
                                            <td>{index + 1}</td>
                                            <td>{client}</td>
                                            <td>{days}</td>
                                            <td>{room}</td>
                                            <td>{totalPrice}</td>
                                            <button onclick="myFunction()">🗑️</button>

                                        </tr>

                                    ))
                                }
                            </table>
                         </ContainerMap>
                    ) : (
                        <ContainerMap>
                            <TitleMap>Sem Repositories</TitleMap>
                            <h1> Pagina NOT FOUND</h1>
                             {/* <UserPicture url={url} alternativeText="Foto Perfil GitHub" />
                            <img src={GitTriste} alt="Git Triste" /> */}
                         </ContainerMap> 

                    )
                }

            </ContainerManList>
        )
    }
}
