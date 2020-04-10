import React, { Component } from 'react'
import { Link } from "react-router-dom";
import request from 'superagent';

export default class Header extends Component {
    render() {
        return (
    
          <div className="header">
            <img className="logo" src="PingLogo.png" alt="Ping logo" />
            <div className="nav">
              <ul className="nav__links" >
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
          </div>
        )
      }
}
