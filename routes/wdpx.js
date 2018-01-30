var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('wdpx', { title: '我的培训'});
});

module.exports = router;