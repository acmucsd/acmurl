/**
 * @file Model schema for our stored url.
 */

// requiring mongoose and creating first schema.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Url Schema that has attributes for our url object.
const UrlSchema = new Schema({
  longurl: {
    type: String,
    required: [true, 'long url required for storing'],
  },

  shorturl: {
    type: String,
    required: [true, 'short url required for storing'],
  },

  description: {
    type: String,
  },
});

// Variable for export that extends to other parts of application.
const StoredUrl = mongoose.model('urls', UrlSchema);

module.exports = StoredUrl;
