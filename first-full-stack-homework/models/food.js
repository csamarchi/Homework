const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {type: String, required: true},
  cuisine: String,
  calories: Number,
  hot: Boolean
})

module.exports = mongoose.model('Food', foodSchema)
