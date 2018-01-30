var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('xclc', { title: '学车流程'});
});

module.exports = router;