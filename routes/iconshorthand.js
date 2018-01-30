    /**
 * Created by jieke on 2017/10/27.
 */
var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    res.render('iconshorthand',{ title : "图标速记"});

});

module.exports = router;