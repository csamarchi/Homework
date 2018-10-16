const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  username: String,
  img: String,
  info: String
});

module.exports = mongoose.model('Photo', photoSchema);
