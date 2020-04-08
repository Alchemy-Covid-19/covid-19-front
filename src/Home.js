import React, { Component } from 'react'
import { Link } from "react-router-dom";
import request from 'superagent';


export default class Home extends Component {
  state = {
    nameSignUp: '',
    phoneNumberSignUp: '',
  }
  handleSignUp = async () => {
    // making a request to our signup route on our API and checking with the data on our server

    const signUp = await request.post(`https://covid-19-stat-dev.herokuapp.com/api/signup`, {
      Name: this.state.nameSignUp,
      phoneNumber: this.state.phoneNumberSignUp,
      location: this.state.locationSignUp
    })
    // setting the user object into local storage to so we can navigate to other pages after sign up
    localStorage.setItem('user', JSON.stringify(signUp.body));
    // this redirects the user after sign up

  }
  render() {
    return (
        <div id="login">Name: <input value={this.state.nameSignUp} onChange={(e) => this.setState({ nameSignUp: e.target.value })} />Phone Number: +1 <input value={this.state.phoneNumberSignUp} type="phone number" onChange={(e) => this.setState({ phoneNumberSignUp: e.target.value })} />
          <span>
          <button onClick={this.handleSignUp}>Sign Up</button>
          </span>
        </div>
    )
  }
}