import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Footer.css';

export default class Footer extends Component {
  render() {
      return (
        <div className="footer">
          <div className="footerNav">
            <ul className="footer__links" >
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link exact to="/unsubscribe">Unsubscribe</Link></li>
            </ul>
          </div>
        </div>
      )
  }
}