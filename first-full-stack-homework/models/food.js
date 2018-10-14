const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {type: String, required: true},
  cuisine: String,
  calories: Number,
  hot: Boolean
})

module.exports = mongoose.model('Food', foodSchema)

// const Food = [
//   {name: 'pizza',
//   cuisine: 'italian',
//   hot: true,
//   calories: 300
// },
// {
//   name: 'sushi',
//   cuisine: 'japanese',
//   hot: false,
//   calories: 160
// },
// {
//   name: 'chicken tikka masala',
//   cuisine: 'indian',
//   hot: true,
//   calories: 400
// }
// ]
//
// module.exports = Food;
