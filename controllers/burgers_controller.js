var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  cat.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
    // Send back the ID of the new quote
    res.json({
      id: result.insertId
    });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "devoured = " + req.params.id;

  console.log("devoured", condition);

  burger.update({
      devour: req.body.devoured
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

module.exports = router;