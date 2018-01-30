var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('ycxq', { title: '约车详情'});
});

module.exports = router;