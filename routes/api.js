// Dependencies
const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const StoredUrl = require('../models/url');

// Post request to add a url to the database.
router.post('/add-url', function(req, res, next) {
  StoredUrl.create(req.body).then(function(url) {
    res.send(url);
    // eslint-disable-next-line no-undef
  }).catch(function(err) {
    console.log(err);
  });
});


