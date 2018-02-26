var getCollection = require('../database').getCollection;

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

async function getTeams(req, res) {
  try {
    const teamCollection = await getCollection('TEAMS_COLLECTION');
    teamCollection.find({}).toArray(function(err, docs) {
      if (err) handleError(res, err, "Couldn't find any teams");
      res.status(200).json(docs);
    });
  }
  catch (e) {
    return handleError(res, e, "Failed to get collection");
  }
};

async function getTeam(req, res) {
  try {
    const { name } = req.body;
    const teamCollection = await getCollection('TEAMS_COLLECTION');
    teamCollection.find({name}).toArray(function(err, docs) {
    if (err) handleError(res, err, "Couldn't find this team");
    res.status(200).json(docs);
    });
  }
  catch (e) {
    return handleError(res, e, "Failed to get collection");
  }
};

async function createTeam(req, res) {
  const newTeam = req.body;
  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide an ID", 400);
  }
  getCollection('TEAMS_COLLECTION').insertOne(newTeam, function(err, doc){
    if(err) return handleError(res, err.message, "Failed to create team");
    res.status(201).json(doc.ops[0]);
  });

};

function updateTeam(req, res) {
  return res.statusCode(200);
};

module.exports = {
  getTeams,
  getTeam,
  createTeam,
  updateTeam
}