import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Footer.css';

export default class Footer extends Component {
  render() {
      return (
        <div className="footer">
          <div className="footerNav">
            <Link to="/resources">Resources</Link>
              <Link to="/about">About</Link>
              <Link exact to="/unsubscribe">Unsubscribe</Link>
              <a href="https://coronavirus.1point3acres.com/en">Source</a>
          </div>
        </div>
      )
  }
}