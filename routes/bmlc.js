var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('bmlc', { title: '报名流程'});
});

module.exports = router;