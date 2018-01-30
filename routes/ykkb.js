var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('ykkb', { title: '优快快报'});
});

module.exports = router;