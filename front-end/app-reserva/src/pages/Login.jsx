import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header/Header';
import Fotter from '../components/Fotter/Fotter';
import './css/Login.css';


export default class Login extends Component {

  constructor(props){
    super(props)
    this.state ={

    }
this.handleClick=this.handleClick.bind(this);
  }

   handleClick() {    
     this.props.history.push('/createaccount');    
  } 

  render() {
    
    return (
      <div class="col-12">
        <Header />
        <form class="col-3" >
        
          <p class="text-justify custom-text-large custom-container-element-center">Login</p>
        
          <div class="input-group mb-3 custom-container-element-center">
        
            <div class="input-group-prepend">
            <span class="input-group-text custon-label-css" id="inputGroup-sizing-default">Email</span>
            </div>
            <input type="email"
              class="form-control custon-email-css"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
           </div>


          <div class="input-group mb-3 custom-container-element-center">
            <div class="input-group-prepend">
              <span class="input-group-text custon-label-css" id="inputGroup-sizing-default">Senha</span>
            </div>
            <input
              type="password"
              class="form-control custon-password-css"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>


          <div class="input-group mb-3 custom-container-element-center">
            <div class="input-group-prepend">
              <button
                type="button"
                class="btn btn-primary btn-lg custom-button">
                Connect System
              </button>
            </div>
          </div>
        

          <div class="input-group mb-3 custom-container-element-center">
            <div class="input-group-prepend">
              <button
                type="button"
                class="btn btn-primary btn-lg custom-button"
                onClick={this.handleClick}>
                Create Account
              </button>
            </div>
          </div>
        
        
        </form>
        <Fotter />
      </div>
    )
  }
}
