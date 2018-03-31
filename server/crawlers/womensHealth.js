const request = require('request');
const axios = require('axios');
const cheerio = require('cheerio');
const URL = require('url-parse');
const fs = require('fs');

function crawlHalsoLiv(req, res) {
  //const pageToVisit = 'https://www.expressen.se/halsoliv/traning/naringsfysiologen-sa-viktig-ar-kosten-for-din-traning-/';
  const pageToVisit = 'http://localhost:7777'
  axios.request(
    {
      url: pageToVisit,
      method: 'get'
    })
    .then((res) => {
      const $ = cheerio.load(res);
      console.log(res);
      const content = $('.content').html();
      console.log('content: ', content);

    });

    res.sendStatus(200);
}

module.exports = {
  crawlHalsoLiv
}