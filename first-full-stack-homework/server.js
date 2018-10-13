const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const Food = require('./models/food');

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

app.post('/food', (req, res) => {
  console.log(req.body, 'this is where our info will live')
  res.send('we got food');
})








// create
// app.post('/', (req, res) => {
//   Food.create(req.body, (err, createdFood) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(createdFood);
//     }
//   })
// })



















app.listen(3000, () => {
  console.log('app is alive');
})
