const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authSchema = new Schema({
  merchid: { type: String, required: true },
  respproc: { type: String, required: true },
  retref: { type: String, required: true },
  authcode: { type: String, required: true },
  batchid: { type: String, required: false },
  authcode: { type: String, required: true },
  token: { type: String, required: true },
  account: { type: String, required: true },
  amount: { type: String, required: true },
  respcode: { type: String, required: true },
  resptext: { type: String, required: true },
  respstat: { type: String, required: true },
  cvvresp: { type: String, required: true },
  avsresp: { type: String, required: true },
  entrymode: { type: String, required: true },
  commcard: { type: String, required: true },
  bintype: { type: String, required: true }
});

const Auth = mongoose.model("Auth", authSchema);

module.exports = Auth;
