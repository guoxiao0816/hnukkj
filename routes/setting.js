var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('setting', { title: '设置'});
});

module.exports = router;