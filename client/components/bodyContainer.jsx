import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table.jsx';
import Button from './button.jsx';
import axios from 'axios';
import './bodyContainer.css';


export default class BodyContainer extends React.Component {

  state = {
    teams: null
  }

  getData = (options) => () => {
    console.log('get data!');
    return axios.request(options)
      .then((res) => {
        const result = {};
        res.data.forEach((team) => {
          const name = team.team;
          Object.assign(result, { [name]: team });
        });
        this.setState({ teams: result });
        return Promise.resolve(res.data);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  } 

  render () {

    const options = {
      method: 'GET',
      url: '/crawler',
    };

    console.log(this.state);

    const { teams } = this.state;
    console.log('teams', teams);
    
    return (
      <div className="body-container">
        <div className="body-container__buttons">
        <Button onChange={this.getData(options)} text="Tabell"/> 
        </div>
        <div className="body-container__inner">
          <Table teams={teams ? teams : null } />
        </div>
      </div>
      )
  }
}