var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
    res.render('upLoader', {title: '上传'});
});

module.exports = router;