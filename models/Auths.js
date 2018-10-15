var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Auths
var authSchema = new Schema({
  retref: {
    type: String,
    required: true
  },
  amount: {
      type: String,
      required: true
  }
});

const Auth = mongoose.model('Auth', authSchema);

module.exports = Auth; 