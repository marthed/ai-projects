import React from 'react';
import './overview.css';
import Table from './table.jsx';
import HeaderBar from './headerBar.jsx';
import BodyContainer from './bodyContainer.jsx';

export default class Overview extends React.Component {

  render () {
    return (
      <div className="overview">
        <HeaderBar />
        <BodyContainer />
      </div>
      )
  }
}