var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('bxxq', { title: '班型详情'});
});

module.exports = router;