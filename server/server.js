/**
 * @file Server that runs ACM url shortener
 */

'use strict';

// Dependencies
const cors = require('cors');
const express = require('express');
const http = require('http');

// Constants
const PORT = process.env.PORT || 3000;

// Express Setup
const app = express();
const server = http.createServer(app);

app.use(cors({
  credentials: true,
  origin: true,
}));

// TODO - Connect to database

// TODO - Setup Routes

// Error handling middleware
app.use(function(err, req, res, next) {
  console.error(err);
  res.status(422).send({error: err.message});
});

// Start up the server!
server.listen(PORT, () => {
  console.log(`Server started on port`, PORT);
});
