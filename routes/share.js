var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('share', { title: '邀请好友'});
});

module.exports = router;