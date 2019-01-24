// 顶部轮播图
var top_slideshow = document.querySelector('.top_slideshow');
var top_slideshow_position_left_btn = document.querySelector('.top_slideshow_position .left_btn');
var top_slideshow_position_right_btn = document.querySelector('.top_slideshow_position .right_btn');
var top_slideshow_position_lis = document.querySelectorAll('.top_slideshow_position .roundbox li');
var top_slideshow_photo_box = document.querySelector('.top_slideshow_photo_box');
var top_slideshow_position = document.querySelector('.top_slideshow_position')
var index = 0;
var width = top_slideshow.clientWidth;
top_slideshow_position_right_btn.onclick = function () {
    if (index == 0) {
        top_slideshow_photo_box.style.left = 0 + 'px';
    }
    top_slideshow_position_lis[index].className = 'left';
    index++;
    var v = - index * width;
    move(top_slideshow_photo_box, v, 500);
    if (index >= 6) {
        index = 0;
    }
    top_slideshow_position_lis[index].className = 'li left';
}
top_slideshow_position_left_btn.onclick = function () {
    top_slideshow_position_lis[index].className = 'left';
    index--;
    if (index < 0) {
        index = 5;
        top_slideshow_photo_box.style.left = - 6 * width +'px';
    }
    top_slideshow_position_lis[index].className = 'li left';
    var v = - index * width;
    move(top_slideshow_photo_box, v, 500);
}
for (var i = 0; i < top_slideshow_position_lis.length; i++) {
    top_slideshow_position_lis[i].newindex = i;
    top_slideshow_position_lis[i].onclick = function () {
        top_slideshow_position_lis[index].className = 'left';
        index = this.newindex;
        var v = - index * width;
        move(top_slideshow_photo_box, v, 500);
        top_slideshow_position_lis[index].className = 'li left'
    }
}
//自动轮播
var flag = window.setInterval(function () {
	top_slideshow_position_right_btn.onclick();
},3000);

top_slideshow.onmouseenter = function () {
	window.clearInterval(flag);
}

top_slideshow.onmouseleave = function () {
	flag = window.setInterval(function () {
		top_slideshow_position_right_btn.onclick();
	},3000);
}


top_slideshow_position.onmouseenter = function () {
	window.clearInterval(flag);
}


top_slideshow_position.onmouseleave = function () {
	flag = window.setInterval(function () {
		top_slideshow_position_right_btn.onclick();
	},3000);
}




// 主体左盒子
// $('.main_left_box .top_img li:nth-child(1)').mouseenter(function () {
//     $('.main_left_box .top_img li:nth-child(1)').css('bgckground-position','-10px,-95px')
// })     失败


// 主体左盒子下的综合新闻

$('.all_news li').mouseenter(function () {
    $(this).addClass('all_news_active').siblings().removeClass('all_news_active')
})
$('.all_news li').click(function () {
    var num = $(this).index();
    $('.box_content li').eq(num).addClass('box_content_active').siblings().removeClass('box_content_active')
})


// 右侧轮播图
var right_slideshow_btn = document.querySelectorAll('.right_slideshow_btn li');
var right_slideshow = document.querySelector('.right_slideshow');
var right_slideshow_photo_box = document.querySelector('.right_slideshow_photo_box');
var right_width = right_slideshow.offsetWidth;
var right_index = 0;
for (var j = 0 , length = right_slideshow_btn.length; j < right_slideshow_btn.length; j++) {
    right_slideshow_btn[j].newindexx = j
    right_slideshow_btn[j].onmouseenter = function () {
        right_slideshow_btn[right_index].className = 'left';
        right_index = this.newindexx;
        var vv = - right_index * right_width;
        move(right_slideshow_photo_box, vv, 250);
        right_slideshow_btn[right_index].className = 'lii left';
    }
}


// 自动轮播
var right_flag = window.setInterval(function () {
        if (right_index == 0) {
            right_slideshow_photo_box.style.left = 0 + 'px';
        }
        right_slideshow_btn[right_index].className = 'left';
        right_index++;
        var vv = - right_index * right_width;
        movee(right_slideshow_photo_box, vv, 500);
        if (right_index >= 3) {
            right_index = 0;
        }
        right_slideshow_btn[right_index].className = 'lii left';
},3000);

right_slideshow.onmouseenter = function () {
	window.clearInterval(right_flag);
}


right_slideshow.onmouseleave = function () {
    right_flag = window.setInterval(function () {
        if (right_index == 0) {
            right_slideshow_photo_box.style.left = 0 + 'px';
        }
        right_slideshow_btn[right_index].className = 'left';
        right_index++;
        var vv = - right_index * right_width;
        movee(right_slideshow_photo_box, vv, 500);
        if (right_index >= 3) {
            right_index = 0;
        }
        right_slideshow_btn[right_index].className = 'lii left';
},2000);
	
}




























// 右侧固定盒子
var k = 1;
$('.red').click(function () {
    k++;
    if (k % 2 == 0) {
        $('.guding').css('right','0').find('.red span').text('收起').next().css('background-position','-87px -12px');
        
    }else{
        $('.guding').css('right','-135px').find('.red span').text('展开').next().css('background-position','-87px -56px');
    }
  });

$('.red').mouseenter(function () {
    $(this).css('background-color','#ed4b4b')
})
$('.red').mouseleave(function () {
    $(this).css('background-color','#ac3c26')
})


// 客服换色
$('.top_kefu').mouseenter(function () {
    $(this).css('background-color','#3f4a4e').find('i').css('background-position','-10px -55px');
})
$('.top_kefu').mouseleave(function () {
    $(this).css('background-color','').find('i').css('background-position','-10px -11px')
})

// 新浪换色
$('.top_sina').mouseenter(function () {
    $(this).css('background-color','#3f4a4e').find('i').css('background-position','-44px -54px');
})
$('.top_sina').mouseleave(function () {
    $(this).css('background-color','').find('i').css('background-position','-44px -12px')
})




// 隐藏盒子
var m = 1;
$('.yincang_btn').click(function () {
    m++;
    if (m % 2 == 0) {
        $('.yincang').stop().slideDown(500, 'linear');
        $('.yincang_btn').find('.text').text('收起').next().css('background-position','-21px -1px');
    } else {
        $('.yincang').stop().slideUp(500, 'linear');
        $('.yincang_btn').find('.text').text('展开').next().css('background-position','-1px -1px');
    }
   
})


// 左侧最下tab分类
$('.main_center_right_box li').mouseenter(function () {
    var num = $(this).index();
    $(this).addClass('hover').siblings().removeClass('hover')
    $('.main_btm').eq(num).addClass('btm_block').siblings().removeClass('btm_block')
})



// 倒计时
var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
function fun() {
    var now = new Date();
    var end = new Date('2019-1-28 00:00:00');
    var time = end.getTime() - now.getTime();
    var h = parseInt(time / 1000 / 60 / 60);
    var m = parseInt(time / 1000 / 60 % 60);
    var s = parseInt(time / 1000  % 60);
    h = h < 10 ? '0' + h: h;
    m = m < 10 ? '0' + m: m;
    s = s < 10 ? '0' + s: s;
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    if (time <= 0) {
    window.clearInterval(djs);
    hours.innerText = '00';
    minutes.innerText = '00';
    seconds.innerText = '00';
    }
}
fun();
var djs = window.setInterval(function () {
    fun();
} ,1000)




// 倒计时
var hourss = document.querySelector('.hourss');
var minutess = document.querySelector('.minutess');
var secondss = document.querySelector('.secondss');
function funn() {
    var now = new Date();
    var end = new Date('2019-1-30 00:00:00');
    var time = end.getTime() - now.getTime();
    var h = parseInt(time / 1000 / 60 / 60);
    var m = parseInt(time / 1000 / 60 % 60);
    var s = parseInt(time / 1000  % 60);
    h = h < 10 ? '0' + h: h;
    m = m < 10 ? '0' + m: m;
    s = s < 10 ? '0' + s: s;
    hourss.innerText = h;
    minutess.innerText = m;
    secondss.innerText = s;
    if (time <= 0) {
    window.clearInterval(djs);
    hourss.innerText = '00';
    minutess.innerText = '00';
    secondss.innerText = '00';
    }
}
fun();
var djss = window.setInterval(function () {
    funn();
} ,1000)