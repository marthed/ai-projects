import React from 'react';
import './table.css';

export default class Table extends React.Component {

    renderPoints = (teams) => {
      return Object.keys(teams).map((team, idx) => {
        console.log('HEj', team);
        console.log(teams[team].position);
        return (
          <tr key={idx}>
            <td>{teams[team].position}</td>
            <td>{teams[team].team}</td>
            <td>{teams[team].games}</td>
            <td>{teams[team].won}</td>
            <td>{teams[team].draw}</td>
            <td>{teams[team].lost}</td>
            <td>{teams[team].goals}</td>
            <td>{teams[team].goalDiff}</td>
            <td>{teams[team].points}</td>
          </tr>
        );
      });
    };
  
    render () {
      const { teams } = this.props;
      console.log('teams', teams);
      return (
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Plac.</th>
                <th>Lag</th>
                <th>M</th>
                <th>V</th>
                <th>O</th>
                <th>F</th>
                <th>MF - MB</th>
                <th>Diff</th>
                <th>P</th>
              </tr>
            </thead>
            <tbody>
              {teams && this.renderPoints(teams)}
            </tbody>
          </table>
        </div>
        )
    }
  }