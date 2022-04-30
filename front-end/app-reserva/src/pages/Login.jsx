import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header/Header';
import { apiAuthentication } from "../service/connection-back";
import Fotter from '../components/Fotter/Fotter';
import './css/Login.css';


export default class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.onInputChange = this.onInputChange.bind(this);

  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    this.props.history.push('/home');
  }


  async handleAuthentication() {
    try {
      const { email, password } = this.state;
      const token = await apiAuthentication.post('/',
        {
          email: email,
          password: password,
        });
     
        await window.localStorage.setItem("token",JSON.stringify(token.data))  
        console.log(token);

      this.handleClick();
    } catch (error) {
      console.log("Erro Gerado:", error);
    }
  }


  render() {
    const { email, password } = this.state;
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
              class="form-control custon-password-css"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              name="email"
              value={email}
              onChange={this.onInputChange}
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
              name="password"
              value={password}
              onChange={this.onInputChange}
            />
          </div>


          <div class="input-group mb-3 custom-container-element-center">
            <div class="input-group-prepend">
              <button
                type="button"
                class="btn btn-primary btn-lg custom-button"
                onClick={this.handleAuthentication}
                >
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
