var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('jxtz', { title: '驾校通知'});
});

module.exports = router;