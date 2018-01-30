var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('xcsp', { title: '学车视频'});
});

module.exports = router;