var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('ejdl', { title: '二级代理'});
});

module.exports = router;