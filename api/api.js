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

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
