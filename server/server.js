/**
 * @file Server that runs ACM url shortener
 * @author Antony Nguyen
 * @author Jaden Padua
 */

'use strict';

// Dependencies.
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

// Constants.
const PORT = process.env.PORT || 3000;

// Express Setup.
const app = express();
const server = http.createServer(app);

// Connect to mongodb.
const mongoUri = process.env.MONGO_URI ||'mongodb://localhost:27017/stored-urls-db';
mongoose.connect(mongoUri);


app.use(cors({
  credentials: true,
  origin: true,
}));

// For parsing json data.
app.use(bodyParser.json());

// Error handling middleware.
app.use(function(err, req, res, next) {
  console.error(err);
  res.status(422).send({error: err.message});
});

// Start up the server!
server.listen(PORT, () => {
  console.log(`Server started on port`, PORT);
});
