var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('report', { title: '举报中心'});
});

module.exports = router;