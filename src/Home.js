import React, { Component } from 'react'
import { Link } from "react-router-dom";
import request from 'superagent';
import Location from './Location.js';
import cors from 'cors';

export default class Home extends Component {
  state = {
    nameSignUp: '',
    phoneNumberSignUp: '',
    locationSignUp:'',
  }
  handleSignUp = async (e) => {
    e.preventDefault();
    // making a request to our signup route

    await request
      .post('http://localhost:7890/api/v1/users/welcome')
      .send({
      firstName: this.state.nameSignUp,
      phoneNumber: this.state.phoneNumberSignUp,
      location: this.state.locationSignUp
    })

    // this.props.setUser(signUp);
    // localStorage.setItem('user', JSON.stringify(signUp.body));
    // this redirects the user after sign up
    this.props.history.push('/confirmation');

  }
  handleSelect = (e) => {
		this.setState({ locationSignUp: e.target.value })
		
    }

  render() {
    return (


      <form onSubmit={ this.handleSignUp }>

      <div id="login">8
        <li>
          <ul>Name: <input value={this.state.nameSignUp} onChange={(e) => this.setState({ nameSignUp: e.target.value })} /></ul>
          <ul>Phone Number: +1 <input value={this.state.phoneNumberSignUp} type="phone number" onChange={(e) => this.setState({ phoneNumberSignUp: e.target.value })} /></ul>
          <ul>Location: <Location handleSelect={this.handleSelect}/> </ul>
        </li>
          <button>Sign Up</button>
        </div>
      </form>

    )
  }
}