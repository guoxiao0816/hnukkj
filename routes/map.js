var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
    res.render('map', {title: '地图搜索'});
});

module.exports = router;