var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('zzjz', { title: '郑州驾照'});
});

module.exports = router;