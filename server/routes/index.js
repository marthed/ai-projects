const express = require('express');
const router = express.Router();
var Controller = require('../controllers/controllers.js');
var path = require('path');

router.get('/', Controller.homePage);
router.get('/crawler', Controller.crawler);

module.exports = router;
