import React, { Component } from 'react';
import {
    ContainerMap,
    TitleMap,
    ContainerManList
} from './ListReserveStyles';

import {
    TableDataClient,
    TabletdButton,
    TabletdPreco,
    Table,
    TableHead,
    TabletdId,
    TabletdDias,
    TableDataRoom,
    TableBody,
    TableThId
} from './Tabela';

export default class ListReserve extends Component {
    render() {
        const { arrayProps, onButtonDelete } = this.props;
        return (
            <ContainerManList>
                {
                    // https://www.youtube.com/watch?v=rF6guBbfTl0

                    arrayProps.length ? (
                        // <ContainerMap>
                        <Table>
                            <TableHead>
                                <tr>
                                    <TableThId>id</TableThId>
                                    <th>Cliente</th>
                                    <th>Dias</th>
                                    <th>Quarto</th>
                                    <th>Preço R$</th>


                                </tr>
                            </TableHead>
                            {
                                // https://www.w3schools.com/html/html_tables.asp
                                arrayProps.map(({ id, client, days, room, totalPrice }, index) => (
                                    <TableBody>
                                        <tr key={index + 1}>
                                            <TabletdId>{id}</TabletdId>
                                            <TableDataClient>{client}</TableDataClient>
                                            <TabletdDias>{days}</TabletdDias>
                                            <TableDataRoom>{room}</TableDataRoom>
                                            <TabletdPreco>{totalPrice}</TabletdPreco>
                                            <TabletdButton>  <button onClick={() => onButtonDelete(id)}>🗑️</button></TabletdButton>
                                        </tr>
                                    </TableBody>
                                ))
                            }
                        </Table>
                        //  </ContainerMap>
                    ) : (
                        <ContainerMap>
                            <TitleMap>Sem Repositories</TitleMap>
                            <h1> Pagina NOT FOUND</h1>
                        </ContainerMap>

                    )
                }

            </ContainerManList>
        )
    }
}
