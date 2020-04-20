import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
    
          <div className="footer">
            <img className="logo" src="PingLogo.png" alt="Ping logo" />
            <div className="footerNav">
              <ul className="footer__links" >
                <li><Link exact to="/unsubscribe">unsubscribe</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
          </div>
        )
      }
}