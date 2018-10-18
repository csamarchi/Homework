const mongoose = require('mongoose');

const User = require('./user');

const photoSchema = new mongoose.Schema({
  username: String,
  img: String,
  info: String,
  user: [User.schema]

});

module.exports = mongoose.model('Photo', photoSchema);
