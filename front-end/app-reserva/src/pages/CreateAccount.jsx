import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { apiConnectionLogin } from "../service/connection-back";
import Header from '../components/Header/Header';
import Fotter from '../components/Fotter/Fotter';
import './css/CreateAccount.css';

export default class CreateAccount extends Component {

  constructor(props) {
    super(props)
    this.state = {
        user:'',
        email:'',
        password:'',
        address:'',
        city:''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.onInputChange=this.onInputChange.bind(this);
  }

  handleClick() {
    this.props.history.push('/login');
  }


  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  async handleCreate() {
    try {
      const {  user, email, password, address, city } = this.state;
      await apiConnectionLogin.post('/',{
         user:user,
         email:email,
         password:password,
         address:address,
         city:city
         });
 <div class="alert alert-primary" role="alert">
  This is a primary alert—check it out!
 </div>
      this.handleClick();
    } catch (error) {
      console.log("Erro Gerado:", error);
    }
  }

  render() {
    const {user, email, password, address, city}=this.state;
    return (
      <div class="col-12">
        <Header />
        <form class="col-3" >
        <p class="text-justify custom-text-large custom-container-element-center">User</p>

        <div class="input-group mb-3 custom-container-element-center">
        <div class="input-group-prepend">
        <span class="input-group-text custon-label-css" id="inputGroup-sizing-default">User</span>
        </div>
        <input type="text"
          class="form-control custon-inputs-css"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          name="user"
          value={user}
          onChange={this.onInputChange}
        />
       </div>

       <div class="input-group mb-3 custom-container-element-center">
        <div class="input-group-prepend">
        <span class="input-group-text custon-label-css" id="inputGroup-sizing-default">Email</span>
        </div>
        <input type="email"
          class="form-control custon-inputs-css"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          name="email"
          value={email}
          onChange={this.onInputChange}
        />
       </div>


       <div class="input-group mb-3 custom-container-element-center">
        <div class="input-group-prepend">
        <span class="input-group-text custon-label-css" id="inputGroup-sizing-default">Password</span>
        </div>
        <input type="password"
          class="form-control custon-inputs-css"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          name="password"
          value={password}
          onChange={this.onInputChange}
        />
       </div>

       <div class="input-group mb-3 custom-container-element-center">
        <div class="input-group-prepend">
        <span class="input-group-text custon-label-css" id="inputGroup-sizing-default">Address</span>
        </div>
        <input type="text"
          class="form-control custon-inputs-css"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          name="address"
          value={address}
          onChange={this.onInputChange}
        />
       </div>


       <div class="input-group mb-3 custom-container-element-center">
        <div class="input-group-prepend">
        <span class="input-group-text custon-label-css" id="inputGroup-sizing-default">City</span>
        </div>
        <input type="text"
          class="form-control custon-inputs-css"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          name="city"
          value={city}
          onChange={this.onInputChange}
        />
       </div>


       <div class="input-group mb-3 custom-container-element-center">
            <div class="input-group-prepend">
              <button
                type="button"
                class="btn btn-primary btn-lg custom-button"
                onClick={this.handleCreate}>
                Create User
              </button>
            </div>
          </div>
        </form>
        <Fotter />

      </div>
    )
  }
}
