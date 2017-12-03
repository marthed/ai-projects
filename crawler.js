var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');


var pageToVisit = "http://www.xperteleven.com/standings.aspx?Lid=333091&Sel=T&Lnr=1&dh=2";
console.log("Visiting page " + pageToVisit);
request(pageToVisit, function(error, response, body) {
   if(error) {
     console.log("Error: " + error);
   }
   // Check status code (200 is HTTP OK)
   console.log("Status code: " + response.statusCode);
   if(response.statusCode === 200) {
     // Parse the document body
     var $ = cheerio.load(body);
     //console.log("Page title:  " + $('title').text());
     $('tr.ItemStyleGrey').each(function( idx ) {
       var text = $(this).text().trim();
       console.log('text', text);
     })
   }
});


function searchForWord($, word) {
  var bodyText = $('html > body').text().toLowerCase();
  return(bodyText.indexOf(word.toLowerCase()) !== -1);
}