const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const cors = require('cors');
let Place = require('../models/place.model.js');

const app = express();
const router = express.Router();

app.use(cors());

router.get('/places', (req, res) => {
  Place.find()
    .then(places => res.json(places))
    .catch(err => res.status(400).json('DB error:', err));
});

// router.get('/user', (req, res) => {
//   User.find()
//     .then(places => res.json(places))
//     .catch(err => res.status(400).json('DB error:', err));
// });

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const db = mongoose.connection;
db.once('open', () => {
  console.log('MongoDB database succesfully connected, yay!');
});

db.on('error', err => {
  console.error('connection error, meh!', err)
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
