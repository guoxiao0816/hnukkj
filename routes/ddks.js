var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('ddks', { title: '代考试'});
});

module.exports = router;