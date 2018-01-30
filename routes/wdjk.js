var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('wdjk', { title: '我的驾考'});
});

module.exports = router;