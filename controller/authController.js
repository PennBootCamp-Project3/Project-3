// const axios = require('axios');
const API = require('../config/api-config');
const config = require('../config/mid-config');
const db = require('../models');

//test connect function
function testConnect() {
    API.get(
        ""
    )
    .then(function(response) {
        console.log(`Response Body:  + ${response.data}`);
    })
    .catch(function(error){
        console.log(error);
    });  
}

function callAuth (req) {
    console.log(req.body);
     return API.put('/auth', req.body)
    // this.state.formData) 
    // {
    //     //replace below with the state object that comes from the client
    //     account: config.account,
    //     expiry: config.expiry,
    //     amount: config.amount, 
    //     merchid: config.merchid,
    //     capture: config.capture
    // .then(result => {
    //     return db.Auth.collection.insertOne(result.data);
    //     //write auth record to database 
    // })
    // .then(data => {
    //     // console.log(data.ops);
    //     return(data.ops);
    // })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        // console.log(error);
        throw error;
    })
}

function callVoid () {
    console.log("calling Void");
    return API.put('/void', {
        merchid: config.merchid,
        retref: config.retref
    })
    .then(result => {
        console.log(result.data);
        return result;
    })
    .catch(error => {
        console.log(error);
        throw error;
    })
}

function callRefund () {
    console.log("calling Refund");
    return API.put('/refund', {
        merchid: config.merchid,
        retref: config.retref
    })
    .then(result => {
        console.log(result.data);
        return result;
    })
    .catch(error => {
        console.log(error);
        throw error;
    })
}

function callInquire () {
    console.log("calling Inquire");
    return API.get('/inquire/290362274439') //parameterize
    .then(result => {
        console.log(result.data);
        return result;
    })
    .catch(error => {
        console.log(error);
        throw error;
    })
}

const service = {
    test: testConnect,
    auth: callAuth,
    void: callVoid,
    refund: callRefund,
    inquire: callInquire
}

module.exports = service;