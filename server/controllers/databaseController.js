var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var mongodbURI = process.env.MONGODB_URI || "mongodb://heroku_72x5v2jk:u48gbqut77lcljdggv9eglvi01@ds149479.mlab.com:49479/heroku_72x5v2jk";

var db;

mongodb.MongoClient.connect(mongodbURI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  db = database;
  console.log("Database connection ready");
})


function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

async function getTeams(req, res) {
  db.collection('TEAMS_COLLECTION').find({}).toArray(function(err, docs) {
    if (err) handleError(res, err, "Failed to get teams");
    res.status(200).json(docs);
  });
};

async function getTeam(req, res) {
  return res.statusCode(200);
};

async function createTeam(req, res) {
  const newTeam = req.body;

  if (!req.body.id) {
    handleError(res, "Invalid user input", "Must provide an ID", 400);
  }
  db.collection('TEAMS_COLLECTION').insertOne(newTeam, function(err, doc){
    if(err) return handleError(res, err.message, "Failed to create team");
    res.status(201).json(doc.ops[0]);
  });

};

async function updateTeam(req, res) {
  return res.statusCode(200);
};

module.exports = {
  getTeams,
  getTeam,
  createTeam,
  updateTeam
}