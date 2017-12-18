var axios = require('axios');
var host = 'https://api.gotinder.com';

var userID = '712536446';
var facebookAccessToken = 'EAAGm0PX4ZCpsBAEoB9yYVWGx6Yw28xEHEmGK3avaZALTTz3xvOsr9VhzB2ky0os2ZC5ZCAVC34DwIEn3y3aIAeNVBWfyKTRkLERkMZCliRr7tTZAhEubkZCHEEw7sMKMlEc6MOEE5oBoIJunJ3Vij9rzQiEF2hDrp0FX7mZBtPaHcUJSvPuZBYzGAxcbqV6yoZCTUqOhifJ1eoijsZC1RMcdVxBc3y7a6dZC6Qw5rnF77iU8i0oAHfvsfFRpOAMRI2pTnNoZD';
let tinderAccessToken;

async function authorization (auth) {
  return axios.request({
    url: `${host}/auth`,
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'User-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
    },
    data: JSON.stringify({facebook_token: facebookAccessToken, facebook_id: userID})
  }).then((res) => {
    const data = Object.assign({}, { facebookAccessToken }, { data: res.data });
    tinderAccessToken = res.data.token;
    return Promise.resolve(data);
  })
  .catch((error) => {
    console.log('ERROR', error.message);
    return Promise.reject(error);
  });
}

async function getMatches (token) {
  return axios.request({
    url: `${host}/user/recs`,
    method: 'GET',
    headers: {
      'X-Auth-Token': token,
      'Content-type': 'application/json',
      'User-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
    }
  }).then((res) => {
    const data = Object.assign({}, { data: res.data });
    return Promise.resolve(data);
  })
  .catch((error) => {
    console.log(error);
    return Promise.reject(error);
  });
}

async function getUpdates () {
  return axios.request({
    url: `${host}/updates`,
    method: 'POST',
    headers: {
      'X-Auth-Token': tinderAccessToken,
      'Content-type': 'application/json',
      'User-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
    },
    data: JSON.stringify({"last_activity_date": ""})
  }).then((res) => {
    const updates = Object.assign({}, ...res.data );
    return Promise.resolve(updates);
  })
  .catch((error) => {
    console.log('\n');
    console.log('Heej: ', tinderAccessToken);
    console.log('AN ERROR: ', error);
    return Promise.reject(error);
  });
}

module.exports = {
  authorization,
  getMatches,
  getUpdates
}
