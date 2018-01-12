import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table.jsx';
import Button from './button.jsx';
import axios from 'axios';
import './bodyContainer.css';


export default class BodyContainer extends React.Component {

  state = {
    display: 'currentSeason',
    currentSeason: null,
    seasonStats: null
  }

  getCurrentSeason = () => {
    const { currentSeason, display } = this.state;

    if (!currentSeason) {
      const options = {
        method: 'GET',
        url: '/crawler',
      };
      return axios.request(options)
        .then((res) => {
          const result = {};
          res.data.forEach((team) => {
            const name = team.team;
            Object.assign(result, { [name]: team });
          });
          this.setState({ display: 'currentSeason', currentSeason: result });
          return Promise.resolve(res.data);
        })
        .catch((error) => {
          return Promise.reject(error);
        });
    }
    else {
      this.setState({display: 'currentSeason' });
    }
  }

  getSeasonStats = () => {
    const { seasonStats, display } = this.state;

    if (!seasonStats) {
      console.log('Get season stats!');
      const options = {
        method: 'GET',
        url: '/crawler/seasonStats',
      };
      return axios.request(options)
        .then((res) => {
          console.log(res.data);
          this.setState({display: 'seasonStats', seasonStats: res.data.seasonStats});
          return Promise.resolve(res.data);
        })
        .catch((err) => Promise.reject(err));
    }
    else {
      this.setState({display: 'seasonStats'});
    }
  }

  renderSeasonStats = (ss) => {
    return ss.map((season, idx) => {
      const seasonNumber = Object.keys(season).toString();
      return (<div className="seasonStats" key={idx}>
        Säsong {seasonNumber}
        <Table teams={season[seasonNumber]} />
      </div>)
    })
  }

  render () {
    const { currentSeason, seasonStats, display } = this.state;

    console.log('display: ', display);
    return (
      <div className="body-container">
        <div className="body-container__buttons">
        <Button onChange={this.getCurrentSeason} text="Tabell"/> 
        <Button onChange={this.getSeasonStats} text="Säsongshistorik"/> 
        </div>
        <div className="body-container__inner">
          {(display === 'currentSeason') && <Table teams={currentSeason ? currentSeason : null } />}
          {(display === 'seasonStats') && this.renderSeasonStats(seasonStats)}
        </div>
      </div>
      )
  }
}