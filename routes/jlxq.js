var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('jlxq', { title: '教练详情'});
});

module.exports = router;