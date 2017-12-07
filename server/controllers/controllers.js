var xpertelevenCrawler = require('../crawlers/xperteleven.js');

homePage = (req, res) => {
  res.render('index');
};

async function crawler(req, res) {
  const data = await xpertelevenCrawler.getStandings();
  res.send(data);
};

module.exports = {
  homePage,
  crawler
}