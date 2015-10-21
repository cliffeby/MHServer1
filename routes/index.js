var express = require('express');
var router = express.Router();
var Category = require('../catModel');
var Item = require('../itemModel');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});
/* GET cats page. */
router.get('/categories', function (req, res, next) {
  Category.find({}, function (err, categories) {
    if (err) res.status(400).send(err);
    else {
      res.json(categories);
    }
  });

});
///* GET Items page. */
router.get('/items', function (req, res, next) {
  Item.find(function (err, allItems) {
    if (err) res.send(err);
    res.send(allItems);
console.log(allItems);
  });
});

module.exports = router;
