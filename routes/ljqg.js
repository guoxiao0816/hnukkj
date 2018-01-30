var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('ljqg', { title: '立即抢购'});
});

module.exports = router;