import React from 'react';
import './table.css';

export default class Table extends React.Component {

    renderPoints = (teams) => {
      return teams.map((team, idx) => {
        return (
          <tr key={idx}>
            <td>{idx+1}</td>
            <td>{team.name}</td>
            <td>{team.points}</td>
          </tr>
        );
      });
    };
  
    render () {
      const { teams } = this.props;
      return (
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Plac.</th>
                <th>Lag</th>
                <th>P</th>
              </tr>
            </thead>
            <tbody>
              {this.renderPoints(teams)}
            </tbody>
          </table>
        </div>
        )
    }
  }