var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('canvas', { title: 'canvas'});
});

module.exports = router;