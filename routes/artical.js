var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('artical', { title: '优快快报详情页'});
});

module.exports = router;