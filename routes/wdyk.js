var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('wdyk', { title: '我的优快'});
});

module.exports = router;