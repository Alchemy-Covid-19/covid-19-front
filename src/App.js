import React, { Component } from 'react'
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import Footer from './Footer.js';
import Confirmation from './Confirmation.js';
import Unsubscribe from './Unsubscribe.js'
import UnsubscribeConfirmation from './UnsubscribeConfirmation.js'

export default class App extends Component {
  state = { user: null };
    setUser = user => {
      this.setState({user: user.body});
    }

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' render={(props) => <Home {...props} setUser={ this.setUser } user={ this.state.user }/>}/> 
            <Route exact path='/about' component={About} />
            <Route exact path='/confirmation' component={ Confirmation } />
            <Route exact path='/unsubscribe' component={ Unsubscribe } />
            <Route exact path='/confirm-unsubscribe' component={ UnsubscribeConfirmation } />
          </Switch>
          <Footer />
        </Router>
      </div>
    )
  }
}