var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('htxq', { title: '话题详情'});
});

module.exports = router;