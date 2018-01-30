var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('hdbm', { title: '活动报名'});
});

module.exports = router;