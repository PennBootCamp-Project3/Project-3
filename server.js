var express = require('express');
var app = express();
// var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 4200;
var cors = require('cors');

// mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://<uname>:<pwd>@ds139322.mlab.com:39322/aufinancex')
//     .then(() => { // if all is ok we will be here
//       console.log('Start');
//     })
//     .catch(err => { // if error we will be here
//         console.error('App starting error:', err.stack);
//         process.exit(1);
//     });

var authRouter = require('./routes/authRouter');

// Use middlewares to post json data to the server
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', function(req, res) {
    res.send('home');
});

app.use('/auth', authRouter)



app.listen(PORT, function(){
  console.log(`Server listening on port: ${PORT}.`);
})

module.exports = app;