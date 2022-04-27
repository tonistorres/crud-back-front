import React, { Component } from 'react';
import { Button } from './ListReserveStyles';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ListReserve extends Component {

    render() {
        const { arrayProps, onButtonDelete } = this.props;

        return (
            // <ContainerManList>
            <>
                {
                    <table class="table table-bordered table-light">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">CLIENTE</th>
                                <th scope="col">DIAS</th>
                                <th scope="col">QUARTO</th>
                                <th scope="col">PREÇO R$</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                arrayProps.map(({ id, client, days, room, totalPrice }) => (
                                    
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{client}</td>
                                            <td>{days}</td>
                                            <td>{room}</td>
                                            <td>{totalPrice}</td>
                                            <td>  <Button onClick={() => onButtonDelete(id)}>Excluir</Button></td>
                                        </tr>
                                    
                                ))

                            }
                        </tbody>
                    </table>

                }
            </>
        )
    }
}
