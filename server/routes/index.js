const express = require('express');
const router = express.Router();
var Controller = require('../controllers/controllers.js');
var path = require('path');
var tinder = '/tinder';

router.get('/', Controller.homePage);
router.get('/crawler', Controller.crawler);
router.get('/crawler/seasonStats', Controller.getSeasonStats);

router.post(`${tinder}`, Controller.tinder);
router.post(`${tinder}/matches`, Controller.tinderMatches);
router.get(`${tinder}/updates`, Controller.tinderUpdates);


module.exports = router;
