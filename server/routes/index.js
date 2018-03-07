const express = require('express');
const router = express.Router();
var Controller = require('../controllers/controllers.js');
var databaseController = require('../controllers/databaseController');
var newController = require('../controllers/newController');
const { crawlSeasonStats } = require('../crawlers/xperteleven');

var path = require('path');
var tinder = '/tinder';

router.get('/', Controller.homePage);
router.get('/crawler', Controller.crawler);
router.get('/crawler/seasonStats', Controller.getSeasonStats);

router.get('/seasonStats', newController.getSeasonStats);

router.get('/teams', databaseController.getTeams);
router.get('/teams:name', databaseController.getTeam);
router.put('/teams:id', databaseController.updateTeam);
router.post('/teams', databaseController.createTeam);

router.get('/fastCrawl', crawlSeasonStats);

router.post(`${tinder}`, Controller.tinder);
router.post(`${tinder}/matches`, Controller.tinderMatches);
router.get(`${tinder}/updates`, Controller.tinderUpdates);

module.exports = router;
