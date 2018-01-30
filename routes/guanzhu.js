var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('guanzhu', { title: 'ta的关注'});
});

module.exports = router;