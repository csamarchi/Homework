const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const Food = require('./models/food.js');

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// app.get('/food', (req, res) => {
//   res.send(Food);
// })

app.get('/food', (req, res) => {
  console.log(req.body, 'this is your body');
  res.render('index.ejs', {
    food: Food
  });
})




















app.listen(3000, () => {
  console.log('app is alive');
})
