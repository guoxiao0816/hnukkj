var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('comit', { title: '社区'});
});

module.exports = router;