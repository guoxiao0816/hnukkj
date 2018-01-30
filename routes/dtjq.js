var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('dtjq', { title: '答题技巧'});
});

module.exports = router;