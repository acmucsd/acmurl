// Dependencies
const express = require('express');
const path = require('path');

// eslint-disable-next-line new-cap
const router = express.Router();
const StoredUrl = require('../models/url');



// app.use("/ui", express.static("../client-cra/build"))
// render react frontend
router.get('/', (req, res) => {
  // res.redirect('/ui/');
  res.sendFile(path.join(__dirname + '/../../client-cra/public', 'index.html'));
  // res.render()
})
router.get('/form', (req, res) => {
  res.redirect('/');
})


// Post request to add a url to the database.
router.post('/add-url', (req, res) => {
  console.log(req.body)
  StoredUrl.create(req.body).then((url) => {
    res.send(url);
  }).catch(() => {
    res.status(500).send('Error: short url required for storing');
  });
});

// Get a list of stored urls from db without internal tag.
router.get('/get-all-urls', (req, res) => {
  StoredUrl.find({ internal: { $exists: false } }).then((url) => {
    res.send(url);
  });
});

// Redirect user to a long url given a short url from the database.
router.get('/:shorturl', (req, res) => {
  StoredUrl.findOne({ shorturl: req.params.shorturl }, { _id: 0, longurl: 1 })
    .then((url) => {
      res.redirect(url.longurl);
    }).catch(() => {
      res.status(500).send('Error: short url does not exist in the database');
    });
});

// Delete an existing url object from the database given a short url.
router.delete('/:shorturl', (req, res) => {
  StoredUrl.deleteOne({ shorturl: req.params.shorturl })
    .then((url) => {
      res.send(url);
    }).catch(() => {
      res.status(500).send('Error: short url does not exist in the database');
    });
});

// Update an existing short url from the database given a new short url.
router.put('/:shorturl', (req, res) => {
  StoredUrl.findOneAndUpdate(req.params, {
    $set: {
      shorturl: req.body.shorturl,
    },
  }, { new: true })
    .then((url) => {
      res.send(url.shorturl);
    }).catch(() => {
      res.status(500).send('Error: short url does not exist in the database');
    });
});

module.exports = router;
