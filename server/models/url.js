/**
 * @file Model schema for our stored url.
 */

// Dependencies
const mongoose = require('mongoose');

const { Schema } = mongoose;
// Connect to mongodb.
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/stored-urls-db';
mongoose.connect(mongoUri);
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

  internal: {
    type: Boolean,
  },
});

// Variable for export that extends to other parts of application.
const StoredUrl = mongoose.model('urls', UrlSchema);

module.exports = StoredUrl;
