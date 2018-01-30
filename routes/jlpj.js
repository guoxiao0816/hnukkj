var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('jlpj', { title: '学员评价'});
});

module.exports = router;