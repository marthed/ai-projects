import React from 'react';
import ReactDOM from 'react-dom';
import './headerBar.css';

export default class HeaderBar extends React.Component {
  render () {
    return (
      <div className="header-bar">
        <span><h1>Former Yugos League</h1></span>
        <span><h3>- Since 2014 -</h3></span>
      </div>
      )
  }
}