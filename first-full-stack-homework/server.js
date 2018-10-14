const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const Food = require('./models/food');

//require database
require('./db/db');

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

//index route
app.get('/food', (req, res) => {

  Food.find({}, (err, allFood) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index.ejs', {food: allFood});
    }
  })
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
  Food.create(req.body, (err, createdFood) => {
    if (err) {
      console.log(err);
    } else {
      console.log(createdFood);
      res.redirect('/food');
    }
  });
});


//show route
app.get('/food/:index', (req, res) => {
  Food.findById(req.params.index, (err, foundFood) => {
    res.render('show.ejs', {
    food: foundFood
    })
  })
});

//edit route
app.get('/food/:index/edit', (req, res) => {
  // res.render('edit.ejs', {
  //   food: Food[req.params.index],
  //   index: req.params.index

  Food.findById(req.params.index, (err, foundFood) => {
    res.render('edit.ejs', {
      food: Food[req.params.index],
      index: foundFood.index
    });
  // })
  });
});


//delete route
app.delete('/food/:index', (req, res) => {
  Food.findByIdAndRemove(req.params.index, (err, foundFood) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/food');
    }
  });
});


//update route
app.put('/food/:index', (req, res) => {
  if(req.body.hot === 'on') {
    req.body.hot = true;
  } else {
    req.body.hot = false;
  }
  Food.findByIdAndRemove(req.params.index, req.body, (err, updatedModel))
  res.redirect('/food');
})



app.listen(3000, () => {
  console.log('app is alive');
})
