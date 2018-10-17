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
      console.log(createdUser);
      res.redirect('/user')
    }
  });
})

//show route
router.get('/:index', (req, res) => {
  User.findById(req.params.index, (err, foundUser) => [
    res.render('user/show.ejs', {
      user: foundUser
    })
  ]);
});

//edit route
router.get('/:index/edit', (req, res) => {
  User.findById(req.params.index, (err, foundUser) => {
    res.render('user/edit.ejs', {
      user: foundUser
    })
  });
});

//update route
router.put('/:index', (req, res) => {
  User.findByIdAndUpdate(req.params.index, req.body, (err, updateUser) => {
    res.redirect('/user')
  });
});

//delete route
router.delete('/:index', (req, res) => {
  User.findByIdAndRemove(req.params.index, (err, userFound) => {
    res.redirect('/user')
  })
})






module.exports = router;
