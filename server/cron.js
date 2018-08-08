const cron = require('node-cron');
const moment = require('moment');
const { crawlStandings } = require('./crawlers/xperteleven');
var { getCollection } = require('./database');

cron.schedule('1,30 * * * * * *', async function() {
  console.log('Hello every 30th second!');
  try {

    const seasonStats = await crawlStandings();
    //console.log('seasonStats: ', seasonStats);
    const date = Date.now();
    console.log('date: ', moment().format('YYYY-MM-DD HH:MM'));
    // const currentStandings = await getCollection('currentStandings')
    // currentStandings
    //   .insert({
    //     seasonNumber: 18,
    //     date: moment().format('YYYY-MM-DD HH:MM'),
    //     standings: seasonStats
    //   });
  } catch (error) {
    console.log('ERROR: ', error);
  }
});



