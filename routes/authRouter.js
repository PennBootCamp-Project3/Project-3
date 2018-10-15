var express = require('express');
var app = express();
var authRouter = express.Router();

var Auth = require('../models/auth');

authRouter.route('/').get(function (req,res) {
    console.log("in home route");
});

authRouter.route('/auth/new').post(function (req, res) {
    var myAuth = new Auth(req.body);
    res.json("echo");
    // item.save()
    // .then(item => {
    //     res.status(200).json({Item: 'Item added successfully'});
    //     })
    //     .catch(err => {
    //     res.status(400).send("unable to save to database");
    //     });
    });


module.exports = authRouter;