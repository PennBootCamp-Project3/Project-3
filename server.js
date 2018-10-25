const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

const API = require("./routes/authRouter");
const MONGODB_URI =
  "mongodb://knathan:database1@ds237713.mlab.com:37713/heroku_95h5dfww" ||
  "mongodb://localhost/payments";

// const db = require('/.models');
// mongoose.Promise = Promise;
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log(`connected to database + ${MONGODB_URI}`);
  })
  .catch(err => {
    console.log("connection error", err.stack);
  });

// Use middlewares to post json data to the server
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(API);

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.get("/", function(req, res) {
  res.send("home");
});

app.use("/api", API);

app.listen(PORT, function() {
  console.log(`Server listening on port: ${PORT}.`);
});

module.exports = app;
