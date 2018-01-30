var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
    res.render('index', {title: '优快学车'});

});

/*var mysql_link=require('./mysql_link');
var createPool=mysql_link.pool;
var userSeachSql='SELECT * FROM userinfo';
var arr=[];
createPool.getConnection(function(err, connection) {
  connection.query(userSeachSql , function(err, result) {

    /!*for(var i=0;i<result.length;i++){
     arr=result;
     }*!/
    console.log(result);
    connection.release();       //调用connection.release()方法，会把连接放回连接池，等待其它使用者使用!
  });
});*/

module.exports = router;

/*var userSeachSql='SELECT * FROM userinfo';

var arr=[];
createPool.getConnection(function(err, connection) {
  connection.query(userSeachSql , function(err, result) {

    /!*for(var i=0;i<result.length;i++){
      arr=result;
    }*!/
    console.log(result);
    connection.release();       //调用connection.release()方法，会把连接放回连接池，等待其它使用者使用!
  });
});

/!* GET home page. *!/
router.get('/', function(req, res) {
  res.render('index', { title: '<h1>Express</h1>'
    ,users:arr
  });
});*/






