var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('Leavingmessage', { title: '留言'});
});

module.exports = router;