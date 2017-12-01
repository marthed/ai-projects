import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table.jsx';
import './bodyContainer.css';

const teams = [
  {
    name: 'Team America',
    points: 16
  },
  {
    name: 'Midgårds Asar',
    points: 16
  },
  {
    name: 'Smultronen',
    points: 12
  }
]


export default class BodyContainer extends React.Component {
  render () {
    return (
      <div className="body-container">
        <Table teams={teams} />
      </div>
      )
  }
}