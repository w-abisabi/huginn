const { MongoClient } = require('mongodb');

const dbName = 'huginn';

function createImgClient() {
  const client = new MongoClient(process.env.ATLAS_URI,
    { useNewUrlParser: true, useUnifiedTopology: true });

  client.imagesCollection = function () {
    return this.db(dbName).collection('images');
  };

  return client;
}

exports.createImgClient = createImgClient;
