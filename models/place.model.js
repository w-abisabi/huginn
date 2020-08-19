const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placeSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  city: { type: String, required: true },
  title: { type: String, required: true },
});

// , {
//   // timestamps: true,
// }

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;