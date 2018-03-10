var request = require('request');
var axios = require('axios');
var cheerio = require('cheerio');
var URL = require('url-parse');
var fs = require('fs');

var { seasonStatsPages } = require('./xpertelevenPages/seasonStatsPages.js');

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

async function getSeasonStats() {

  return Promise.all(seasonStatsPages.map((page, idx) => {
    return axios.request({ url: page })
    .then((res) => {
      var $ = cheerio.load(res.data);
      var currentSeasonStats = {};

      $('div', '#ctl00_cphMain_SeasonStats1_contentBox_pFinalStandings')
      .each(function(idx, element) {
        const divList = $(this).text()
        .split('  ')
        .filter((string) => {
          const trimed = string.trim();
          return trimed !== '' && trimed !== null;
        });

        if (divList.length > 1 && !divList[0].includes('Plac')) {
          const rowObject = divList.reduce((acc, item, idx) => {
            const property = standingProperties[idx];
            Object.assign(acc,{ [property]: item });
            return acc;
          }, {});
          Object.assign(currentSeasonStats,  {[rowObject.team]: rowObject});
        }
      });

      const seasonNumber = 
        $('#ctl00_cphMain_SeasonStats1_DynamicBox1_ddlSeason')
        .children()
        .filter(function(idx, element) {
          return element.attribs.selected;
        })
        .map(function(idx, element) {
          return $(this).attr('value');
        })[0];

      const currentSeasonStatsWrapper =  {[seasonNumber]: currentSeasonStats};
      return Promise.resolve(currentSeasonStatsWrapper);
    }).catch((err) => Promise.reject(err));
  }));
}

async function crawlStandings() {
  var pageToVisit = "http://www.xperteleven.com/standings.aspx?Lid=333091&Sel=T&Lnr=1&dh=2";
  try {
    const { data } = await axios.request({ url: pageToVisit, method: 'get'});
    const $ = cheerio.load(data);
    const rows = [];
    $('tr', '#ctl00_cphMain_dgStandings')
    .each(function(idx) {
      const rowList = $(this).text().split('  ').filter((string) => {
          const trimed = string.trim();
          return trimed !== '';
        });
      rows.push(rowList);
    });

    const standingsArray = rows
      .filter((row, idx) => idx % 2 !== 0)
      .map((row) => {
      const rowObject = row.reduce((acc, item, idx) => {
        const property = standingProperties[idx];
        Object.assign(acc,{ [property]: item });
        return acc;
      }, {});
      return rowObject;
    });
    return standingsArray;
  } catch (error) {
    return error;
  }
}


async function getStandings() {
  var pageToVisit = "http://www.xperteleven.com/standings.aspx?Lid=333091&Sel=T&Lnr=1&dh=2";
  
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
      
      console.log('processedObject: ', processedObject);
      

      return Promise.resolve(processedObject);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
  }

module.exports = {
  getStandings,
  getSeasonStats,
  crawlStandings
}