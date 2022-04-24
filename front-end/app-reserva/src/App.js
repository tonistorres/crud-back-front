import React, { Component } from 'react'
import Header from './components/Header/Header.jsx';
import Fotter from './components/Fotter/Fotter.jsx';
import reservations from "./service/connection-back.js";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayValue: [],
    };
    this.handleFindAll = this.handleFindAll.bind(this);
  }


  componentDidMount() {
    this.handleFindAll();    
  }


  async handleFindAll() {
    try {
      const response = await reservations.get('/');
      this.setState({
        arrayValue: response.data,        
      });

    } catch (error) {
      console.log("Erro Gerado:", error);
    }
  }

  render() {
    return (
      <div>
        <Header />

        <Fotter />
      </div>
    )
  }
}
