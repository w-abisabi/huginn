const { MongoClient } = require("mongodb");

const dbName = 'huginn';

function createClient() {
  const client = new MongoClient(process.env.ATLAS_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  
  client.usersCollection = function() {
    return this.db(dbName).collection('users');
  };

  return client;
}

exports.createClient = createClient;