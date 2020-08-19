const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const router = express.Router();

app.use(cors());

router.get('/', (req, res) => {
  res.json({
    hello: 'traveler!',
  });
});

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const db = mongoose.connection;
db.once('open', () => {
  console.log('MongoDB database succesfully connected, yay!');
});

db.on('error', err => {
  console.error('connection error, meh!', err)
})

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
