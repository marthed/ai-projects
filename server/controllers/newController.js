var { crawlSeasonStats } = require('../crawlers/xperteleven.js');
var getCollection = require('../database').getCollection;

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

function convertToSeasonStatPerTeam(seasonStats, teams) {
  console.log('teams: ', teams);
}

function populateDatabase(seasonStats) {
  seasonStats.forEach((season) => {
    const currentSeason = season.seasonNumber;
    season.currentSeasonStats.forEach((team) => {
      // Insert data in database.
    });
  });
}

async function getSeasonStats(req, res){
  try {
    const teamCollection = await getCollection('TEAMS_COLLECTION');
    const teams = await teamCollection.find().toArray();
    const statsLoaded = teams.find((team) => team.seasonStats);
    if (statsLoaded){
      return res.status(200).json(teams);
    }
    const crawledSeasonStats = await crawlSeasonStats();


    return res.status(200).json(crawledSeasonStats);

  } catch (e) {
    handleError(res, e, 'Failed to get season stats');
  }

};

module.exports = {
  getSeasonStats
}