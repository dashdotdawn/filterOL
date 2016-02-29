var $img = $('#image');
$img.addClass('blur');

$(function() {

    //适应移动屏幕
    var width = window.innerWidth;
    var height = window.innerHeight;

    //若未设置img尺寸，则需要绑定load事件
    var posl = (width - $img.width()) / 2,
        post = (height - $img.height()) / 2;
    $('.adapt').width(width).height(height);
    $img.css({'left': posl + 'px', 'top': post + 'px'});

    //获取所有滑动条
    var $input = $('#menu input');
    for (var i = 0, len =  $input.length; i < len; i++ ) {
        $($input[i]).bind('change', function() {
            slide(this.id, $(this));
        });
    }
});

//根据滑动条的值设置图像的css
function slide(id, obj) {
    var value;
    var pattern;
    var str = $img.css("-webkit-filter");
    if (id === 'blur') {
        value = id + '(' + obj.val() + 'px)';
        pattern = new RegExp(id + "\\(\\d+px\\)");
    }
    else {
        value = id + '(' + obj.val() + ')';
        pattern = new RegExp(id + "\\(\\d+\\.\?\\d*\\)");
    }
    if (pattern.test(str)) {
        str = str.replace(pattern,value);
    }
    else {
        str += str.length > 0 ? ' ' + value : value;
    }
    $img.css("-webkit-filter", str);
}