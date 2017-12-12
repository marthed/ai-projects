import React from 'react';
import './tinderContainer.css';
import Button from '../button.jsx';
import axios from 'axios';


export default class TinderContainer extends React.Component {

  state = {
    auth: null,
    data: null
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
        data: res.data.data
      });
      return Promise.resolve(res)
    })
    .catch((error) => {
      console.log(error);
      return Promise.resolve(error)
    });
  };
 
  render () {
    return (
      <div className="tinder-container">
        <div className="tinder-container__inner">
          <div className="tinder-container__headline">
            <h1>Hello and Welcome.</h1>
          </div>
          <Button text='Login to Tinder' onChange={this.tinderLogin} />
          <div
            className="fb-login-button"
            data-max-rows="1"
            data-size="large"
            data-button-type="continue_with"
            data-show-faces="false"
            data-auto-logout-link="false"
            data-use-continue-as="false">
          </div>
        </div>
      </div>
      )
  }
}