var express = require("express");
var router = express.Router();
//var Movie = require("../models/_Movie.js");
var AllocineMovie = require("../models/AllocineMovie.js");
var request = require("request");

router.get("/:id", function(req, res) {
  console.log("showing movie with id", req.params.id);
  AllocineMovie.findOne({ id: req.params.id }).exec(function(err, movie) {
    if (err) {
      console.log("An error occurred" + err);
    } else {
      res.json({
        movie: movie
        //count: event.length
      });
    }
  });
});

module.exports = router;
