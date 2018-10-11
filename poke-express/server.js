const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser')
const Pokemon = require('./module/pokemon')

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));


//index route
app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {
    pokemon: Pokemon
  });
});

//new route
app.get('/new', (req, res) => {
  res.render('new.ejs');
});

//post route
app.post('/pokemon', (req, res) => {
  Pokemon.push(req.body);
  res.redirect('/pokemon')
})

//show route
app.get('/pokemon/:index', (req, res) => {
  res.render('show.ejs', {
    pokemon: Pokemon[req.params.index]
  });
});


//edit route
app.get('/pokemon/:index/edit', (req,res) => {
  res.render('edit.ejs', {
    pokemon: Pokemon[req.params.index],
    index: req.params.index
  })
})

app.put('/pokemon/:index', (req, res) => {
  Pokemon[req.params.index] = req.body;
  res.redirect('/pokemon');
});


// //delete route
// app.delete('/:index', (req, res) => {
//   Pokemon.splice(req.params.index, 1);
//   res.redirect('/pokemon')
// })














app.listen(3000, () => {
  console.log('server is listening');
})
