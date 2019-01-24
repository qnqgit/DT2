var $labike = $('.labike img')
    //潮汐动画
var $cx = $('.chaoxi1')
$cx.mouseenter(function() {
    $cx.css({
            animationPlayState: 'paused',
            background: 'url(images/bannerimg-guanggao/bg-chaoxi.png) -5px -175px no-repeat'
        })
        //鼠标进入时更换拉比克图片
    window.setTimeout(function() {
        $labike.attr('src', 'images/bannerimg-guanggao/lcx.png')
    }, 500)



})
$cx.mouseleave(function() {
    $cx.css({
        animationPlayState: 'running',
        background: 'url(images/bannerimg-guanggao/bg-chaoxi.png) -5px -5px no-repeat'
    })
})


//虚空动画
var $xk = $('.xk')
$xk.mouseenter(function() {
    $xk.css({
            animationPlayState: 'paused',
            background: 'url(images/bannerimg-guanggao/bg-xvkong.png) -5px -130px no-repeat'
        })
        //更改拉比克图片
    window.setTimeout(function() {
        $labike.attr('src', 'images/bannerimg-guanggao/lxk.png')
    }, 500)
})
$xk.mouseleave(function() {
        $xk.css({
            animationPlayState: 'running',
            background: 'url(images/bannerimg-guanggao/bg-xvkong.png) -5px -5px no-repeat'
        })
    })
    //冰女动画
var $bv = $('.bv')
$bv.mouseenter(function() {
    $bv.css({
            animationPlayState: 'paused',
            background: 'url(images/bannerimg-guanggao/bg-bingnv.png) -5px -128px no-repeat'
        })
        //更改拉比克图片
    window.setTimeout(function() {
        $labike.attr('src', 'images/bannerimg-guanggao/lbv.png')
    }, 500)

})
$bv.mouseleave(function() {
        $bv.css({
            animationPlayState: 'running',
            background: 'url(images/bannerimg-guanggao/bg-bingnv.png) -5px -5px no-repeat'
        })
    })
    //斧王动画
var $fw = $('.fw')
$fw.mouseenter(function() {
    $fw.css({
            animationPlayState: 'paused',
            background: 'url(images/bannerimg-guanggao/bg-fuwang.png) -5px -135px no-repeat'
        })
        //更改拉比克图片
    window.setTimeout(function() {
        $labike.attr('src', 'images/bannerimg-guanggao/lfw.png')
    }, 500)

})
$fw.mouseleave(function() {
        $fw.css({
            animationPlayState: 'running',
            background: 'url(images/bannerimg-guanggao/bg-fuwang.png) -5px -5px no-repeat'
        })
    })
    //凤凰动画
var $fh = $('.fh')
$fh.mouseenter(function() {
    $fh.css({
            animationPlayState: 'paused',
            background: 'url(images/bannerimg-guanggao/bg-fenghuang.png) -5px -130px no-repeat'
        })
        //更改拉比克图片
    window.setTimeout(function() {
        $labike.attr('src', 'images/bannerimg-guanggao/lfh.png')
    }, 500)

})
$fh.mouseleave(function() {
        $fh.css({
            animationPlayState: 'running',
            background: 'url(images/bannerimg-guanggao/bg-fenghuang.png) -5px -5px no-repeat'
        })
    })
    //  $logovideo=$('.logovideo')
    //  $logovideo.css('autoplay','true')
var $bgm = $('.bgm')
var bgm = document.querySelector('.bgm')
var $body = $('body')
var body = document.querySelector('body')

//点击后播放音频
body.onclick = (function() {
        console.log(1)
        bgm.play()
    })
    // 拉比克下方点击购买
$('.buy').mouseenter(function() {

    $('.buy').css('background', 'url(images/bannerimg-guanggao/bg-btn.png) -30px -138px')
})
$('.buy').mouseleave(function() {

    $('.buy').css('background', 'url(images/bannerimg-guanggao/bg-btn.png) -30px -30px')
})

//三个广告
//鼠标进入时1
$('.b1').mouseenter(function() {
        $('.b1')
            .stop()
            .animate({
                marginTop: '-30',
                scrol: '1'
            })

        $('.b1').next().stop().fadeIn(1000)
    })
    //移除时1
$('.b1').mouseleave(function() {
        $('.b1')
            .stop()
            .animate({
                marginTop: '0'
            })
        $('.b1').next().stop().fadeOut(100)
    })
    //鼠标进入时2
$('.b2').mouseenter(function() {
        $('.b2')
            .stop()
            .animate({
                marginTop: '-30'
            })

        $('.b2').next().stop().fadeIn(1000)
    })
    //移除时2
$('.b2').mouseleave(function() {
        $('.b2')
            .stop()
            .animate({
                marginTop: '0'
            })
        $('.b2').next().stop().fadeOut(100)
    })
    //鼠标进入时3
$('.b3').mouseenter(function() {
        $('.b3')
            .stop()
            .animate({
                marginTop: '-30'
            })

        $('.b3').next().stop().fadeIn(1000)
    })
    //移除时3
$('.b3').mouseleave(function() {
    $('.b3')
        .stop()
        .animate({
            marginTop: '0'
        })
    $('.b3').next().stop().fadeOut(100)
})

//底部logo鼠标移动上去后变亮
var $a = $('.botwraper ul li a')
$a.mouseenter(function() {

    $(this).css('background-positionY', '42px')

})
$a.mouseleave(function() {
    $(this).css('background-positionY', '0px')
})

//鼠标进入第5个logo显示二维码
$('.a5').mouseenter(function() {
        $('.erweima').show()
    })
    //移除后隐藏
$('.a5,.erweima').mouseleave(function() {
    $('.erweima').hide()
})