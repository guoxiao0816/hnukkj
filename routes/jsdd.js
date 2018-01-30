var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('jsdd', { title: '计时包车订单'});
});

module.exports = router;