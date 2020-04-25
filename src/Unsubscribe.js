import React, { Component } from 'react'
import { removeUser } from './utils/api-services.js'

export default class Unsubscribe extends Component {
  state = {
    phoneNumber: ''
  }

  handleUnsubscribe = async(e) => {
    e.preventDefault();
    console.log(this.state.phoneNumber)
    await removeUser(this.state.phoneNumber);
    this.props.history.push('/confirm-unsubscribe');
  }

  render() {
    return (
      <div>
        <h1>Unsubscribe</h1>
        <form onSubmit={ this.handleUnsubscribe }>
            <div>
              Phone Number: +1 
              <input 
                value ={this.state.phoneNumber}
                type="text"
                onChange={(e) => this.setState({ phoneNumber: e.target.value })}/>
              <button>Unsubscribe</button>
            </div>
        </form>
      </div>
    )
  }
}
