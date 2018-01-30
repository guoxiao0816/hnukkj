var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('question', { title: '学车问答'});
});

module.exports = router;