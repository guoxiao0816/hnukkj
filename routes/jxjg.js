var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('jxjg', { title: '驾校机构'});
});

module.exports = router;