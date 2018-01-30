var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('yhxq', { title: '活动详情'});
});

module.exports = router;