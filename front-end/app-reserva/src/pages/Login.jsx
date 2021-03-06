import React, {useState} from 'react';
import Header from '../components/Header/Header';
import { apiAuthentication } from "../service/connection-back";
import Fotter from '../components/Fotter/Fotter';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './css/Login.css';


function Login({history}) {

const [email, setEmail]=useState('');
const [password, setPassword] = useState('');


const onInputChangeEmail = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setEmail(value)
}


const onInputChangePassword = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setPassword(value)
}

const handleClick = () =>{
history.push('/home');
}

const handleAuthentication =async() =>{
try {
 
    if(!email.length && password.length){
        toast.info('Null email field!')
      }


      if(email.length && !password.length){
        toast.info('Null password field!')
      }

      if(!email.length && !password.length){
        toast.info('Null password and email fields!')
      }


      if (email.length && password.length) {
        const token = await apiAuthentication.post('/',
          {
            email: email,
            password: password,
          });

        if (token) {
          localStorage.setItem("token", JSON.stringify(token.data))
          handleClick();
        }  
      }     
} catch (error) {
    console.log(error.message);
    if(error.message ==='Request failed with status code 404')return toast.info('User Not Authentication')
}
}


    return ( 
        <div className="col-12">
        <Header />
        <form className="col-3" >

          <p className="text-justify custom-text-large custom-container-element-center">Login</p>

          <div className="input-group mb-3 custom-container-element-center">

            <div className="input-group-prepend">
              <span className="input-group-text custon-label-css" id="inputGroup-sizing-default">Email</span>
            </div>
            <input type="email"
              className="form-control custon-password-css"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              name="email"
              value={email}
              onChange={onInputChangeEmail}
              placeholder="example@xmail.com"
            />
          </div>


          <div className="input-group mb-3 custom-container-element-center">
            <div className="input-group-prepend">
              <span className="input-group-text custon-label-css" id="inputGroup-sizing-default">Password</span>
            </div>
            <input
              type="password"
              className="form-control custon-password-css"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              name="password"
              value={password}
              onChange={onInputChangePassword}
              placeholder="ExAmplE_Xablau"
            />
          </div>


          <div className="input-group mb-3 custom-container-element-center">
            <div className="input-group-prepend">
              <button
                type="button"
                className="btn btn-primary btn-lg custom-button"
                onClick={handleAuthentication}
              >
                Connect System
              </button>
            </div>
          </div>


          <div className="input-group mb-3 custom-container-element-center">
            <div className="input-group-prepend">
              <button
                type="button"
                className="btn btn-primary btn-lg custom-button"
                onClick={()=>{history.push('/createaccount')}}>
                Create Account
              </button>
            </div>
          </div>

          <div className="input-group mb-3 custom-container-element-center">
            <div className="input-group-prepend">
              <ToastContainer />
            </div>
          </div>
        </form>
        <Fotter />
      </div>
     );
}

export default Login;