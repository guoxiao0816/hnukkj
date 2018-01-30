var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('sign', { title: '注册'});
});

module.exports = router;