var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('wybm', { title: '我要报名'});
});

module.exports = router;