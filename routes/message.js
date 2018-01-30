var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('message', { title: '我的留言板'});
});

module.exports = router;