const mongoose = require('mongoose');
let Place = require('../models/place.model.js');

exports.handler = async (event) => {
  const uri = process.env.ATLAS_URI;
  await mongoose.connect(uri, { useNewUrlParser: true });

  const db = mongoose.connection;

  const misteriousPlace = await Place.find();
  db.close();

  return {
    statusCode: 200,
    body: JSON.stringify(misteriousPlace),
  };
};
