import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table.jsx';
import Button from './button.jsx';
import axios from 'axios';
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

  getData = (options) => () => {
    console.log('get data!');
    return axios.request(options)
      .then((res) => {
        console.log(res.data);
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
    
    return (
      <div className="body-container">
        <div className="body-container__inner">
          <Table teams={teams} />
          <Button onChange={this.getData(options)} text="Hämta data"/> 
        </div>
      </div>
      )
  }
}