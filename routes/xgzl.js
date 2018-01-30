var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('xgzl', { title: '修改资料'});
});

module.exports = router;