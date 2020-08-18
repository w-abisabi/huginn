const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    hello: 'traveler!',
  });
});

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database succesfully connected, yay!')
})

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
