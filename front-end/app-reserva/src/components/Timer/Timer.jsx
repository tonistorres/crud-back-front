import React, { Component } from 'react'
import {ContainerMainTimer} from './TimerStyles'
import { toast, ToastContainer } from 'react-toastify';
import { Redirect } from "react-router";
import 'react-toastify/dist/ReactToastify.min.css';
//https://codesandbox.io/s/react-timer-8kgmk?file=/src/App.js:204-258
export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 65,
      visible: true,
      redirect:false,
    }
   
  }


  handleClick() {
    this.props.history.push('/login');
  }

  timer() {
    this.setState({
      currentCount: this.state.currentCount - 1
    })

    if (this.state.currentCount < 1) {
      clearInterval(this.intervalId);
      this.setState({
        visible: false,
        
      })
    }

    if(this.state.currentCount ===5){
      const {handleBootTestTokenExpired}=this.props;      
      handleBootTestTokenExpired();
    }


    if(this.state.currentCount ===3){
      toast.info('Clear LocalStorage');      
    }

    if(this.state.currentCount ===2){
      localStorage.removeItem('token')  
    }

    if(this.state.currentCount ===1){
      toast.success('Redirect Login');      
    }

    if(this.state.currentCount === 0){
      this.setState({redirect:true})
    }

  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    const { visible, redirect} = this.state;
    const {mensagem} = this.props;
    if(redirect) return <Redirect to="/login" />
    if (visible) {
      return (
        <>
        <ContainerMainTimer>{this.state.currentCount} segundos</ContainerMainTimer>
        <ToastContainer />
        </>
      );
    } else {
      return (
        <ContainerMainTimer>{mensagem}</ContainerMainTimer>
      )
    }
  }
}

