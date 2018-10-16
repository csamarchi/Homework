const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const User = require('../models/user');

//index route
router.get('/', (req, res) => {
  User.find({}, (err, foundUser) => {
    res.render('./user/index.ejs', {
      user: foundUser
    });
  });
});

//new route
router.get('/new', (req, res) => {
  res.render('./user/new.ejs');
})

//post route
router.post('/', (req, res) => {
  User.create(req.body, (err, createdUser) => {
    if(err) {
      console.log(err);
    } else {
      res.redirect('/user')
    }
  });
})







module.exports = router;
