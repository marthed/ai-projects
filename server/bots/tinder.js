var axios = require('axios');
var host = 'https://api.gotinder.com';

var userID = '712536446';
var accessToken = 'EAAGm0PX4ZCpsBAIAtJbvO1ZAyLDuEVIoF10ZAiwRNeplEV0WND6KBZBmChn2vrrgA9EKhLbgfGgyRsOh4DGnzBP1Ygz6RgcqcnXDZAEGbVkTyJffeEj0utQ0etGTbyxddwQ2nx583C5tK6exvMa6NawqLvKL34ALxDBEmQ09ZAZCZACNAZBgvzxUZAyQ8t3AcAPefjayDL0i7Xtx3ULwHQjm2SCJ334nCFipgPuWTyuz2AEs20KdhCKsmbcGzxR17NQjAZD';

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
    const data = Object.assign({}, { accessToken }, { data: res.data });
    console.log('RESPONSE', data);
    return Promise.resolve(data);
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
