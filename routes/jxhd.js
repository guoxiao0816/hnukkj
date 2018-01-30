var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('jxhd', { title: '驾校活动专题'});
});

module.exports = router;