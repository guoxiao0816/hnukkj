var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('ykbz', { title: '优快保障'});
});

module.exports = router;