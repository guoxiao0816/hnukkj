var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('niceName', { title: '修改昵称'});
});

module.exports = router;