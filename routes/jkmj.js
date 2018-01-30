var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('jkmj', { title: '驾考秘籍'});
});

module.exports = router;