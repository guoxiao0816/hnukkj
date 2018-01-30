var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('jsbc', { title: '计时包车'});
});

module.exports = router;