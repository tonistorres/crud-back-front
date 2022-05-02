import React, { useState } from 'react';
import { apiConnectionLogin } from "../service/connection-back";
import Header from '../components/Header/Header';
import Fotter from '../components/Fotter/Fotter';
import './css/CreateAccount.css';


function CreateAccount({ history }) {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    
    const handleClick = () => {
        history.push('/login');
    }

    const onInputChangeUser = ({ target }) => {
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setUser(value)
    }

    const onInputChangeEmail = ({ target }) => {
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setEmail(value)
    }

    const onInputChangePassword = ({ target }) => {
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setPassword(value)
    }


    const onInputChangeAddress = ({ target }) => {
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setAddress(value)
    }

    const onInputChangeCity = ({ target }) => {
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setCity(value)
    }

    const handleCreate = async () => {
        try {
            await apiConnectionLogin.post('/', {
                user: user,
                email: email,
                password: password,
                address: address,
                city: city
            });
            handleClick();
        } catch (error) {
            console.log("Erro Gerado:", error);
        }
    }


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
          onChange={onInputChangeUser}
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
          onChange={onInputChangeEmail}
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
          onChange={onInputChangePassword}
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
          onChange={onInputChangeAddress}
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
          onChange={onInputChangeCity}
        />
       </div>


       <div class="input-group mb-3 custom-container-element-center">
            <div class="input-group-prepend">
              <button
                type="button"
                class="btn btn-primary btn-lg custom-button"
                onClick={handleCreate}>
                Create User
              </button>
            </div>
          </div>
        </form>
        <Fotter />

      </div>

     );



}

export default CreateAccount;