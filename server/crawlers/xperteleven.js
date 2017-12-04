var request = require('request');
var axios = require('axios');
var cheerio = require('cheerio');
var URL = require('url-parse');


async function getStandings() {
  var pageToVisit = "http://www.xperteleven.com/standings.aspx?Lid=333091&Sel=T&Lnr=1&dh=2";
  console.log('get standings');

  return Promise.apply(request(pageToVisit, function(error, response, body) {
    if(error) {
      console.log("xperteleven standings crawl error: " + error);
      return error;
    }

    console.log("xperteleven standings crawl statusCode: " + response.statusCode);
    if(response.statusCode === 200) {

      // Parse the document body
      var $ = cheerio.load(body);
      var dataList = [];
      //console.log("Page title:  " + $('title').text());
      $('tr.ItemStyleGrey').each(function( idx ) {
        var text = $(this).text().trim();
        if(text !== ''){
          dataList.push(text);
        }
      });
      console.log('dataList', dataList);
      return dataList;
    }
    return 'sdjfsdf'
 }));
}

module.exports = {
  getStandings
}