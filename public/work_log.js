/*
*
*控制台输出样式文字
*if (window.console) {
 var cons = console;
 if (cons) {
 cons.log("%c\n\t   ", "font-size:41px;background:url('http://cdn.iknow.bdimg.com/static/common/pkg/module_zed9cd9fd.png') no-repeat -135px -1px");
 cons.log('想和我们共同打造世界最大中文互动问答平台吗？\n想让自己的成就在亿万用户面前展现吗？想让世界看得你的光芒吗？\n加入我们，%c在这里不仅是工作，投入你的时间和热情，滴滴汗水终会汇聚成不平凡的成果。\n期待你的加盟。www.baidu.com', "color:#1dacf9;text-shadow:0 0 1px rgba(29,172,249,.5);");
 cons.log("请在邮件中注明 %c 来自:console", "color:red;font-weight:bold;");
 console.log("一张网页，要经历怎样的过程，才能抵达用户面前？\n一位新人，要经历怎样的成长，才能站在技术之巅？\n探寻这里的秘密；\n体验这里的挑战；\n成为这里的主人；\n加入百度，加入网页搜索，你，可以影响世界。\n"),
 console.log("请将简历发送至 %c ps_recruiter@baidu.com（ 邮件标题请以“姓名-应聘XX职位-来自console”命名）","color:red"),
 console.log("职位介绍：http://dwz.cn/hr2013");
 }
 }
* */



/*
*8-7
*我的驾考
* style 样式表改动
*我的培训-驾考详情
* 样式改动
*
* */

/*
* 建议改动（移动站）
* 个人中心入口：
*   我的培训：aui-label-danger => aui-label-info || aui-text-danger => aui-text-info
*   培训教练（约车详情）aui-label-danger => aui-label-info || aui-text-danger => aui-text-info
*   我的订单：.aui-content { padding-top: 5rem;}  aui-list-item-title font{ color:#03a9f4 }
*   计时包车： aui-label-danger => aui-label-info  ||  aui-label { line-height: 1.2; vertical-align: baseline;padding-bottom: 0.25em;}
*   教练详情：待更新
*   communityModule 页面style 加入{ font-size: 14px;}
*   我的钱包：让用户进入，提示他功能未开放<div class="weui-loadmore weui-loadmore_line"><span class="weui-loadmore__tips">功能暂未开发敬请期待</span></div>
*   考试安排：没有数据公共样式<div class="weui-loadmore weui-loadmore_line"><span class="weui-loadmore__tips">暂无数据</span></div>
*
*首页入口：
*   免费模拟真题，100%必中，给img 一个链接入口，跳转模拟考试界面
*   最新活动：.aui-content-padded{padding-bottom: 3.7rem;} （已改）
*   一键报名：.aui-content 去掉！！ { padding-top: 0!important }
*   优快快报：所有子页面下方的二维码 img 不限制高度 或者 img style="width:150px;height:150px;"
*   驾考秘籍：所有子页面下方的二维码 img 不限制高度 或者 img style="width:150px;height:150px;"
*
*   关于优快：企业简介，每块区域字数控制在一定范围 style样式表 .fwzz .aui-border{ min-height: 220px;}
*   模拟考试：1.技巧，法规，考规 页面显示不全。在iPhone 端
*            2.答题，模拟考试 WebP 格式图片 IPhone不支持
*            3.全真模拟交卷错误，iPhone微信端
*
* */

/*
* 8-8 （PC站）  （已改）
* 驾校活动 jxhd ： 活动时间更新下，时间已过。
* 主页 ：优快速递 不显示阅读数量了
*       最新活动  .zxhd .zxhd-smalla { font-size: 12px;}
*       他们有话说， 李磊 刘慧美 王小寒 静静
* .hot-title a { max-width: 380px;
                 display: inline-block;
                 height: 49px;
                 overflow: hidden;
                 text-overflow: ellipsis;
                 white-space: nowrap;
               }
*地图找驾校：IE兼容 #map-result{width: 320px\9;}
*
* 8-9
*修复后台管理系统界面
*
*8-10
*   评价驾校：http://192.168.1.100:8400/jxpj
*   评价教练：http://192.168.1.100:8400/pjjl
*   教练评价列表：http://192.168.1.100:8400/jlpj
*   教练详情：http://192.168.1.100:8400/jlxq2
*
*8-11
*   教练详情：http://192.168.1.100:8400/jlxq2
*
*接口：http://61.136.101.137:9080/api.ukxueche/模块标识/接口标识
*       学员端 ：http://61.136.101.137:9080/api.ukxueche/driver/接口标识
*      http://61.136.101.137:9080/api.ukxueche/driver/uk_12006
*               教练详情：http://61.136.101.137:9080/api.ukxueche/driver/uk_10014
*       社区接口：http://61.136.101.137:9080/api.ukxueche/community
*
*8-12 （已改）
*网站监测备注：
*    获取咨询：弹框关不了，已修改
*    班型信息模块：整体英文对不住，
*
*    修改:        顶部网站地图去掉，导航最新活动，改成驾校团购，
*    免费报名咨询：获取免费咨询下面的文字改为 ：郑州驾校哪个好？优快学车提供最新的郑州驾校排名，郑州驾校团购价格、口碑和郑州学车优惠信息，郑州驾校报名选择优快学车，45天拿证。
*    文章底部：文字中间空格去掉。
*    班型：标题 颜色 #aeaeae 改为 #5a5a5a
*
*
*
* 8-14(周一)
*     网站弹窗bug ， area: '80%' 去掉，给lqyh 加上 style="width: 15rem"
*     更新APP下载界面一套，
*     移动站郑州驾校界面，进入获取不了位置，
*
* 8-15(周二)
*   APP下载界面：
*       修改 iconfont.css
*           UKstyle.css   优快APP下载主界面   整块
*           app.ejs
*           public images include img
*
*
* 8-16(周三)
*      移动端下载界面：
*           headPublic 增加浏览器图标
*           style里面修改 #appDownload 整块 appdownload下载页面
*           appdownload.ejs 界面
*
*8-18(周五)
*
*
*8-19（周六） （已更）
*       驾考秘籍：
*           .aui-list .aui-list-item-media{width:33%;}
*           .aui-list .aui-list-item-media img{height:100%;}
*           .aui-list .aui-list-item-inner{width:67%;}
*
*          aui-list-item-inner
*          aui-list-item-text下面的类名改为 =>  aui-list-item-title aui-ellipsis-1
*       下面的弹出框：


 (已改*-*) =>标注说明已改
*8-21（周一）
*   手机站班型详情：js部分
*       $("#Gallery .swiper-slide").click(function (e) {
             e.preventDefault()
             var imgs = [];
             var indexs = $(this).index();
             console.log(this);
             $("img", $(this).parent()).each(function () {
                 imgs.push($(this).attr('src'));
             });
                 pb1 = $.photoBrowser({
                 items: imgs,
                 initIndex: indexs
                 });
                 pb1.open();
             });

         id = "Gallery"部分把onclick=photo();全部去掉，
    我要报名界面：优惠券已隐藏， (已改)
    手机站领取优惠界面问题：已解决 (已改)
    最新活动界面：总局样式 .zxyh li .hdstate{position: absolute;top: 0;left: 0;width: 3rem;height: 3rem;}
    最新活动：活动日期过了的显示活动结束。切图

    后台管理系统：
        姓名输入框：80px  日期两个：80px  班型：80px
                     letter-spacing: 2px;
                     line-height: 30px;
                     color: red;
        html,body{overflow:auto;} (已改)


 */

/*
8-22（周二）
*
*   后台管理系统：
    *   查询进入的页面, #jbxx 下面iframe scrolling="no" 全部去掉 (已改)
    短信模板界面：class="col-sm-12 col-md-12" 加style {padding-bottom: 150px;} (已改)

    首页以及APP下载页，两张图换掉(8-22 imgs) (已改)

*   我的驾考(页面重做) http://192.168.1.121:8400/wdjk
*
*8-23(周三)
*
*   模拟考试入口：
*   *   专家课程：zjkc (已改)
*       iframe 页面载入过慢问题 有待解决
    *       科一科四新增车型选块：修改了style样式表 font-face
    *                           mnks_sel.png一张
    *                           <style>
                                     .chexing .aui-col-xs-3{ border-right: 1px solid #eeeeee;padding:0;margin: 1rem 0;}
                                     .chexing .aui-col-xs-3:last-child{ border-right: none;}
                                     .weui-toast_content{color: #FFFfff;}
                                     .chexing_bj:before{content:url("/images/include/mnks_sel.png");position: absolute;top: -10px;right: 10px;height: 1rem; width: 1rem;}
                                </style>
                         <section class="chexing aui-grid aui-margin-t-10">
                         <div class="aui-row">
                         <a href="javascript:void(0)" class="aui-col-xs-3 chexing_bj">
                         <font color="#fe7ec0" class="aui-iconfont iconfont">&#xe6b3;</font>
                         <div class="aui-grid-label">小车</div>
                         </a>
                         <a href="javascript:void(0)" class="aui-col-xs-3">
                         <font color="#3ddaf2" class="aui-iconfont iconfont">&#xe6b7;</font>
                         <div class="aui-grid-label">货车</div>
                         </a>
                         <a href="javascript:void(0)" class="aui-col-xs-3">
                         <font color="#70bc46" class="aui-iconfont iconfont">&#xe60d;</font>
                         <div class="aui-grid-label">客车</div>
                         </a>
                         <a href="javascript:void(0)" class="aui-col-xs-3">
                         <font color="#fead5e" class="aui-iconfont iconfont">&#xe6b6;</font>
                         <div class="aui-grid-label">摩托车</div>
                         </a>
                         </div>
                         </section>
             $('.chexing .aui-col-xs-3').click(function () {
             $('.chexing .aui-col-xs-3').removeClass('chexing_bj');
             var msg= $(this).addClass('chexing_bj').children("div:last").text();
             $.toast( "已切换至" + msg);
             })

*       <div class="aui-content" style="padding-top: 4.9rem;">
*       class="aui-list aui-media-list aui-row aui-text-center aui-margin-t-10"下面的 iconfont font-size:x-large;
*
*8-24(周四)
*   作为通用样式调用
*       没有开发的功能：让用户进入，提示他功能未开放<div class="weui-loadmore weui-loadmore_line"><span class="weui-loadmore__tips">功能暂未开发敬请期待</span></div>
*       暂无数据功能：没有数据公共样式<div class="weui-loadmore weui-loadmore_line"><span class="weui-loadmore__tips">暂无数据</span></div>
*       详细请见：ksap (考试安排，改编而成·)
*
*       移动站我的钱包，无法进入，没有给链接。
*       备注输入框：客户管理=>客户基本信息 高度增加到 100px
*       drv.ukxueche.com
*
*    网站PC建议：明显标识可以点击的地方
*
*
* 8-26(周六)
*
* 8-28(周一)
*   我的驾考（页面更新） 模拟考试选择车型（科一科四）  邀请好友界面头部（已改）
*   驾校界面（驾校简介挪出来）
*
*
* 8-29(周二)
*
* */