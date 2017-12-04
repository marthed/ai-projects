var xpertelevenCrawler = require('../crawlers/xperteleven.js');

homePage = (req, res) => {
  res.render('index');
};

async function crawler(req, res) {
  const data = await xpertelevenCrawler.getStandings();
  console.log('data', data);

  res.send(data);
};

module.exports = {
  homePage,
  crawler
}