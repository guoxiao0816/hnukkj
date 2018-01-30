/**
 * Created by Administrator on 2017-06-19.
 */
//照片浏览器
function $Picture_browser(element) {
    $(element).click(function (e) {
        e.preventDefault();
        var imgs = [];
        var indexs = $(this).index();
        /* console.log(indexs);*/
        $(".lazy", $(this).parent('.gallery')).each(function () {
            imgs.push($(this).attr('src'));
        });
        pb1 = $.photoBrowser({
            items: imgs,
            initIndex:indexs
        });
        pb1.open();
    });
}
/*$(".gallery .aui-col-xs-4").click(function (e) {
 e.preventDefault()
 var imgs = [];
 var indexs = $(this).index();
 /!* console.log(indexs);*!/
 $("img", $(this).parent('.gallery')).each(function () {
 imgs.push($(this).attr('src'));
 });
 pb1 = $.photoBrowser({
 items: imgs,
 initIndex:indexs
 });
 pb1.open();
 });*/
//手势判断
function gesture() {
    //返回角度
    function GetSlideAngle(dx, dy) {
        return Math.atan2(dy, dx) * 180 / Math.PI;
    }
    //根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
    function GetSlideDirection(startX, startY, endX, endY,fn) {
        var dy = startY - endY;
        var dx = endX - startX;
        var result = 0;
        //如果滑动距离太短
        if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
            return result;
        }
        var angle = GetSlideAngle(dx, dy);
        if (angle >= -45 && angle < 45) {
            result = 4;
        } else if (angle >= 45 && angle < 135) {
            result = 1;
        } else if (angle >= -135 && angle < -45) {
            result = 2;
        }
        else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        }
        return result;
    }
    //滑动处理
    var startX, startY;
    document.addEventListener('touchstart', function (ev) {
        startX = ev.touches[0].pageX;
        startY = ev.touches[0].pageY;
    }, false);
    document.addEventListener('touchend', function (ev) {
        var endX, endY;
        endX = ev.changedTouches[0].pageX;
        endY = ev.changedTouches[0].pageY;
        var direction = GetSlideDirection(startX, startY, endX, endY);
        switch (direction) {
            case 0:   //····没有滑动
                break;
            case 1:   // ···向上滑动
                $('#fixed_app').fadeOut();
                break;
            case 2: //  ··· 向下滑动
                $('#fixed_app').fadeIn();
                break;
            case 3: // ···向左滑动
                break;
            case 4: //  ····向右滑动
                break;
            default:
        }
    }, false);
}


