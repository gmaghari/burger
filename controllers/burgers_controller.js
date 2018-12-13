var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Retrieve all burgers
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
    //burger.selectAll(function)

// Add new burger to database
// router.post("/", function(req, res) {
//   burger.insertOne([
//     "burger_name", "devoured"
//   ], [
//     req.body.burger_name, req.body.devoured
//   ], function() {
//     res.redirect("/");
//   });
// });

router.post('/api/burgers', function(req, res) {
  burger.insertOne([
    'burger_name', 'devoured'
  ], [req.body.burger_name, req.body.devoured], function(data) {
    res.json({ id: data.insertId });
  });

//Mark burger as "devoured"
// router.put("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;
//   console.log("condition", condition);
//   burger.updateOne({
//     devoured: req.body.devoured
//   }, condition, function() {
//     res.redirect("/");
//   });
// });

router.put('/api/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
  console.log('condition:', condition);
  burger.updateOne({
      devoured: req.body.devoured
    },
    condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});
},
);

module.exports = router;