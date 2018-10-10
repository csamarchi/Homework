const express = require('express');
const app = express();
const Pokemon = require('./module/pokemon')

const bodyParser = require('body-parser')

app.get('/pokemon', (req, res) => {
  res.send(pokemon)
})


app.get('/pokemon/:index', (req, res) => {
  res.render('show.ejs', {
    poke: Pokemon[req.params.index]
  });
});




app.listen(3000, () => {
  console.log('server is listening');
})
