import React from 'react';
import './overview.css';
import Table from './table.jsx';

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

export default class Overview extends React.Component {

  onClick = () => {
    console.log('clicked!');
  }

  render () {
    return (
      <div className="overview">
        <Table teams={teams} />
      </div>
      )
  }
}