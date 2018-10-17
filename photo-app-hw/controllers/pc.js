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

//delete route
router.delete('/:index', (req, res) => {
  Photo.findByIdAndRemove(req.params.index, (err, photoFound) => {
    res.redirect('/photo')
  })
})

//edit route
router.get('/:index/edit', (req, res) => {
  console.log(req.params.index);
  Photo.findById(req.params.index, (err, foundPhoto) => {
    res.render('photo/edit.ejs', {
      photo: foundPhoto
    });
  });
});

//update route
router.put('/:index', (req, res) => {
  Photo.findByIdAndUpdate(req.params.index, req.body, (err, updatePhoto) => {
    res.redirect('/photo')
  });
});










module.exports = router;
