/**
 * Created by jieke on 2017/10/28.
 */
var express= require('express');
var router = express.Router();

router.get('/',function (req,res) {
    res.render('photosview',{title:"图标分类名称"});

});

module.exports = router;

