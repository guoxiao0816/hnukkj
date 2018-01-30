var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('find', { title: '发现'});
});

module.exports = router;