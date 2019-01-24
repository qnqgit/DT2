// 分享图标部分
var dsq

function autoPlay() {
    dsq = setInterval(function() {
        $('.share a img').fadeOut(1);
        $('.share a img').fadeIn(1);
    }, 2000)
}
autoPlay();
$('.share').on('mouseenter', 'a', function() {
    clearInterval(dsq);
    $(this).css({
        width: 30,
        height: 30
    });
})
$('.share').on('mouseleave', 'a', function() {
    autoPlay();
    $(this).css({
        width: 24,
        height: 24
    });
})

// 上部下载链接
$('.http').mouseenter(function() {
    $(this).children('img').stop().animate({
        width: 280,
        height: 75,
        borderRadius: 20
    }, 200);
});
$('.http').mouseleave(function() {
    $(this).children('img').stop().animate({
        width: 266,
        height: 67,
        borderRadius: 0
    }, 200);
});

// 下面下载工具部分
var dsq2

function autoPlay2() {
    dsq2 = setInterval(function() {
        $('.tools a img').fadeOut(1);
        $('.tools a img').fadeIn(1);
    }, 2000)
}
autoPlay2();
$('.tools a').mouseenter(function() {
    clearInterval(dsq2);
    $(this).find('img').stop(false, true).hide(100).css('borderRadius', 20).stop(false, true).show(500);
});


$('.tools a').mouseleave(function() {
    autoPlay2();
    $(this).find('img').stop(false, true).animate({ borderRadius: 0 }, 300);

});

// 提问链接
$('.quiz').mouseenter(function() {
    $(this).find('img').stop().animate({
        width: 180,
        height: 60,
        borderRadius: 20
    }, 200);
});
$('.quiz').mouseleave(function() {
    $(this).find('img').stop().animate({
        width: 170,
        height: 51,
        borderRadius: 0
    }, 200);
});


// 开放式流程
$('.lc').find('a').mouseenter(function() {
    $(this).find('img').stop().slideDown(300);
})
$('.lc').find('a').mouseleave(function() {
    $(this).find('img').stop().slideUp(300);
})

// 微信扫描
$('.items .wx').click(function() {
    $('.weixin').fadeIn(500);
});
$('.items .wx').mouseleave(function() {
    $('.weixin').fadeOut();
});