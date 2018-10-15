var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Auths
var Auth = new Schema({
  auth: {
    type: String
  },

},{
    collection: 'auth'
});

module.exports = mongoose.model('Auth', Auth);