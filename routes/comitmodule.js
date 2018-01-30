var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('comitmodule', { title: '模块详情'});
});

module.exports = router;