var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('bmxz', { title: '报名须知'});
});

module.exports = router;