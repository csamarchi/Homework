const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const Food = require('./models/food');

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

//index route
app.get('/food', (req, res) => {
  console.log(req.body, 'this is your body');
  res.render('index.ejs', {
    food: Food
  });
});

//new route
app.get('/food/new', (req, res) => {
  res.render('new.ejs')
});

//post route
app.post('/food', (req, res) => {
  console.log(req.body, 'this is where our info will live')
  if(req.body.hot === 'on') {
    req.body.hot = true;
  } else {
    req.body.hot = false;
  }
  Food.push(req.body);
  res.redirect('/food');
});


//show route
app.get('/food/:index', (req, res) => {
  res.render('show.ejs', {
    food: Food[req.params.index],
    index: req.params.index
  })
  res.redirect('/food')
});


//delete route
app.delete('/food/:index', (req, res) => {
  Food.splice(req.params.index, 1);
  res.redirect('/food');
});

//edit route
app.get('/food/:index/edit', (req, res) => {
  res.render('edit.ejs', {
    food: Food[req.params.index],
    index: req.params.index
  });
});

//update route
app.put('/food/:index', (req, res) => {
  if(req.body.hot === 'on') {
    req.body.hot = true;
  } else {
    req.body.hot = false;
  }
  Food[req.params.index] = req.body;
  res.redirect('/food');
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