import React from 'react';
import Header from '../components/Header/Header';
import FormReserve from '../components/FormReserve/FormReserve';
import ListReserve from '../components/ListReserve/ListReserve.jsx';
import { ContainerManList } from '../components/ListReserve/ListReserveStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import HomeProvider from '../components/MyContext/HomeProvider';

function Home() {
    return (
        <ContainerManList>
            <HomeProvider >
            <Header />
            <FormReserve />
            <ListReserve />
            <ToastContainer />
            </HomeProvider >
        </ContainerManList>
    );
}

export default Home;