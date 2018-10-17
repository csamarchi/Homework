const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Photo = require('../models/photo');

//index route
router.get('/', (req, res) => {
  Photo.find({}, (err, photoFound) => {
    res.render('./photo/index.ejs', {
      photo: photoFound
    });
  });
});


//new route
router.get('/new', (req, res) => {
  res.render('./photo/new.ejs')
})

//post route
router.post('/', (req, res) => {
  console.log(req.body)
  Photo.create(req.body, (err, photoFound) => {
    res.redirect('/photo');
  });
});

//show route
router.get('/:index', (req, res) => {
  Photo.findById(req.params.index, (err, foundPhoto) => {
    res.render('./photo/show.ejs', {
      photo: foundPhoto
    });
  });
});












module.exports = router;
