// wanmei_gg_big显示与隐藏
$('.wanmei_gg_small').mouseenter(function() {
    $('.wanmei_gg_small').slideUp(500)
        // .css('display','none')
    $('.wanmei_gg_big').slideDown(1000)
        // .css('display','block')
})

$('.wanmei_gg_big').mouseleave(function() {
    $('.wanmei_gg_small').fadeIn(500)
        // .css('display','block')
    $('.wanmei_gg_big').hide(1000)
        // .css('display','none')
})


// youxi的显示与隐藏
$('.top-nav').find('.span1 input').mouseenter(function() {
    $('.youxi').fadeIn(1000)
        // .css('display','block')
})

$('.youxi').mouseleave(function() {
    $('.youxi').slideUp(1000)
        // .css('display','none')
})

// 搜索框处帖子处的下拉列表
$('.search').children('a').find('span').click(function() {
        $('.search').children('ul').fadeIn(500)
            // .css('display','block')
        $('.search').children('ul').find('a').click(function() {
            var a = $(this).text()
                // console.log(a)
            $('.search').children('a').find('span').text(a)
        })
    })
    // 离开下拉列表本身隐藏
$('.search').mouseleave(function() {
    $('.search').children('ul').fadeOut(500)
        // .css('display','none')
})


// 主题导航中右侧按钮中的子菜单显示与隐藏
$('.menu').mouseenter(function() {
    $('.menu2').stop().slideDown(1000)
        // .css('display','block')
})

$('.pr-menu').mouseleave(function() {
    $('.menu2').stop().fadeOut(1000)
        // .css('display','none')
})

// 子板块的内容展示区域显示与隐藏
$('.collapsed_no').click(function() {
    $(this).css('display', 'none').next().css('display', 'block')
    $('.content').slideUp(500)
        // .css('display','none')
})

$('.collapsed_yes').click(function() {
    $(this).css('display', 'none').prev().css('display', 'block')
    $('.content').slideDown(500)
        // .css('display','block')
})

// 第一个发帖部分返回按钮处子菜单
$('.fan1').mouseenter(function() {
    $('.l-return1').children('ul').fadeIn(500)
        // .css('display','block')
})

$('.l-return1').mouseleave(function() {
    $('.l-return1').children('ul').slideUp(500)
        // .css('display','none')
})


// 第二个发帖部分返回按钮处子菜单
$('.fan2').mouseenter(function() {
    $('.l-return2').children('ul').fadeIn(500)
        // .css('display','block')
})

$('.l-return2').mouseleave(function() {
    $('.l-return2').children('ul').slideUp(500)
        // .css('display','none')
})

// 第一个发帖部分下面的内容盒子中的上盒子第二个li中子菜单的显示与隐藏
$('.two1').click(function() {
    $('.two2').slideDown(800)
})

$('.two3').mouseleave(function() {
    $('.two2').slideUp(800)
})

// 第一个发帖部分下面的内容盒子中的上盒子第四个li中子菜单的显示与隐藏
$('.four1').click(function() {
    $('.four2').slideDown(1000)
})

$('.four3').mouseleave(function() {
    $('.four2').slideUp(1000)
})

// 第一个发帖部分下面的内容盒子中的上盒子第六个li中子菜单的显示与隐藏
$('.six1').click(function() {
    $('.six2').slideDown(1000)
})

$('.six3').mouseleave(function() {
    $('.six2').slideUp(1000)
})

// 第一个发帖部分下面的内容盒子中的上盒子最后一个li中提示信息的显示与隐藏
$('.refresh').click(function() {
    $('.refresh1').fadeIn(800)
})

setInterval(function() {
    $('.refresh1').fadeOut(800)
}, 5000)


// 快速发帖上部盒子数字20动画
$('.top-box').children('input')

// 回到顶部
$(window).scroll(function() {
    var n = $(window).scrollTop()
    if (n >= 300) {
        $('.return1').show()
    } else {
        $('.return1').hide()
    }
})

$('.return1').click(function() {
    $('html,body').animate({ scrollTop: 0 }, 500)
})

// var return1 = document.querySelector('.return1')
// console.log(return1)
// window.onscroll = function () {
//     var n = document.documentElement.scrollTop || document.body.scrollTop
//     console.log(n)
//     if (n >= 300 ) {
//         // console.log(123)
//         return1.style.display = 'block'
//     }else {
//         return1.style.display = 'none'
//     }
// }
// return1.onclick = function () {
//     document.documentElement.scrollTop = '0'
//     document.body.scrollTop = '0'
// }

// 发帖按钮操作的的动画部分
// 获取元素
var active = document.querySelector('.active')
var input = document.querySelector('.input1')
var area = document.getElementById('area')
var count = document.querySelector('.useCount')
var send = document.getElementById('send')
var ul = document.querySelector('#contentarea')
    // 类名为active元素中数字随着主题文本框输入内容的增多而减少
    // 给输入主题框设置键盘按下事件
input.onkeydown = function() {
        var bbr = input.value.length
            // console.log(bbr)
        active.innerText = 20 - bbr
            // 条件判断
        if (active.innerText <= 0) {
            active.innerText = '0'
                //    alert('您输入的字符已到最大值')
        }
    }
    // 给area注册一个输入事件
area.oninput = function() {
        count.innerText = area.value.length
    }
    // 给send注册一个点击事件
send.onclick = function() {
    if (input.value.length == 0 || area.value.length == 0) {
        alert('您好，内容不能为空，请您重新输入，谢谢！')
    } else {
        // 创建li
        var li = document.createElement('li')
            // 越晚发布的放到最前面，放入ul中
        ul.insertBefore(li, ul.children[0])
            // 创建第一个div
        var div = document.createElement('div')
            // 放到li中
        li.appendChild(div)
            // 设置类名为info
        div.className = 'info'
            // 创建img
        var img = document.createElement('img')
            // 放到div中
        div.appendChild(img)
            // 设置img的src属性
        img.src = '../images/imgfuwu/xk.jpg'
            // 创建span
        var span = document.createElement('span')
            // 放到div中
        div.appendChild(span)
            // 设置span里面的内容
        span.innerText = input.value
            // 创建p
        var p = document.createElement('p')
            // 放到div中
        div.appendChild(p)
            // 设置p里面的内容
        p.innerText = new Date().toLocaleString()
            // 创建第二个div
        var div1 = document.createElement('div')
            // 放到li中
        li.appendChild(div1)
            // 设置类名为content
        div1.className = 'content'
            // 设置内容为用户输入的内容
        div1.innerText = area.value
            // 主题输入字数提示恢复原始状态
        active.innerText = '20'
            // 设置用户输入主题发布之后input框内恢复原始状态
        input.value = ''
            // 设置用户输入内容发布之后area内恢复原始状态
        area.value = ''
            // 设置类名为useCount的span输入内容发布之后span恢复原始状态
        count.innerText = '0'
    }
}
document.qs