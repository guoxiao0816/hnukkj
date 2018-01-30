var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('appdownload', { title: '优快学车App下载'});
});

module.exports = router;