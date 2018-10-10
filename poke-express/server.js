const express = require('express');
const app = express();


app.get('/poke', (req, res) => {
  res.send('this is the server responding')
})






app.listen(3000, () => {
  console.log('server is listening');
})
