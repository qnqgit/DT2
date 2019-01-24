

// 鼠标点击邮箱注册更换背景色 手机号改为邮箱号
$('.e-mail').click(function(){
    $(this).addClass('jian')
    $('.phone').removeClass('jian')
    $(this).css('background','#4c5f71')
    $('.zc_phone').removeClass('active')
    //  框的样式恢复默认
    $('.one').css('border','').find('input').attr('placeholder','邮箱账号')
    $('.ipt').css('border','')
    $('.ipt input').val('')
    $('.ipt span').css('display','none').eq(1).html('<img src="../images/imgzhuce/rico_error.png"> 邮箱账号格式错误')    
    //  验证码样式
    $('.ipt_btn').css('border','').find('input[type=text]').css('border','').val('')
})

// 鼠标点击手机注册 恢复
$('.phone').click(function(){
    $(this).addClass('jian')
    $('.e-mail').removeClass('jian')
    $('.e-mail').css('background','#2f3a45')
    $('.ipt_btn').css('border','').find('input[type=text]').css('border','').val('')
    $('.zc_phone').addClass('active')
    $('.ipt span').css('display','none')
    $('.ipt').css('border','').find('input').val('')
    $('.one input')
    .attr('placeholder','手机号码')
    .next()
    .next()
    .html('<img src="../images/imgzhuce/rico_error.png"> 手机号码格式错误')
})

// 1框
var one = document.querySelector('.ipts .one input')
var x1 = document.querySelector('.ipts .one .wrong')
var tishi1 = document.querySelector('.ipts .one .tishi')
// 2框
var two = document.querySelector('.two input')
var x2 = document.querySelector('.two .hide')
var tishi2 = document.querySelector('.two .tishi')
var mima = document.querySelectorAll('.mima span')
var ruo = document.querySelector('.ruo')
var zhong = document.querySelector('.zhong')
var gao = document.querySelector('.gao')
// 3框
var three = document.querySelector('.three input')
var x3 = document.querySelector('.three .hide')
var tishi3 = document.querySelector('.three .tishi')
//  4框
var four = document.querySelector('.four input')
var x4 = document.querySelector('.four .wrong')
var tishi4 = document.querySelector('.four .tishi')
//  5框
var five = document.querySelector('.five input')
var x5 = document.querySelector('.five .wrong')
var tishi5 = document.querySelector('.five .tishi')
//  验证码框
var txt = document.querySelector('.ipt_btn .txt')
var check = document.querySelector('.protocol input')
var zhuce = document.querySelector('.enroll .btn')

var i = 1;
// 【第一个框】

$('.one').click(function(){
    $(this).css('border','#fff solid 1px')
    one.oninput = function(){
        var len = this.value.length
        this.parentNode.style.border='rgb(209, 50, 50) solid 1px';
        x1.style.display='block';
        tishi1.style.display='block'
        if(Number(len) == 11){
            this.parentNode.style.border=''
            tishi1.style.display=''
            i = i

            check.onclick = function(){
                var flag = check.checked
                zhuce.disabled=!flag
                if(flag == false){
                    zhuce.style.background='#ccc'
                }else{
                    zhuce.style.background='rgb(209, 50, 50)'
                }
            }
        }
        if(isNaN(this.value)) {
            this.parentNode.style.border='rgb(209, 50, 50) solid 1px';
            x1.style.display='block';
            tishi1.style.display='block'
            return i+1;

        }
        
        return Number(len);
    }        
})

//  【第二个框】
var len2
$('.two').click(function(){
    $(this).css('border','#fff solid 1px')
    two.oninput = function(){
        this.parentNode.style.border='rgb(209, 50, 50) solid 1px';
        tishi2.style.display='block'
        len2 = this.value.length
        for(var i=0; i<mima.length; i++){
            if(Number(len2) == 0){
                // mima[i].style.display='block'
                ruo.style.background=''
                zhong.style.background=''
                gao.style.background=''   
                this.parentNode.style.border='rgb(209, 50, 50) solid 1px';  
                tishi2.style.display='block'   
                tishi2.innerHTML='<img src="../images/imgzhuce/rico_error.png">密码设置不能为空'                        
            }          
       
            if(Number(len2) <= 5){
                mima[i].style.display='block'
                ruo.style.background='red'
                x2.style.display='block';
                zhong.style.background=''
            }
            if(Number(len2)>5 && Number(len2)<=7){
                mima[i].style.display='block'
                ruo.style.background=''
                zhong.style.background='orange'
                gao.style.background=''
                tishi2.style.display=''
                this.parentNode.style.border='#fff solid 1px';
            }
            if(Number(len2)>7 && Number(len2)<=9){
                mima[i].style.display='block'
                zhong.style.background=''
                gao.style.background='green'
                this.parentNode.style.border='';
                tishi2.style.display=''
            }
            
        }
    }
       
})
//  【第三个框】
var len3
$('.three').click(function(){
    for(var i=0; i<mima.length; i++){
        mima[i].style.display=''
    }
    $(this).css('border','#fff solid 1px')
    three.oninput = function(){
        len3 = this.value.length   
        x3.style.display='block';
        if(len2==len3){           
            this.parentNode.style.border='';
            tishi3.style.display=''
        }else{
            this.parentNode.style.border='rgb(209, 50, 50) solid 1px';
            tishi3.style.display='block'
        }
    }
})
//  【第四个框】
$('.four').click(function(){
    $(this).css('border','#fff solid 1px')
    four.oninput = function(){
        var val4 = this.value
        if(isNaN(val4)){
            x4.style.display='block';
            tishi4.style.display=''
            this.parentNode.style.border=''
        }else{
            x4.style.display='block';
            this.parentNode.style.border='rgb(209, 50, 50) solid 1px';
            tishi4.style.display='block';
        }
    }
})
//  【第五个框】
$('.five').click(function(){
    $(this).css('border','#fff solid 1px')
    five.oninput = function(){
        var val5 = this.value
        var len5 = this.value.length
        if(isNaN(val5)){
            x5.style.display='block';
            this.parentNode.style.border='rgb(209, 50, 50) solid 1px';
            tishi5.style.display='block';
        }else if(len5 == 0){
            tishi5.style.display='block'
            this.parentNode.style.border='rgb(209, 50, 50) solid 1px'
        }else{
            x5.style.display='block';            
            tishi5.style.display=''
            this.parentNode.style.border='';
        }
    }
})
//  【第六个框】
txt.onclick=function(){
    this.style.border='rgb(209, 50, 50) solid 1px';
}
$('input[type=button]').click(function () {
    $('input[type=button]').prop('disabled', true);
    $('input[type=button]').css('background','#4c5f71')
    $(this).prev().css('border','#fff solid 1px')
    var num = 6;
    $('input[type=button]').val(num + '秒后重新发送');
    var timer = setInterval(function () {
      num--;
      $('input[type=button]').val(num + '秒后重新发送');
      if(num==0) {
        clearInterval(timer);
        $('input[type=button]').prop('disabled', false);
        $('input[type=button]').css('background','#2f3a45')
        $('input[type=button]').val('获取验证码');
        $('.txt').css('border','')
      }
    },1000);
  });

  //   添加的手机号部分
  $('.zc_phone').click(function(){
    $(this).css('border','#fff solid 1px')
    $(this).find('input').on('input', function () {
        var len = this.value.length
        this.parentNode.style.border='rgb(209, 50, 50) solid 1px';
        $(this).nextAll().css('display', 'block')
        if(Number(len) == 11){
            // this.parentNode.style.border=''
            $(this).parent().css('border','')
            $(this).next().next().css('display', '')
        }  
    })
})
//  确认协议进行注册 不确认不行

// check.onclick = function(){
//     var flag = check.checked
//     zhuce.disabled=!flag
//     if(flag == false){
//         zhuce.style.background='#ccc'
//     }else{
//         zhuce.style.background='rgb(209, 50, 50)'
//     }
// }
