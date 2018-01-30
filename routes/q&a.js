var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('q&a', { title: '问答详情'});
});

module.exports = router;