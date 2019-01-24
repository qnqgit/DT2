

$(window).scroll(function () {

    var juli = $(window).scrollTop();

    if (juli >= 600) {

        $('.fanhui').css('display', 'block');

    } else {
        $('.fanhui').css('display', 'none');
    }

})
$('.fanhui').click(function () {

    $('html,body').animate({scrollTop:0},500);

})
$('.zhongbu').eq(0).css('display','block').siblings('.zhongbu').css('display','none');

var index ;

$('.fudaohang li').mouseenter(function(){

     index = $(this).index();

    $('.zhongbu').eq(index).css('display','block').siblings('.zhongbu').css('display','none');


})

$('.yeshu li').click(function(){

    var num = $(this).index();

        num = num - 1 ;

    $('.zhongbu').eq(num).css('display','block').siblings('.zhongbu').css('display','none');

})

$('.blue .le').css('display','block');

$('.blue .ri').mouseenter(function(){


    $('.blue .le').css('display','block');
    
    $('.blue .ri').text('<');



});

$('.blue').mouseleave(function(){


    $('.blue .le').css('display','none');

    $('.blue .ri').text('>');



})
