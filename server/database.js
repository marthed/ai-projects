var mongodb = require('mongodb').MongoClient;
var ObjectID = mongodb.ObjectID;
var mongodbURI = process.env.MONGODB_URI || "mongodb://heroku_72x5v2jk:u48gbqut77lcljdggv9eglvi01@ds149479.mlab.com:49479/heroku_72x5v2jk";

let mongodbConnection;

const connectionOptions = {
  promiseLibrary: Promise,
};

function getCollection(collectionName) {
  if (mongodbConnection) {
    return mongodbConnection.collection(collectionName);
  }
  return mongodb
    .connect(mongodbURI, connectionOptions)
    .then(db => {
      mongodbConnection = db;
      return mongodbConnection.collection(collectionName);
    });
}

module.exports = {
  getCollection
}