const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {type: String, required: true},
  cuisine: String,
  hot: Boolean,
  calories: Number
})

module.exports = mongoose.model('Food', foodSchema)
