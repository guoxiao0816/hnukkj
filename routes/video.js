var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('video', { title: '视频播放'});
});

module.exports = router;