var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('topic', { title: '发表话题'});
});

module.exports = router;