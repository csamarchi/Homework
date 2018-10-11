const express = require('express');
const app = express();
const Pokemon = require('./module/pokemon')
const methodOverride = require('method-override');

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));



app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {
    pokemon: Pokemon
  });
});

app.get('/pokemon/:index', (req, res) => {
  res.render('show.ejs', {
    pokemon: Pokemon[req.params.index]
  });
});












app.listen(3000, () => {
  console.log('server is listening');
})
