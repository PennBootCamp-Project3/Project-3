const express = require("express");
const router = express.Router();
const service = require("../controller/authController.js");

router.put("/api/auth", function(req, res) {
  //logging incoming request
  console.log("_______________________Request_______________________");
  console.log(req.body);
  return service
    .auth(req)
    .then(result => {
      //logging response returned from mongoose insert
      console.log("_______________________Response_______________________");
      console.log(result.data);
      res.json(result.data);
      // return result.data;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
});

router.get("/api/report", function(req, res) {
  console.log("in /api/report route");
  return service
    .report(req)
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
});

module.exports = router;
