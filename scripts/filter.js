var $img = $('#image');
$img.addClass('blur');

//适应移动屏幕
var width = window.innerWidth;
var height = window.innerHeight;

var posl = (width - $img.width()) / 2,
    post = (height - $img.height()) / 2;
$('.adapt').width(width).height(height);
$img.css({'left': posl + 'px', 'top': post + 'px'});


var value;
var pattern;
$(function() {
    //获取所有滑动条
    var $input = $('.slide-wrap input');
    for (var i = 0, len =  $input.length; i < len; i++ ) {
        $($input[i]).bind('change', function() {
            slide(this.id, $(this));
        });
    }
});
//根据滑动条的值设置图像的css
function slide(id, obj) {
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