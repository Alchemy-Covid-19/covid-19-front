import React, { Component } from 'react'
import Location from './Location.js';
import { createUser } from './utils/api-services.js'
import './Home.css';

export default class Home extends Component {
  state = {
    nameSignUp: '',
    phoneNumberSignUp: '',
    locationSignUp:'',
  }

  handleSignUp = async (e) => {
    e.preventDefault();
    await createUser(this.state.nameSignUp, this.state.phoneNumberSignUp, this.state.locationSignUp);

    this.props.history.push('/confirmation');
  }
  
  handleSelect = (e) => {
		this.setState({ locationSignUp: e.target.value })
  }

  render() {
    return (
      <div id="login">
        <section>
          <p>
          Social Distance-Ping is here to help you stay up to date with the latest COVID-19 stats without getting overwhelmed. We collect the most up-to-date numbers from the same data source used by the <a href="https://coronavirus.1point3acres.com/en">CDC</a>, and text them to your phone as frequently - or infrequently - as you like.</p>
          <p>There are two main ways to use this app:</p>
          <ul>
            <li>For on-demand stats, text the name of any US state or territory to +1 309-408-0627. We will reply with the current information for your chosen location. We will not store your phone number, and you will never hear from us again--unless you send another request.</li>
            <li>Sign up using the form below, and we will send you a once-daily digest of the current numbers for the location you have chosen.</li>
          </ul>
        </section>
        <form onSubmit={ this.handleSignUp }>
          <div className="signup">
            <h1 className="signupText">Sign Up</h1>
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
