const express = require('express')
const router = express.Router()
const service = require('../controller/authController.js')

// router.get('/test', function (req, res) {
//     res.send('test route page - routes are configured in server.js correctly!')
//   })

// router.get('/api/test', function (req, res) {
//     service.test();
//     res.json("OK");
// })

router.put('/api/auth', function (req, res) {
    // console.log(req.body);
    service.auth(req)
    .then(function(result){
        // res.json(JSON.parse());
        res.send(result[0]);
        return(result);
    })
    .catch(function(error) {
        // console.log(error);
    });
})

// router.put('/api/void', function (req, res, next) {
//     service.void();
// })

// router.put('/api/refund', function (req, res, next) {
//     service.refund();
//     res.json('refund response')
// })

// router.put('/api/inquire/', function (req, res, next) {
//     // console.log(retref);
//     service.inquire();
// })

module.exports = router 