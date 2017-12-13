var axios = require('axios');
var host = 'https://api.gotinder.com';

var userID = '712536446';
var accessToken = 'EAAGm0PX4ZCpsBAIUkxfJGWcDdjEz85T9OyfbByGZBKGnVXdolIWvChnDLuMZCyJC2kNw2hDA5yp1eKfAd9mH8p0QODLckkJT1eW4Ch3669hEXj3OGfVak6lOHgBn77OZBRqmmPPzt1aCkxio2N7XvXt0ggxpdYf9ze8JZADaiHEmKZArGptfw4fCRg6ZBSrlupey3p0EiQn55Nvk5AzErRu56sjvPkZB9vGTZCA7G62IoV4YerRblUM15N3ZATTAov850ZD';

async function authorization (auth) {

  return axios.request({
    url: `${host}/auth`,
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'User-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
    },
    data: JSON.stringify({facebook_token: accessToken, facebook_id: userID})
  }).then((res) => {
    const data = Object.assign({}, { accessToken }, { data: res.data });
    console.log('RESPONSE', data);
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
    console.log('get matches!');
    const data = Object.assign({}, { data: res.data });
    console.log('RESPONSE', data);
    return Promise.resolve(data);
  })
  .catch((error) => {
    console.log('ERROR!!!!!!!!!!!');
    console.log(error);
    return Promise.reject(error);
  });

}

module.exports = {
  authorization,
  getMatches
}
