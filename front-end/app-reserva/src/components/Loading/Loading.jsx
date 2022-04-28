import React, { Component } from 'react'
import { Redirect } from "react-router";
import imgFull from './fullStack.gif';
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

componentDidMount(){
  setTimeout(()=>{
return this.setState({redirect:true})
  }, 8000);  
}

handleState() {
  this.setState({
    redirect: true,      
  })
}

render() {

  const { redirect } = this.state;

  if(redirect) return <Redirect to="/home" />
    
    return (
      <>
         <Header />
        <ContainerMain>
        <div><img src={ imgFull } alt="full Stack"  /></div>
        
              
          </ContainerMain>
          <Fotter />
          </>
    )
  }
}