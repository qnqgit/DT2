// 首次进入时显示的图片
$('.enter_left_img').click(function () {
	$('.enter_left_img').css('left', '-960px').hide(3000, 'linear').next().css('right', '-960px').hide(3000, 'linear');
})
// 圆圈里三个盒子上下浮动
var sangehezi = window.setInterval(function () {
	function get_random(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	var topyi = get_random(160, 170);
	var toper = get_random(90, 100);
	var topsan = get_random(25, 35);
	$('.jinruyi').css('top', topyi);
	$('.jinruer').css('top', toper);
	$('.jinrusan').css('top', topsan);
}, 1000)

// 点击三个上下浮动的盒子,使其清空
$('.jinruyi').click(function () {
	$('.jinruyi').empty();
})
$('.jinruer').click(function () {
	$('.jinruer').empty();
})
$('.jinrusan').click(function () {
	$('.jinrusan').empty();
})

// 点击按钮清空居中圆圈的盒子
var dianjicishu = 0;
$('.qingkongyuanquan').click(function () {
	var shijian = prompt('请输入您计划浏览网页多少分钟,例如输入:5')
	dianjicishu++;
	if (dianjicishu % 3 === 0) {
		alert('是不是有病！');
	}
	if (shijian > 120) {
		alert('建议您合理安排上网时间!长时间上网对眼睛不好！');
	}
	if (isNaN(shijian)) {
		alert('对不起您输入时间的方式不正确，请您重新输入');
	} else if (shijian.trim() === '') {
		alert('对不起您的输入方式不正确，请您重新输入')
	} else {
		// 倒计时的盒子全屏移动
		$('.yuanquan_box').empty();
		$('.daojishi').css('opacity', '1');
		$('.tab_kuang').css('display', 'block');
		$('.footer').css('display', 'block');
		$('.nav_top').css('display', 'block');
		$('.yuanquan_box').css('display', 'none');
		var daojishi = window.setInterval(function () {
			function get_random(min, max) {
				return Math.floor(Math.random() * (max - min + 1) + min);
			}
			var daojishi_top = get_random(0, 1300);
			var daojishi_left = get_random(0, 1800);
			$('.daojishi').css('top', daojishi_top)
			$('.daojishi').css('left', daojishi_left)
		}, 10000)
		// 倒计时
		var hours = document.querySelector('.hours');
		var minutes = document.querySelector('.minutes');
		var seconds = document.querySelector('.seconds');
		var jjj = 0

		function fun() {
			var now = new Date();
			jjj++
			var end = now.getTime() + shijian * 60 * 1000 - 1000 * jjj;
			var time = end - now.getTime();
			var h = parseInt(time / 1000 / 60 / 60);
			var m = parseInt(time / 1000 / 60 % 60);
			var s = parseInt(time / 1000 % 60);
			if (h == 0 && m <= 9) {
				$('.daojishi li').css('color', 'red');
			}
			hours.innerText = '你还可以上网' + h + '小时';
			minutes.innerText = m + '分钟';
			seconds.innerText = s + '秒';
			// 如果到了计划好的时间，将会清空所有元素
			if (time <= 0) {
				$('.main_box').empty();
				$('.guding').empty();
				window.clearInterval(djs);
				hours.innerHTML = '<h1>亲，到时间了！</h1>';
				minutes.innerText = '';
				seconds.innerText = '';
			}
		}
		fun();
		var djs = window.setInterval(function () {
			fun();
		}, 1000)
	}
})

// 左侧tab栏鼠标进入事件 显示透明的盒子
$('.tabjs ul').on('mouseenter', 'li', function () {
	$('.tabjs .tab_bj').css('display', 'block').stop().animate({
		top: 42 * $(this).index() + 42 + "px"
	}, 300, "swing").next().stop().css('display', 'block').animate({
		top: 42 * $(this).index() + 42 + "px"
	}, 500, "swing");
})
$('.tabjs ul').mouseleave(function () {
	$('.tabjs .tab_bj').stop().css('display', 'none').next().css('display', 'none');
})

// 魔方控制栏鼠标进入事件 显示透明的盒子
$('.mofang ul').on('mouseenter', 'li', function () {
	$('.mofang .tab_bj').css('display', 'block').stop().animate({
		top: 42 * $(this).index() + 30 + "px"
	}, 300, "swing").next().stop().css('display', 'block').animate({
		top: 42 * $(this).index() + 30 + "px"
	}, 500, "swing");
})
$('.mofang ul').mouseleave(function () {
	$('.mofang .tab_bj').stop().css('display', 'none').next().css('display', 'none');
})


//	轮播图定时器
var lunbotu;
function lunbo(lunboxiang) {
	window.clearInterval(lunbotu)
	var lbx = 0
    lunbotu = window.setInterval(function () {
		lbx++;
		if (lbx > lunboxiang.length-1) {
			lbx = 0
		}
		$(lunboxiang).eq(lbx).fadeIn(1000).siblings().fadeOut(1000)
	}, 2000)
}

//	点击轮播项阻止冒泡
$('.lunbo').click(function(e){
	e.stopPropagation()
})






// 点击tab栏显示英雄图片和文字
$('.tabjs ul').on('click', 'li', function () {
	$('.heros').empty();
	var num = $(this).index();
	for (var i = 0, len = hero_fenlei[num].length; i < len; i++) {
		$('<li><section><img></section><div></div><img/><p></p></li>').appendTo('.heros');
		$('.heros  section img').addClass('yiimg');
		$('.heros .yiimg').eq(i).attr('src', '../images/imagesyxlm/AllHeros/' + hero_fenlei[num][i].imgSrc);
		$('.heros li img:nth-child(3)').eq(i).attr('src', '../images/imagesyxlm/AllHeros/' + hero_fenlei[num][i].imgSrc);
		$('.heros p').eq(i).text(hero_fenlei[num][i].name).addClass('web-font').css('font-size', '12px');
		switch (num) {
			case 0:
				$('.heros li').show(2000, 'linear');
				break;
			case 1:
				$('.heros li').slideDown(2000, 'linear');
				break;
			case 2:
				$('.heros li').fadeIn(2000, 'linear');
			case 3:
				$('.heros li').show(2000, 'linear');
				break;
			case 4:
				$('.heros li').slideDown(2000, 'linear');
				break;
			case 5:
				$('.heros li').fadeIn(2000, 'linear');
			default:
				$('.heros li').show(2000, 'linear');
		}
	}

	$(this).find('.lunbo').stop().slideToggle(1000,lunbo($(this).find('.show')))
	$(this).find('.lunbo').click(function(){
		$(this).find('.lbyi').css({
			left: 200,
			top: -100,
			width: 688,
			height: 380
		})
		$(this).find('.lber').css({
			left: 200,
			top: -135,
			width: 688,
			height: 380
		})
		$(this).find('.lbsan').css({
			left: 200,
			top: -175,
			width: 688,
			height: 380
		})
		$(this).find('.lbsi').css({
			left: 200,
			top: -200,
			width: 688,
			height: 380
		})
		$(this).find('.lbwu').css({
			left: 200,
			top: -240,
			width: 688,
			height: 380
		})
		$(this).find('.lbliu').css({
			left: 200,
			top: -275,
			width: 688,
			height: 380
		})
	})
	$(this).find('.lunbo').mouseenter(function(){
		window.clearInterval(lunbotu)
	})
	$(this).find('.lunbo').mouseleave(function(){
		lunbo($(this).find('.show'))
	})




	// 鼠标进入li显示隐藏的小黄盒子
	$('.heros li ').on('mouseover', function () {
		$(this).find('div').css('display', 'block');
		$(this).find('section').css('display', 'block');
	})
	$('.heros li ').on('mouseout', function () {
		$(this).find('div').css('display', 'none');
		$(this).find('section').css('display', 'none');
	})
	// 鼠标移动设置小黄盒子的位置left 和top值
	$('.heros img').mousemove(function (e) {
		var x = e.pageX - $(this).offset().left - $(this).find('div').width() / 2 + 12.5;
		var y = e.pageY - $(this).offset().top - $(this).find('div').height() / 2;
		if (x < 0) {
			x = 0;
		}
		if (x > $(this).width() - $(this).find('div').width()) {
			x = 57.5;
		}
		if (y > 46) {
			y = 46;
		}
		if (y < 0) {
			y = 0;
		}
		$('.heros li div').css('left', x)
		$('.heros li div').css('top', y)
		$('.heros section img').css('left', -2 * x + 50)
		$('.heros section img').css('top', -2 * y + 30)

	})
})
// 点击文字英雄分类使英雄图片清空 
$('.yxfl').click(function () {
	$('.heros').empty();
	$('.lb_content').css('top',0).css('left',0).css('width',200+'px').css('height',100+'px')
})


// 点击变身魔方 添加图片
$('.bianshen').click(function () {
	$('.zuo').empty()
	for (i = 0, len = 9; i < len; i++) {
		$('<li><img /></li>').appendTo('.box .zuo');
		$('.box  .zuo img').eq(i).attr('src', '../images/imagesyxlm/立方体/' + mofang[i].imgSrc);
	}
	$('.you').empty()
	for (j = 9, len = 18; j < len; j++) {
		$('<li><img /></li>').appendTo('.box .you');
		$('.box  .you img').eq(j - 9).attr('src', '../images/imagesyxlm/立方体/' + mofang[j].imgSrc);
	}
	$('.qian').empty()
	for (j = 18, len = 27; j < len; j++) {
		$('<li><img /></li>').appendTo('.box .qian');
		$('.box  .qian img').eq(j - 18).attr('src', '../images/imagesyxlm/立方体/' + mofang[j].imgSrc);
	}
	$('.hou').empty()
	for (j = 27, len = 36; j < len; j++) {
		$('<li><img /></li>').appendTo('.box .hou');
		$('.box  .hou img').eq(j - 27).attr('src', '../images/imagesyxlm/立方体/' + mofang[j].imgSrc);
	}
	$('.shang').empty()
	for (j = 36, len = 45; j < len; j++) {
		$('<li><img /></li>').appendTo('.box .shang');
		$('.box  .shang img').eq(j - 36).attr('src', '../images/imagesyxlm/立方体/' + mofang[j].imgSrc);
	}
	$('.xia').empty()
	for (j = 45, len = 54; j < len; j++) {
		$('<li><img /></li>').appendTo('.box .xia');
		$('.box  .xia img').eq(j - 45).attr('src', '../images/imagesyxlm/立方体/' + mofang[j].imgSrc);
	}
})

// 点击变大使魔方变大
var biandajishu = -50;
var libiandajishu = 30
$('.mofangbianda').click(function () {
	biandajishu += 100;
	libiandajishu += 25
	$('.box div').css('width', biandajishu).css('height', biandajishu);
	$('.box div li').css('width', libiandajishu).css('height', libiandajishu)
})
$('.mofangbianxiao').click(function () {
	biandajishu -= 100;
	libiandajishu -= 25
	$('.box div').css('width', biandajishu).css('height', biandajishu);
	$('.box div li').css('width', libiandajishu).css('height', libiandajishu)
})
// 清空魔方图片和背景颜色
$('.mofmof').click(function () {
	$('.box div').empty();
	$('.box div').css('background', 'rgba(0,0,0,0)');
})

//鼠标按下且移动时触发， 使魔方随鼠标旋转  
move();

function move() {
	var xx = 0,
		yy = 0;
	var xArr = [],
		yArr = [];
	window.onmousedown = function (e) { //鼠标按下事件   
		xArr[0] = e.clientX / 2; //获取鼠标点击屏幕时的坐标   
		yArr[0] = e.clientY / 2;
		window.onmousemove = function (e) { //鼠标移动事件————当鼠标按下且移动时触发   
			xArr[1] = e.clientX / 2; //获取鼠标移动时第一个点的坐标   
			yArr[1] = e.clientY / 2;
			yy += xArr[1] - xArr[0]; //获得鼠标移动的距离   
			xx += yArr[1] - yArr[0];
			//将旋转角度写入transform中  
			$('.box').css('transform', 'rotatex(' + xx + "deg) rotatey(" + yy + 'deg) rotatez(0deg)scale3d(0.7,0.7,0.7)')
			xArr[0] = e.clientX / 2;
			yArr[0] = e.clientY / 2;
		}
	}
	window.onmouseup = function () { //鼠标抬起事件————用于清除鼠标移动事件，   
		window.onmousemove = null;
	}
}

// 点击使魔方自动旋
$('.mfzxz').click(function () {
	$('.box').addClass('boxxz');
})
$('.mfdz').click(function () {
	$('.box').removeClass('boxxz');
})

// 点击使魔方边框变色
var oo = 1
$('.bianse').click(function () {
	if (oo == 1) {
		$('.box div').addClass('bianseyi').removeClass('bianseer').removeClass('biansesan');
		oo++
	} else if (oo == 2) {
		$('.box div').addClass('bianseer').removeClass('bianseyi').removeClass('biansesan');
		oo++
	} else if (oo == 3) {
		$('.box div').addClass('biansesan').removeClass('bianseer').removeClass('bianseyi');
		oo++;
	} else {
		$('.box div').removeClass('biansesan').removeClass('bianseer').removeClass('bianseyi');
		oo = 1;
	}
})
// 魔方背景变颜色
var colors = ["rgba(35,62,196,0.3)", "rgba(25,229,131,0.3)", "rgba(239,67,7,0.3)", "rgba(191,141,44,0.3)", "rgba(216,198,99,0.3)", "rgba(80,210,16,0.3)", "rgba84,216,12,0.3)", "rgba(33,67,146,0.3)", "#4b77be", "#be90d4"];
$(".qita").click(function () {
	var n = Math.floor(Math.random() * 10);
	var color = colors[n]
	$('.box div').css('background', color);
});

// 点击使魔方分开的方法  失败了  不懂
// clickBox()
// function clickBox() {
// 	var btn = document.querySelector(".fenkai");
//     var box = document.querySelector(".box");
//     var son = box.children;
//     var value = 0;
//     //存储立方体散开时的transform参数   
// 	var arr0 = ["rotatey(-90deg) translatex(-75px)", 
// 	"rotatey(90deg) translatex(75px)", 
// 	"rotatex(90deg) translatey(-75px)",  
// 	"rotatex(-90deg) translatey(75px)", 
// 	"translatez(-75px)", 
// 	"translatez(75px)"];
//     //存储立方体合并时的transform参数   
// 	var arr1 = ["rotatey(-90deg) translatex(-100px)translatez(75px)", 
// 	"rotatey(90deg) translatex(75px)translatez(75px)",  
// 	"rotatex(90deg) translatey(-75px)translatez(75px)", 
// 	"rotatex(-90deg) translatey(75px)translatez(75px)", 
// 	"translatez(-150px)", 
// 	"translatez(150px)"];
//     btn.onclick = function () {
//         if (value == 0) {
//             value = 1;
//             for (var i = 0; i < arr1.length; i++) {
//                 son[i].style.transform = arr1[i];
//             }
//         } else if (value == 1) {
//             value = 0;
//             for (var j = 0; j < arr0.length; j++) {
//                 son[j].style.transform = arr0[j];
//             }
//         }
//     }
// }

// 双击小圆圈// 产生进入音
// $('.sao_btn').dblclick(function (e) {
// 	e.stopPropagation()
// 	$('audio')[0].load();
// 	$('audio')[0].play();
// 	$('audio')[1].load();
// 	$('audio')[1].play();
// 	// saobtn首页显示
// 	$('.shouye').css('display', 'block');
// })


// 双击小圆圈// 产生进入音
$('.sao_btn').click(function (e) {
	e.stopPropagation()
	$('audio')[0].load();
	$('audio')[0].play();
	$('audio')[1].load();
	$('audio')[1].play();
	$('.shouye').css('display', 'block');


})

// 阻止声音传播
$('.sao_btn li').click(function (e) {
	e.stopPropagation()
	// 点击首页每个li有声音
	$('audio')[2].load();
	$('audio')[2].play();
})

// 点击body使sao下的首页隐藏
document.body.onclick = function (e) {
	// $('audio')[3].load();
	// $('audio')[3].play();
	$('.shouye').css('display', 'none')
	$('.shouyeer_yi').css('display', 'none')
	$('.shouyeer_yi_musicyinyue').css('display', 'none');
}

// 点击使sao_btn全屏移动
var div = document.querySelector('.sao_btn');
div.onmousedown = function (e1) {
	var x1 = e1.offsetX;
	var y1 = e1.offsetY;
	document.onmousemove = function (e) {
		var x = e.clientX;
		var y = e.clientY;
		div.style.left = x - x1 + 'px';
		div.style.top = y - y1 + 'px';
	}
}
// 鼠标抬起不移动
div.onmouseup = function () {
	document.onmousemove = null;
}

// 音乐栏显示
var shouyeer_yishu = 0
$('.shouyeer').click(function () {
	if (shouyeer_yishu == 0) {
		shouyeer_yishu = 1;
		$('.shouyeer_yi').css('display', 'block')
	} else if (shouyeer_yishu == 1) {
		shouyeer_yishu = 0
		$('.shouyeer_yi').css('display', 'none')
		$('audio')[3].load();
		$('audio')[3].play();
	}
})

// sao首页上下浮动
var saoshouye = window.setInterval(function () {
	function get_random(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	var topyi = get_random(-60, -40);
	$('.shouye').css('top', topyi);

}, 1000)


// 石首音乐显示
var shouyeer_yi_music = 0;
$('.shouyeer_yi_music').click(function () {
	if (shouyeer_yi_music == 0) {
		shouyeer_yi_music = 1;
		$('.shouyeer_yi_musicyinyue').css('display', 'block');
	} else if (shouyeer_yi_music == 1) {
		shouyeer_yi_music = 0;
		$('.shouyeer_yi_musicyinyue').css('display', 'none');
		$('audio')[3].load();
		$('audio')[3].play();
	}
})

// 点击显示开发人员
var kaifa = 0
$('.shouyeer_bannerthree').click(function(){
	if(kaifa == 0) {
		kaifa = 1
		$('.kaifa').css('display','block')
	}
	else if(kaifa == 1) {
		kaifa = 0
		$('.kaifa').css('display','none')
	}
	
})












// sao切换body背景十张图显示
var shouyeer_er_qhbjtu = 0;
$('.shouyeer_er_qhbjtu').click(function (e) {
	e.stopPropagation()
	if (shouyeer_er_qhbjtu == 0) {
		shouyeer_er_qhbjtu = 1;
		$('.shouyeer_er_qhbjtu ul').css('display', 'block');
	} else if (shouyeer_er_qhbjtu == 1) {
		shouyeer_er_qhbjtu = 0;
		$('.shouyeer_er_qhbjtu ul').css('display', 'none');
		$('audio')[3].load();
		$('audio')[3].play();
	}
})

// 点击切换未来世界背景图片
$('.bjbld').click(function (e) {
	e.stopPropagation()
	$('body').removeClass().addClass('wlsj')
})
// 点击切换金克斯背景图片
$('.jks').click(function (e) {
	e.stopPropagation()
	$('body').removeClass().addClass('jks')
})
// 瑞文
$('.rw').click(function (e) {
	e.stopPropagation()
	$('body').removeClass().addClass('rw')
})
// 皎月
$('.jyy').click(function (e) {
	e.stopPropagation()
	$('body').removeClass().addClass('jyy')
})
// 螳螂
$('.tl').click(function (e) {
	e.stopPropagation()
	$('body').removeClass().addClass('tl')
})
// 机器人
$('.jqr').click(function (e) {
	e.stopPropagation()
	$('body').removeClass().addClass('jqr')
})
// 琴女
$('.qn').click(function (e) {
	e.stopPropagation()
	$('body').removeClass().addClass('qn')
})
// 奥巴马
$('.abm').click(function (e) {
	e.stopPropagation()
	$('body').removeClass().addClass('abm')
})
// 德莱文
$('.dlw').click(function (e) {
	e.stopPropagation()
	$('body').removeClass().addClass('dlw')
})
// 不祥之刃
$('.bx').click(function (e) {
	e.stopPropagation()
	$('body').removeClass().addClass('bx')
})
// 默认
$('.mr').click(function (e) {
	e.stopPropagation()
	$('body').removeClass().addClass('mr')
})

// 点击播放音乐
// 演员
var yy = 0;
$('.yy').click(function () {
	if (yy == 0) {
		yy = 1;
		$('audio')[4].load();
		$('audio')[4].play();
		$('.tab i').addClass('wenzibiansea')
	} else if (yy == 1) {
		yy = 0;
		$('audio')[4].pause();
		$('.tab i').removeClass('wenzibiansea')
	}
})

// 丑八怪
$('.cbg').click(function () {
	if (yy == 0) {
		yy = 1;
		$('audio')[5].load();
		$('audio')[5].play();
		$('.tab i').addClass('wenzibianseaa')
	} else if (yy == 1) {
		yy = 0;
		$('audio')[5].pause();
		$('.tab i').removeClass('wenzibianseaa')
	}
})
// 认真的雪
$('.rzdx').click(function () {
	if (yy == 0) {
		yy = 1;
		$('audio')[6].load();
		$('audio')[6].play();
		$('.tab i').addClass('wenzibiansea')
	} else if (yy == 1) {
		yy = 0;
		$('audio')[6].pause();
		$('.tab i').removeClass('wenzibiansea')
	}
})
// 方圆几里
$('.fyjl').click(function () {
	if (yy == 0) {
		yy = 1;
		$('audio')[7].load();
		$('audio')[7].play();
		$('.tab i').addClass('wenzibianseaa')
	} else if (yy == 1) {
		yy = 0;
		$('audio')[7].pause();
		$('.tab i').removeClass('wenzibianseaa')
	}
})
// 难念的经
$('.nndj').click(function () {
	if (yy == 0) {
		yy = 1;
		$('audio')[8].load();
		$('audio')[8].play();
		$('.tab i').addClass('wenzibiansea')
	} else if (yy == 1) {
		yy = 0;
		$('audio')[8].pause();
		$('.tab i').removeClass('wenzibiansea')
	}
})
// 稻香
$('.dx').click(function () {
	if (yy == 0) {
		yy = 1;
		$('audio')[9].load();
		$('audio')[9].play();
		$('.tab i').addClass('wenzibianseaa')
	} else if (yy == 1) {
		yy = 0;
		$('audio')[9].pause();
		$('.tab i').removeClass('wenzibianseaa')
	}
})
// 十年
$('.sn').click(function () {
	if (yy == 0) {
		yy = 1;
		$('audio')[10].load();
		$('audio')[10].play();
		$('.tab i').addClass('wenzibianseaa')
	} else if (yy == 1) {
		yy = 0;
		$('audio')[10].pause();
		$('.tab i').removeClass('wenzibianseaa')
	}
})
// 好久不见
$('.hjbj').click(function () {
	if (yy == 0) {
		yy = 1;
		$('audio')[11].load();
		$('audio')[11].play();
		$('.tab i').addClass('wenzibiansea')
	} else if (yy == 1) {
		yy = 0;
		$('audio')[11].pause();
		$('.tab i').removeClass('wenzibiansea')
	}
})
// 差三岁
$('.elcs').click(function () {
	if (yy == 0) {
		yy = 1;
		$('audio')[12].load();
		$('audio')[12].play();
		$('.tab i').addClass('wenzibianseaa')
	} else if (yy == 1) {
		yy = 0;
		$('audio')[12].pause();
		$('.tab i').removeClass('wenzibianseaa')
	}
})
// 红日
$('.hr').click(function () {
	if (yy == 0) {
		yy = 1;
		$('audio')[13].load();
		$('audio')[13].play();
		$('.tab i').addClass('wenzibiansea')
	} else if (yy == 1) {
		yy = 0;
		$('audio')[13].pause();
		$('.tab i').removeClass('wenzibiansea')
	}
})



// 点击显示切换字体lan
var shouyeer_er_san = 0;
$('.shouyeer_er_san').click(function (e) {
	e.stopPropagation()
	if (shouyeer_er_san == 0) {
		shouyeer_er_san = 1;
		$('.shouyeer_er_san ul').css('display', 'block');
	} else if (shouyeer_er_san == 1) {
		shouyeer_er_san = 0;
		$('.shouyeer_er_san ul').css('display', 'none');
		$('audio')[3].load();
		$('audio')[3].play();
	}
})

// 切换藤山字体
$('.tengshan').click(function () {
	if ($('body li').hasClass('web-font') || $('body i').hasClass('web-font') || $('body p').hasClass('web-font') || $('body span').hasClass('web-font')) {
		$('body li').removeClass('web-font').addClass('web-fontt')
		$('body i').removeClass('web-font').addClass('web-fontt')
		$('body p').removeClass('web-font').addClass('web-fontt')
		$('body span').removeClass('web-font').addClass('web-fontt')
	} else if ($('body li').hasClass('web-fon') || $('body i').hasClass('web-fon') || $('body p').hasClass('web-fon') || $('body span').hasClass('web-fon')) {
		$('body li').removeClass('web-fon').addClass('web-fontt')
		$('body i').removeClass('web-fon').addClass('web-fontt')
		$('body p').removeClass('web-fon').addClass('web-fontt')
		$('body span').removeClass('web-font').addClass('web-fontt')
	} else if ($('body li').hasClass('web-fonttt') || $('body i').hasClass('web-fonttt') || $('body p').hasClass('web-fonttt') || $('body span').hasClass('web-fonttt')) {
		$('body li').removeClass('web-fonttt').addClass('web-fontt')
		$('body i').removeClass('web-fonttt').addClass('web-fontt')
		$('body p').removeClass('web-fonttt').addClass('web-fontt')
		$('body span').removeClass('web-fonttt').addClass('web-fontt')
	}
})

// 切换日系中文
$('.rxzw').click(function () {
	if ($('body li').hasClass('web-font') || $('body i').hasClass('web-font') || $('body p').hasClass('web-font') || $('body span').hasClass('web-font')) {
		$('body li').removeClass('web-font').addClass('web-fonttt')
		$('body i').removeClass('web-font').addClass('web-fonttt')
		$('body p').removeClass('web-font').addClass('web-fonttt')
		$('body span').removeClass('web-font').addClass('web-fontt')
	} else if ($('body li').hasClass('web-fon') || $('body i').hasClass('web-fon') || $('body p').hasClass('web-fon') || $('body span').hasClass('web-fon')) {
		$('body li').removeClass('web-fon').addClass('web-fonttt')
		$('body i').removeClass('web-fon').addClass('web-fonttt')
		$('body p').removeClass('web-fon').addClass('web-fonttt')
		$('body span').removeClass('web-fon').addClass('web-fonttt')
	} else if ($('body li').hasClass('web-fontt') || $('body i').hasClass('web-fontt') || $('body p').hasClass('web-fontt') || $('body span').hasClass('web-fontt')) {
		$('body li').removeClass('web-fontt').addClass('web-fonttt')
		$('body i').removeClass('web-fontt').addClass('web-fonttt')
		$('body p').removeClass('web-fontt').addClass('web-fonttt')
		$('body span').removeClass('web-fontt').addClass('web-fonttt')
	}
})

// 文鼎圓立體
$('.wdglt').click(function () {
	if ($('body li').hasClass('web-font') || $('body i').hasClass('web-font') || $('body p').hasClass('web-font') || $('body span').hasClass('web-font')) {
		$('body li').removeClass('web-font').addClass('web-fon')
		$('body i').removeClass('web-font').addClass('web-fon')
		$('body p').removeClass('web-font').addClass('web-fon')
		$('body span').removeClass('web-font').addClass('web-fon')
	} else if ($('body li').hasClass('web-fonttt') || $('body i').hasClass('web-fonttt') || $('body p').hasClass('web-fonttt') || $('body span').hasClass('web-fonttt')) {
		$('body li').removeClass('web-fonttt').addClass('web-fon')
		$('body i').removeClass('web-fonttt').addClass('web-fon')
		$('body p').removeClass('web-fonttt').addClass('web-fon')
		$('body span').removeClass('web-font').addClass('web-fon')
	} else if ($('body li').hasClass('web-fontt') || $('body i').hasClass('web-fontt') || $('body p').hasClass('web-fontt') || $('body span').hasClass('web-fontt')) {
		$('body li').removeClass('web-fontt').addClass('web-fon')
		$('body i').removeClass('web-fontt').addClass('web-fon')
		$('body p').removeClass('web-fontt').addClass('web-fon')
		$('body span').removeClass('web-fontt').addClass('web-fon')
	}
})

// 恢复默认
$('.tszt').click(function () {
	if ($('body li').hasClass('web-fontt') || $('body i').hasClass('web-fontt') || $('body p').hasClass('web-fontt') || $('body span').hasClass('web-fontt')) {
		$('body li').removeClass('web-fontt').addClass('web-font')
		$('body i').removeClass('web-fontt').addClass('web-font')
		$('body p').removeClass('web-fontt').addClass('web-font')
		$('body span').removeClass('web-fontt').addClass('web-font')
	} else if ($('body li').hasClass('web-fonttt') || $('body i').hasClass('web-fonttt') || $('body p').hasClass('web-fonttt') || $('body span').hasClass('web-fonttt')) {
		$('body li').removeClass('web-fonttt').addClass('web-font')
		$('body i').removeClass('web-fonttt').addClass('web-font')
		$('body p').removeClass('web-fonttt').addClass('web-font')
		$('body span').removeClass('web-fonttt').addClass('web-font')
	} else if ($('body li').hasClass('web-fon') || $('body i').hasClass('web-fon') || $('body p').hasClass('web-fon') || $('body span').hasClass('web-fon')) {
		$('body li').removeClass('web-fon').addClass('web-font')
		$('body i').removeClass('web-fon').addClass('web-font')
		$('body p').removeClass('web-fon').addClass('web-font')
		$('body span').removeClass('web-fon').addClass('web-font')
	}
})
// 点击广告显示
var bannershu = 0
$('.shouyeer_banner').click(function () {
	if (bannershu == 0) {
		bannershu = 1
		$('.bannerrightbox').css('display', 'block')
	} else if (bannershu == 1) {
		bannershu = 0
		$('.bannerrightbox').css('display', 'none')
	}

})
$('.shouyeer_bannertwo').click(function () {
	if (bannershu == 0) {
		bannershu = 1
		$('.banner_img_box_left').css('display', 'block')
	} else if (bannershu == 1) {
		bannershu = 0
		$('.banner_img_box_left').css('display', 'none')
	}

})


// 回到顶部
var toTop = document.querySelector('.toTop');
//滚动事件
window.onscroll = function () {
	// 卷起的高度
	var val = document.documentElement.scrollTop || document.body.scrollTop;
	//判断
	if (val > 300) {
		toTop.style.display = 'block';
	} else {
		toTop.style.display = 'none';
	}
}

//点击回到顶部
$('.toTop').click(function () {
	$('html,body').animate({
		scrollTop: 0
	}, 500)
})


// 右侧固定盒子
var k = 1;
$('.red').click(function () {
	k++;
	if (k % 2 == 0) {
		$('.guding').css('right', '0').find('.red span').text('收起').next().css('background-position', '-87px -12px');

	} else {
		$('.guding').css('right', '-135px').find('.red span').text('展开').next().css('background-position', '-87px -56px');
	}
});

$('.red').mouseenter(function () {
	$(this).css('background-color', '#ed4b4b')
})
$('.red').mouseleave(function () {
	$(this).css('background-color', '#ac3c26')
})

// 客服换色
$('.top_kefu').mouseenter(function () {
	$(this).css('background-color', '#3f4a4e').find('i').css('background-position', '-10px -55px');
})
$('.top_kefu').mouseleave(function () {
	$(this).css('background-color', '').find('i').css('background-position', '-10px -11px')
})

// 新浪换色
$('.top_sina').mouseenter(function () {
	$(this).css('background-color', '#3f4a4e').find('i').css('background-position', '-44px -54px');
})
$('.top_sina').mouseleave(function () {
	$(this).css('background-color', '').find('i').css('background-position', '-44px -12px')
})



// banner右侧轮播图   不用了
// var bannerrightbox = document.querySelector('.bannerrightbox')
// var bannerimgboxright = document.querySelector('.bannerimgboxright')
// var indexx = 0
// var width = bannerrightbox.offsetWidth
// console.log(width)
// var flag = window.setInterval(function(){
// 	if(indexx == 0){
// 		bannerimgboxright.style.left = 0+'px'
// 	}
// 	indexx++
// 	vv = -indexx*172
// 	movee(bannerimgboxright,vv,50)
// 	if (indexx >= 4) {
// 		indexx = 0;
// 	}
// },1000)



// 头部导航

$('.nav_iteam .title').mouseenter(function(){
    $(this).find('.list').stop().slideToggle(500)
})
$('.nav_iteam .title').mouseleave(function(){
    $(this).find('.list').stop().slideToggle(500)
})

