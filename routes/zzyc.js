var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('zzyc', { title: '自主约车'});
});

module.exports = router;