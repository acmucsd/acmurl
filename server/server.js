/**
 * @file Server that runs ACM url shortener
 * @author Antony Nguyen
 * @author Jaden Padua
 */

'use strict';

// Dependencies
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const http = require('http');
const path = require('path');
const api = require('./routes/api');

// Constants
const PORT = process.env.PORT || 3000;

// Express Setup.
const app = express();
const server = http.createServer(app);

// Configure API security.
app.use(cors({
  credentials: true,
  origin: true,
}));

// For parsing json data.
app.use(bodyParser.json());

// Render React Static App for Root
app.use(express.static("../client/public"));
// Now uses route specified in api.js.
app.use('/', api);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + "../client/public", "index.html"));
})

// Error handling middleware.
app.use(function(err, req, res, next) {
  console.error(err);
  res.status(422).send({error: err.message});
});

// Start up the server!
server.listen(PORT, () => {
  console.log(`Server started on port`, PORT);
});
