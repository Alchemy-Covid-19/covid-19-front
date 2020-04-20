import React, { Component } from 'react'
import { Link } from "react-router-dom";
import request from 'superagent';
import Location from './Location.js';
import './Home.css';
import Footer from './Footer.js';

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
      .post('https://covid-19-stat-dev.herokuapp.com/api/v1/users/welcome', {
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
      <div id="login">
        <form onSubmit={ this.handleSignUp }>
          <div className="signup">
            <h1 ClassName="signupText">Sign Up</h1>
            <p>PING offers delivery Covid-19 stats, giving you just what you need to know about the stats in locations that matter to you most.</p>
            <div className="formInput">
              Name: <input value={this.state.nameSignUp} onChange={(e) => this.setState({ nameSignUp: e.target.value })} />
              Phone Number: +1 <input value={this.state.phoneNumberSignUp} type="phone number" onChange={(e) => this.setState({ phoneNumberSignUp: e.target.value })} />
              Location: <Location handleSelect={this.handleSelect}/>
              <button>Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}