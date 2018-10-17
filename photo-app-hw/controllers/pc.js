const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Photo = require('../models/photo');

//index route
router.get('/', (req, res) => {
  Photo.find({}, (err, foundPhoto) => {
    res.render('photo/index.ejs')
    photo: foundPhoto
  })
})

//new route
router.get('/new', (req, res) => {
  res.render('./photo/new.ejs')
})

//post route
router.post('/', (req, res) => {
  Photo.create(req.body, (err, createdPhoto) => {
      res.redirect('/photo')
  });
});

//show route
router.get('/:index', (req, res) => {
  Photo.findById(req.params.index, (err, foundPhoto) => {
    res.render('./photo/show.ejs');
    photo: foundPhoto
  });
});












module.exports = router;
