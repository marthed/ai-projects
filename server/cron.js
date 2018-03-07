var cron = require('node-cron');
var { crawlSeasonStats } = require('./crawlers/xperteleven');
var { getCollection } = require('./database');

cron.schedule('3 * * * * * *', async function() {
  console.log('Hello 3rd second per minute!');
  // try {
  //   const seasonStats = await crawlSeasonStats();

  // } catch (error) {
  //   console.log('ERROR: ', error);
  // }

});