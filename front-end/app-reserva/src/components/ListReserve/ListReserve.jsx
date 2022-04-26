import React, { Component } from 'react';
import { Redirect } from "react-router";

import {
    ContainerMap,
    ContainerManList,
    Button
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
    TableThId,
    TableTrData,
    TableThDias,
    TableThClient,
    TableThRoom,
    TableThPreco
} from './Tabela';

export default class ListReserve extends Component {

  constructor() {
    super();
    this.state = {
        redirect: false,
        loading: true
    }
    this.handleState = this.handleState.bind(this);
}

handleState() {
  this.setState({
      redirect: true,
      loading: false
  })
}

    render() {
        const { arrayProps, onButtonDelete } = this.props;
        return (
            <ContainerManList>
                {
                    // https://www.youtube.com/watch?v=rF6guBbfTl0

                    // arrayProps.length ? (
                        <ContainerMap>
                        <Table>
                            <TableHead>
                                <TableTrData>
                                    <TableThId>ID</TableThId>
                                    <TableThClient>CLIENTE</TableThClient>
                                    <TableThDias>DIAS</TableThDias>
                                    <TableThRoom>QUARTO</TableThRoom>
                                    <TableThPreco>PRECO R$</TableThPreco>


                                </TableTrData>
                            </TableHead>
                            {
                                // https://www.w3schools.com/html/html_tables.asp
                                arrayProps.map(({ id, client, days, room, totalPrice }, index) => (
                                    <TableBody>
                                        <TableTrData key={index + 1}>
                                            <TabletdId>{id}</TabletdId>
                                            <TableDataClient>{client}</TableDataClient>
                                            <TabletdDias>{days}</TabletdDias>
                                            <TableDataRoom>{room}</TableDataRoom>
                                            <TabletdPreco>{totalPrice}</TabletdPreco>
                                            <TabletdButton>  <Button onClick={() => onButtonDelete(id)}>Excluir</Button></TabletdButton>
                                        </TableTrData>
                                    </TableBody>
                                ))
                            }
                        </Table>
                          </ContainerMap>
                    // ) : (
                    //     <ContainerMap>
                    //       <Redirect to="/notfound"/>
                    //     </ContainerMap>

                    // )
                }

            </ContainerManList>
        )
    }
}
