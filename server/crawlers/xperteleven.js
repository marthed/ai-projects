var request = require('request');
var axios = require('axios');
var cheerio = require('cheerio');
var URL = require('url-parse');


async function getStandings() {
  var pageToVisit = "http://www.xperteleven.com/standings.aspx?Lid=333091&Sel=T&Lnr=1&dh=2";
  const standingProperties = [
    'position',
    'team',
    'games',
    'won',
    'draw',
    'lost',
    'goals',
    'goalDiff',
    'points'
  ];
  
  return axios.request(
    {
      url: pageToVisit,
      method: 'get'
    })
    .then((res) => {
      var $ = cheerio.load(res.data);
      var standings = [];
      var rows = [];
      $('tr', '#ctl00_cphMain_dgStandings').each(function(idx) {
        const rowList = $(this).text()
          .split('  ')
          .filter((string) => {
            const trimed = string.trim();
            return trimed !== '';
          });
        rows.push(rowList);
        // var text = $(this).text().replace(/\s/g,'');
      });

      var processedObject = rows.filter((row, idx) => {
        return idx % 2 !== 0;
      }).map((row) => {
        const rowObject = row.reduce((acc, item, idx) => {
          const property = standingProperties[idx];
          Object.assign(acc,{ [property]: item });
          return acc;
        }, {});
        return rowObject;
      });

      return Promise.resolve(processedObject);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
  }

module.exports = {
  getStandings
}