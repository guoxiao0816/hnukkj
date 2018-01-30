var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('jxxq', { title: '驾校详情'});
});

module.exports = router;