const express = require('express');
const app = express();
const pokemon = require('./pokemon')


app.get('/pokemon', (req, res) => {
  res.send(pokemon)
})






app.listen(3000, () => {
  console.log('server is listening');
})
