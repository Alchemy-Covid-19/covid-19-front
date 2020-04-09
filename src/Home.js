import React, { Component } from 'react'
import { Link } from "react-router-dom";
import request from 'superagent';
//import Location from './Location.js'

export default class Home extends Component {
  state = {
    nameSignUp: '',
    phoneNumberSignUp: '',
  }
  handleSignUp = async () => {
    // making a request to our signup route

    const signUp = await request.post(`https://covid-19-stat-dev.herokuapp.com/api/signup`, {
      Name: this.state.nameSignUp,
      phoneNumber: this.state.phoneNumberSignUp,
      location: this.state.locationSignUp
    })

    this.props.setUser(signUp);
    localStorage.setItem('user', JSON.stringify(signUp.body));
    // this redirects the user after sign up
    this.props.history.push('/confirmation');

  }
  render() {
    return (
        <div id="login">Name: <input value={this.state.nameSignUp} onChange={(e) => this.setState({ nameSignUp: e.target.value })} />Phone Number: +1 <input value={this.state.phoneNumberSignUp} type="phone number" onChange={(e) => this.setState({ phoneNumberSignUp: e.target.value })} />
        
        {/* Insert Location select form here */}
        
          <span>
          <button onClick={this.handleSignUp}>Sign Up</button>
          </span>
        </div>
    )
  }
}