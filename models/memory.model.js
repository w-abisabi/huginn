const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const memorySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  date: { type: String, required: true },
  photos: { type: Array, required: true },
  username: { type: String, required: true }
}, {
  timestamps: true,
});

const Memory = mongoose.model('Memory', memorySchema);

module.exports = Memory;