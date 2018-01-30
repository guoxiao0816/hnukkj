var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('rules', { title: '规则制定'});
});

module.exports = router;