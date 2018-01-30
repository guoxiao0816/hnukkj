var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('jxpj', { title: '驾校评价'});
});

module.exports = router;