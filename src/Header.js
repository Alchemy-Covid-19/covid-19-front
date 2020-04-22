import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="logo" src="Ping-Icon.png" alt="Ping logo" />
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/about">About</Link>
        </div>
      </div>
    )
  }
}
