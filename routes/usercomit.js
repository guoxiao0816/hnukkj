var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('usercomit', { title: '个人社区'});
});

module.exports = router;