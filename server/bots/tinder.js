var axios = require('axios');
var host = 'https://api.gotinder.com';

var userID = '712536446';
var accessToken = 'EAAGm0PX4ZCpsBAL9w7KkNZCLC0r1H2ne96ttTUrC8LCtPgFZAKjNvxNG0qoaClBYNDEC2HBdUENx24aGrZC675QOKHggMr2iVnLFpRl0HOFQWqNHLjzJFZBEXDHlTRnon8AMgnc1LwtuECdwcmNfgl6zny7yZBGsn2PvU30Q8ZAzuXBvzXIwz3U9hvfJsB59dZBMZCUeeEX5tZCFUKSifJw14ZBxXue42ZA7kBUgevwvlX4IlLKDKHA7oNtmvRvl5EtlEC0ZD';

async function authorization (auth) {
  //const accessToken = auth.accessToken;
  //const userID = auth.userID;
  console.log('accessToken', accessToken);
  console.log('userID', userID);
  return axios.request({
    url: `${host}/auth`,
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'User-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
    },
    data: JSON.stringify({facebook_token: accessToken, facebook_id: userID})
  }).then((res) => {
    console.log('RESPONSE', res);
    return Promise.resolve(res);
  })
  .catch((error) => {
    console.log(error);
    console.log('ERROR', error.message);
    return Promise.reject(error);
  });
}

module.exports = {
  authorization
}

"&expires_in=3941"