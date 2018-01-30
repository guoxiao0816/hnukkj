var express = require('express');
// var url=require('url');
// var queryString=require('querystring');
var bodyParse=require('body-parser');
var router = express.Router();

router.get('/', function(req, res) {
    var km=req.query.km;
    if(km==2){
        res.render('km2_zxzk', { title: '自学自考'});
    };
    if (km==3){
      res.render('km3_zxzk',{title:'自学自考'})
    };
});

module.exports = router;