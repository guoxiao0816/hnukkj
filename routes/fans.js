var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('fans', { title: 'ta的粉丝'});
});

module.exports = router;