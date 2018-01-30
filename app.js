var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session=require('express-session');
// 首页
var routes = require('./routes/index');
// 驾校机构
var jxjg = require('./routes/jxjg');
// 驾校详情
var jxxq = require('./routes/jxxq');
// 班型详情
var bxxq = require('./routes/bxxq');
// 优快快报
var ykkb = require('./routes/ykkb');
// 报名流程
var bmlc = require('./routes/bmlc');
// 学车流程
var xclc = require('./routes/xclc');
// 优快快报详情页
var artical = require('./routes/artical');
// 驾考秘籍
var jkmj = require('./routes/jkmj');
// 视频播放
var video = require('./routes/video');
// 学车视频列表
var xcspList = require('./routes/xcspList');
// 模拟考试
var mnks = require('./routes/mnks');
// 我要报名
var wybm = require('./routes/wybm');
// 计时包车订单页面
var jsdd = require('./routes/jsdd');
// 代金券详情页面
var djq = require('./routes/djq');
// 代金券立即抢购页面
var ljqg = require('./routes/ljqg');
// 个人中心
var my = require('./routes/my');
// 个人中心
var question = require('./routes/question');
// 优快保障
var ykbz = require('./routes/ykbz');
// 自主约车
var zzyc = require('./routes/zzyc');
// 最新活动
var zxhd = require('./routes/zxhd');
//驾校活动
var jxhd = require('./routes/jxhd');
//大车专题手机版
var dachemobile = require('./routes/dachemobile');
// 活动详情
var yhxq = require('./routes/yhxq');
// 我的驾考
var wdjk = require('./routes/wdjk');
// 我的培训
var wdpx = require('./routes/wdpx');
// 我的订单
var wddd = require('./routes/wddd');
// 我的订单详情
var wdddxq = require('./routes/wdddxq');
// 我的消息
var wdxx = require('./routes/wdxx');
// 计时包车
var jsbc = require('./routes/jsbc');
// 考试安排
var ksap = require('./routes/ksap');
// 待考试
var ddks = require('./routes/ddks');
// 成绩查询
var cjcx = require('./routes/cjcx');
// 约车详情
var ycxq = require('./routes/ycxq');
// 评价教练
var pjjl = require('./routes/pjjl');
// 我的优快
var wdyk = require('./routes/wdyk');
// 我的业绩
var wdyj = require('./routes/wdyj');
// 二级代理
var ejdl = require('./routes/ejdl');
// 登录
var login = require('./routes/login');
// 注册
var sign = require('./routes/sign');
// 教练详情
var jlxq = require('./routes/jlxq');
// 教练详情
var jlxq2 = require('./routes/jlxq2');
// 驾校评价
var jxpj = require('./routes/jxpj');
// 教练评价
var jlpj = require('./routes/jlpj');
// 教练约车
var yysj = require('./routes/yysj');
// 一键报名
var yjbm = require('./routes/yjbm');
// 活动报名
var hdbm = require('./routes/hdbm');
// 驾校教练
var jxjl = require('./routes/jxjl');
// 驾校通知
var jxtz = require('./routes/jxtz');
// 通知详情
var tzxq = require('./routes/tzxq');
// 地图搜索
var map = require('./routes/map');
// 报名须知
var bmxz = require('./routes/bmxz');
// 邀请好友
var share = require('./routes/share');
// 邀请好友
var share1 = require('./routes/share1');
// 我的邀请码
var mynumber = require('./routes/mynumber');
// 我的邀请码
var mynumber1 = require('./routes/mynumber1');
// 修改密码
var xgmm = require('./routes/xgmm');
// 修改资料
var xgzl = require('./routes/xgzl');
// 修改昵称
var niceName = require('./routes/niceName');
// 修改昵称
var qianming = require('./routes/qianming');
// 首页iframe
var jxList = require('./routes/jxList');
// 搜索
var search = require('./routes/search');
//搜索标签
var searchTag = require('./routes/searchTag');
// 取消订单
var qxdd = require('./routes/qxdd');
// 设置
var setting = require('./routes/setting');
// 答题页面
var exercise = require('./routes/exercise');
// 章节练习
var zjlx = require('./routes/zjlx');
// 专项练习
var zxlx = require('./routes/zxlx');
// 全真模拟
var qzmn = require('./routes/qzmn');
// 成绩页面
var chengji = require('./routes/chengji');
// 发现页面
var find = require('./routes/find');
// 学车视频
var xcsp = require('./routes/xcsp');
// 社区
var comit = require('./routes/comit');
//社区栏目
var comitmodule = require('./routes/comitmodule');
//用户社区
var usercomit = require('./routes/usercomit');
// 图片上传
var upLoader = require('./routes/upLoader');
// 答题技巧
var dtjq = require('./routes/dtjq');
// 自学自考
var zxzk = require('./routes/zxzk');
// 科三灯光操作和语音模拟
var k3cz = require('./routes/k3cz');
//话题详情
var htxq=require('./routes/htxq');
//郑州驾照
var zzjz=require('./routes/zzjz');
//用户列表
var yhlb=require('./routes/yhlb');
//粉丝列表
var fans = require('./routes/fans');
//关注列表
var guanzhu =require('./routes/guanzhu');
//发表话题
var topic =require('./routes/topic');
//收藏列表
var shoucang =require('./routes/shoucang');
//留言板
var message = require('./routes/message');
//留言
var Leavingmessage = require('./routes/Leavingmessage');
//举报中心
var report = require('./routes/report');
//百度推广
var bdtg = require('./routes/bdtg');
//表情测试
var face=require('./routes/face');
//App下载页
var appdownload = require('./routes/appdownload');
//问答详情
var qa = require('./routes/q&a');
//经验规则
var rules = require('./routes/rules');
//图标速记
var iconshorthand = require('./routes/iconshorthand');
//图标速记二级分类
var iconshorthand2 = require('./routes/iconshorthand2');
//图标速记分类
var photosview = require('./routes/photosview');
//具体图标
var photosbrowser = require('./routes/photosbrowser');

var error = require('./routes/error');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public/images/Class.jpg')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', zzjz);
app.use('/jxjg', jxjg);
app.use('/jxxq', jxxq);
app.use('/bxxq', bxxq);
app.use('/bmlc', bmlc);
app.use('/xclc', xclc);
app.use('/ykkb', ykkb);
app.use('/artical', artical);
app.use('/jkmj', jkmj);
app.use('/video', video);
app.use('/xcspList', xcspList);
app.use('/mnks', mnks);
app.use('/wybm', wybm);
app.use('/jsdd', jsdd);
app.use('/djq', djq);
app.use('/ljqg', ljqg);
app.use('/my', my);
app.use('/question', question);
app.use('/ykbz', ykbz);
app.use('/zzyc', zzyc);
app.use('/zxhd', zxhd);
app.use('/jxhd', jxhd);
app.use('/dachemobile',dachemobile);
app.use('/yhxq', yhxq);
app.use('/wdjk', wdjk);
app.use('/wdpx', wdpx);
app.use('/wddd', wddd);
app.use('/wdddxq', wdddxq);
app.use('/wdxx', wdxx);
app.use('/jsbc', jsbc);
app.use('/ksap', ksap);
app.use('/ddks', ddks);
app.use('/cjcx', cjcx);
app.use('/ycxq', ycxq);
app.use('/pjjl', pjjl);
app.use('/wdyk', wdyk);
app.use('/wdyj', wdyj);
app.use('/ejdl', ejdl);
app.use('/login', login);
app.use('/sign', sign);
app.use('/jlxq', jlxq);
app.use('/jlxq2', jlxq2);
app.use('/jxpj', jxpj);
app.use('/jlpj', jlpj);
app.use('/yysj', yysj);
app.use('/yjbm', yjbm);
app.use('/hdbm', hdbm);
app.use('/jxjl', jxjl);
app.use('/jxtz', jxtz);
app.use('/tzxq', tzxq);
app.use('/map', map);
app.use('/bmxz', bmxz);
app.use('/error', error);
app.use('/share', share);
app.use('/share1', share1);
app.use('/mynumber', mynumber);
app.use('/mynumber1', mynumber1);
app.use('/xgmm', xgmm);
app.use('/xgzl', xgzl);
app.use('/niceName', niceName);
app.use('/qianming', qianming);
app.use('/jxList', jxList);
app.use('/search', search);
app.use('/searchTag',searchTag);
app.use('/qxdd', qxdd);
app.use('/set', setting);
app.use('/exercise', exercise);
app.use('/zjlx', zjlx);
app.use('/zxlx', zxlx);
app.use('/qzmn', qzmn);
app.use('/chengji', chengji);
app.use('/find', find);
app.use('/xcsp', xcsp);
app.use('/comit', comit);
app.use('/comitmodule',comitmodule);
app.use('/usercomit',usercomit);
app.use('/upLoader', upLoader);
app.use('/dtjq', dtjq);
app.use('/zxzk', zxzk);
app.use('/k3cz', k3cz);
app.use('/htxq', htxq);
app.use('/zzjz', zzjz);
app.use('/yhlb', yhlb);
app.use('/fans', fans);
app.use('/guanzhu',guanzhu);
app.use('/topic',topic);
app.use('/shoucang',shoucang);
app.use('/message',message);
app.use('/Leavingmessage',Leavingmessage);
app.use('/report',report);
app.use('/bdtg',bdtg);
app.use('/face', face);
app.use('/appdownload',appdownload);
app.use('/q&a',qa);
app.use('/rules',rules);
app.use('/iconshorthand',iconshorthand);
app.use('/iconshorthand2',iconshorthand2);
app.use('/photosview',photosview);
app.use('/photosbrowser',photosbrowser);


//这里传入了一个密钥加session id
app.use(cookieParser('Wilson'));
//使用靠就这个中间件
app.use(session({ secret: 'wilson'}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {message: err.message, error: err,title:'出错了'});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
app.listen(8400,function(){
  console.log("Server is Start! localhost:8400");
});

module.exports = app;
