var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('tzxq', { title: '通知详情'});
});

module.exports = router;