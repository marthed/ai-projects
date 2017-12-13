var xpertelevenCrawler = require('../crawlers/xperteleven.js');
var tinderbot = require('../bots/tinder.js');

homePage = (req, res) => {
  res.render('index');
};

async function crawler(req, res) {
  const data = await xpertelevenCrawler.getStandings();
  res.send(data);
};

async function tinder(req, res) {
  const auth = await tinderbot.authorization(req.body);
  res.send(auth);
}

async function tinderMatches(req, res) {
  console.log('BLAAAA: ', req.body);
  const matches = await tinderbot.getMatches(req.body.token);
  res.send(matches);
}

module.exports = {
  homePage,
  crawler,
  tinder,
  tinderMatches
}