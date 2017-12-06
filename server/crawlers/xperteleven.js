var request = require('request');
var axios = require('axios');
var cheerio = require('cheerio');
var URL = require('url-parse');


async function getStandings() {
  var pageToVisit = "http://www.xperteleven.com/standings.aspx?Lid=333091&Sel=T&Lnr=1&dh=2";
  console.log('get standings');

  return axios.request(
    {
      url: pageToVisit,
      method: 'get'
    })
    .then((res) => {
      var $ = cheerio.load(res.data);
      var dataList = [];
      console.log($('tr', '#ctl00_cphMain_dgStandings'));
      $('tr', '#ctl00_cphMain_dgStandings').each(function( idx ) {

        console.log('text', $(this).text());
        var rawList = $(this).text().split(' ').filter((string) => {
          const trimed = string.trim();
          return trimed !== '';
        });

        const newObject = Object.assign({}, rawList);
        dataList.push(newObject);

        // var text = $(this).text().replace(/\s/g,'');
        // if(text !== ''){
        //   dataList.push(text);
        // }
      });
      console.log('dataList', dataList);
      return Promise.resolve(dataList);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
  }

module.exports = {
  getStandings
}