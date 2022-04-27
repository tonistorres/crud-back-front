import React, { Component } from 'react'
import { Route, Switch } from "react-router";
import image from './loading.gif'
import Home from '../../pages/Home.jsx';
import Header from '../Header/Header.jsx';
import Fotter from '../Fotter/Fotter.jsx';
import { ContainerMain } from './LoadingStyles.js';

export default class Loading extends Component {
 
  constructor() {
    super();
 
    this.state = {
        redirect: false,      
    }
    this.handleState = this.handleState.bind(this);
}

handleState() {
  this.setState({
      redirect: true,      
  })
}

  render() {
    const { redirect } = this.state;

    setTimeout(this.handleState, 3000);
    
         if (redirect) {
            return (
                <>
                    <Switch>
                        <Route path="/home" component={Home} />
                    </Switch>
                </>
            )
        }

    return (
      <>
         <Header />
        <ContainerMain>
          <img src={ image } alt="Logo Carregando Pagina" />
          </ContainerMain>
          <Fotter />
          </>
    )
  }
}