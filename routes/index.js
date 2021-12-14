var express = require('express');
var cybersource = require('../cybersource/key');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/get-key', function (req, res, next) {
  cybersource.generate_key((err, data, response) => {
    res.json(data);
  })
});

module.exports = router;
