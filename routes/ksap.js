var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('ksap', { title: '考试安排'});
});

module.exports = router;