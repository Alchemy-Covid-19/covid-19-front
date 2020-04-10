import React, { Component } from 'react'
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';

// import Header from './Nav.js';
import Home from './Home.js';
import About from './About.js';
// import Confirmation from './Confirmation.js';
// import Unsubscribe from './Unsubscribe.js'

export default class App extends Component {
  
  state = { user: null };
    setUser = user => {
      this.setState({user: user.body});
    }

  render() {
    return (
      <div>
        <Router>
          {/* <Header /> */}
            <Switch>
              <Route exact path='/' render={(props) => <Home {...props} setUser={ this.setUser } user={ this.state.user }/>}/> 
              <Route exact path='/about' component={About} />
              {/* <Route exact path='/confirmation' component={Confirmation} /> */}
              {/* <Route exact path='/unsubscribe' component={Unsubscribe} /> */}
            </Switch>
        </Router>
      </div>
    )
  }
}