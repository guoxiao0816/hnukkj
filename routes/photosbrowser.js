/**
 * Created by jieke on 2017/10/28.
 */
var express= require('express');
var router = express.Router();

router.get('/',function (req,res) {
    res.render('photosbrowser',{ title : "ABS指示灯"})
});

module.exports = router;