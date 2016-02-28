

var $img = $('#image');
$img.addClass('blur');
var value;
var $blur = $('#blur'),
    $brightness = $('#brightness'),
    $grayscale = $('#grayscale'),
    $opacity = $('#opacity'),
    $saturate = $('#saturate');

$(function() {
    $blur.bind('change', function() {
        // slide('blur',$(this));
        var str = $img.css("-webkit-filter");
        var value ='blur(' + $blur.val() + 'px)';
        if (str.match(/blur\(\d+px\)/)) {
            str = str.replace(/blur\(\d+px\)/,value);
        }
        else {
            str += str.length > 0 ? ' ' + value : value;
        }
        $img.css("-webkit-filter", str);
    })
    
    $brightness.bind('change', function() {
        slide('brightness',$(this));
    })
    $grayscale.bind('change', function() {
        slide('grayscale',$(this));
    })
    $opacity.bind('change', function() {
        slide('opacity',$(this));
    })
    $saturate.bind('change', function() {
        slide('saturate',$(this));
    })

});
function slide(id, obj) {
    var str = $img.css("-webkit-filter");
    var value = id + '(' + obj.val() + ')';
    console.log(str);
    var pattern = new RegExp(id + "\\(\\d+\\.\?\\d*\\)");
    if (pattern.test(str)) {
        str = str.replace(pattern,value);
    }
    else {
        str += str.length > 0 ? ' ' + value : value;
    }
    $img.css("-webkit-filter", str);
}