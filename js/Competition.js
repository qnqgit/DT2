
// tab栏切换
var num=2
$('.tab_nav li').click(function(){
	num = $(this).index()
	$(this).find('a').css('color','blue').parent().siblings().find('a').css('color','black')
	$('.content ul').eq(num).addClass('active').siblings().removeClass('active')
	$('.huanye li').eq(num).find('a').addClass('public').end().siblings().find('a').removeClass('public')
	
})
// 点击换页按钮，实现换页
$('.huanye li').click(function(){
	num = $(this).index()
	//7.点击换页按钮时清除左右两侧按钮的禁用效果
	$('.right_btn').removeClass('disabled')
	$('.left_btn').removeClass('disabled')
	$('.content ul').eq(num).addClass('active').siblings().removeClass('active')
	$('.tab_nav li').eq(num).find('a').css('color','blue').parent().siblings().find('a').css('color','black')
	$(this).find('a').addClass('public').end().siblings().find('a').removeClass('public')
})
// 点击左按钮，换页

$('.left_btn').click(function(){
	
	//1.先判断当前num的值，再进行num的加减
	//2.若num小于零，则禁用左侧标签

	if (num <= 0) {
		$(this).addClass('disabled')
		//禁用input按钮
		.attr("disabled",true)	
	}
	//3.若num不小于零，则num--
	else {
		
	num--

	//4.首次点击左侧标签时就要清除右侧的禁用效果，而不是在判断num<0时再清除效果
	$('.right_btn').removeClass('disabled')
	$('.content ul').eq(num).addClass('active').siblings().removeClass('active')
	$('.huanye li').eq(num).find('a').addClass('public').end().siblings().find('a').removeClass('public')
	//5.增加tab切换栏变色
	$('.tab_nav li').eq(num).find('a').css('color','blue').parent().siblings().find('a').css('color','black')
	}
})

// 点击右按钮，换页
//6.同左侧修改
$('.right_btn').click(function(){
	
	if (num >= 4) {
		$(this).addClass('disabled')
		.attr('disabled',true)
		
	}
	else {
		num++
	$('.left_btn').removeClass('disabled')
	$('.content ul').eq(num).addClass('active').siblings().removeClass('active')
	$('.huanye li').eq(num).find('a').addClass('public').end().siblings().find('a').removeClass('public')
	$('.tab_nav li').eq(num).find('a').css('color','blue').parent().siblings().find('a').css('color','black')
}
	
})



// 中间列表展示区域
// 鼠标进入，显示另外盒子样式
// 鼠标进入事件
$('.content .normal').mouseenter(function(){
	$(this).css('display','none')
    $(this).siblings('.xianshi').css('display','block')
})
// 鼠标离开
$('.content .xianshi').mouseleave(function(){
    $(this).css('display','none').siblings().css('display','block')
})



// 回到顶部
var toTop = document.querySelector('.toTop');
	//滚动事件
	window.onscroll = function () {
		// 卷起的高度
		var val = document.documentElement.scrollTop || document.body.scrollTop;
		// console.log(val);
		//判断
		if (val > 600) {
			toTop.style.display = 'block';
		}else{
			toTop.style.display = 'none';
		}
	}

//点击回到顶部
$('.toTop').click(function(){
	$('html,body').animate({scrollTop:0},500)
})
