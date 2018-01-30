var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('jxjl', { title: '驾校教练'});
});

module.exports = router;