import React from 'react';
import './tinderContainer.css';
import Button from '../button.jsx';
import MatchThumbnail from './matchThumbnail.jsx';
import axios from 'axios';


export default class TinderContainer extends React.Component {

  state = {
    auth: null,
    data: null,
    matches: [],
    token: ''
  }

  componentWillMount = () => {
    console.log('TinderContainer will mount');
    window.fbAsyncInit = function() {
      console.log('FB init');
      FB.init({
        appId            : '317256535440951',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.11'
      });
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  tinderLogin = () => {
    return axios.post('/tinder', {
    }).then((res) => {
      console.log('Response', res);
      this.setState({
        auth: res.data.accessToken,
        data: res.data.data,
        token: res.data.data.token
      });
      return Promise.resolve(res)
    })
    .catch((error) => {
      console.log(error);
      return Promise.resolve(error)
    });
  };

  getMatches = () => {
    const { token } = this.state;
    if (token !== '') {
      return axios.post('/tinder/matches', {
        token
      })
      .then((res) => {
        console.log('Response', res.data.data.results);
        this.setState({
          matches: res.data.data.results
        });
        return Promise.resolve(res)
      })
      .catch((error) => {
        console.log(error);
        return Promise.resolve(error)
      });
    }
  };

  renderMatches = (matches) => {
    console.log('Render matches!');
    return matches.map((match, idx) => {
      return <MatchThumbnail match={match} key={idx} />
    });
  };
 
  render () {
    console.log('Token is: ', this.state.token);
    const { matches } = this.state;
    console.log('Rendering', matches);
    return (
      <div className="tinder-container">
        <div className="tinder-container__inner">
          <div className="tinder-container__headline">
            <h1>Hello and Welcome.</h1>
          </div>
          <div className="tinder-container__button">
            <Button text='Login to Tinder' onChange={this.tinderLogin} />
          </div>
          <div className="tinder-container__button">
            <Button text='Get Matches' onChange={this.getMatches} />
          </div>
          <div
            className="fb-login-button"
            data-max-rows="1"
            data-size="large"
            data-button-type="continue_with"
            data-show-faces="false"
            data-auto-logout-link="false"
            data-use-continue-as="false">
          </div>
          {matches &&
          <div className='tinder-container__matches'>
           {this.renderMatches(matches)}
          </div>
         }
        </div>
      </div>
      )
  }
}