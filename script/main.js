$(document).ready(function () {
    var count = 1;

    $('a.lightbox').colorbox({transition:"fade"});
    if(count==1){
        $('.prev').css('display','none');
    }

    $('.next').click(function(e){
        e.preventDefault();
        count++;
        if(count>1){
            $('.prev').css('display','block'); 
        }
        if(count==3){
            $('.next').css('display','none');
        }else{
            $('.next').css('display','block');
        }
        $('.preview_img > li').filter(':nth-child('+count+')').show().siblings().hide();
        $('.preview_detail_wrap > li').filter(':nth-child('+count+')').show().siblings().hide();
    })
    $('.prev').click(function(e){
        e.preventDefault();
        count--;
        if(count==1){
            $('.prev').css('display','none');
            $('.next').css('display','block');
        }
        $('.preview_img > li').filter(':nth-child('+count+')').show().siblings().hide();
        $('.preview_detail_wrap > li').filter(':nth-child('+count+')').show().siblings().hide();
    })




    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    })
    var profileOffset = $('.profile').offset().top;
    var profileThre = profileOffset - 300;
    var portOffset = $('.portfolio').offset().top;
    var portThre = profileOffset - 300;

    $('.skill_value li').each(function (idx) {
        var indexPlus = idx + 1;
        var skillValue = $('.skill_value li').filter(':nth-child(' + indexPlus + ')').find('span').attr('data-value');
        $(window).scroll(function () {
            if ($(window).scrollTop() > profileThre) {
                $('.skill_value li').filter(':nth-child(' + indexPlus + ')').find('span').animate({
                    width: skillValue + 'px'
                }, 1000, function () {
                    $('.skill_value li').filter(':nth-child(' + indexPlus + ')').find('p').css('opacity', '1');
                });
            }
        })

    });

    $('.colors ul li').each(function (idx) {
        var indexPlus = idx + 1;
        $('.colors ul li').filter(':nth-child(' + indexPlus + ')').hover(function () {
            $(this).find('span').stop().fadeIn();
        }, function () {
            $(this).find('span').stop().fadeOut();
        });
    });

    $('.menu_btn').click(function(e){
        e.preventDefault();
        $('.menu').animate({
            right:0 +'px'
        },400)
    })
    $('.close_btn').click(function(e){
        e.preventDefault();
        $('.menu').animate({
            right:-600 +'4px'
        },400)
    })

    $('.introduce button').click(function(){
        $('html,body').animate({
            scrollTop:profileOffset
        },500)
    })
    $('.logo').click(function(){
        $('html,body').animate({
            scrollTop:0
        },500)
    })

    $('.gnb li').each(function(idx){
        var idxplus = idx+1;
        $(this).filter(':nth-child('+idxplus+')').click(function(){
            $('html,body').animate({
                scrollTop:idxplus*profileOffset
            },500)
        })
    })
    $('.menu ul li').each(function(idx){
        var idxplus = idx+1;
        $(this).filter(':nth-child('+idxplus+')').click(function(){
            $('html,body').animate({
                scrollTop:idx*profileOffset
            },500)
        })
    })



    $('.select li').each(function(idx){
        var idxplus = idx+1;
        $(this).filter(':nth-child('+idxplus+')').click(function(e){
            e.preventDefault();
            $(this).addClass('select_port').siblings().removeClass('select_port');
            console.log(idxplus);
            $('.images li img').attr('src','images/port_img'+idxplus+'_2.png');
            for(var i=1;i<4;i++){
                $('.images_view li').filter(':nth-child('+i+')').find('a img').attr('src','images/prew'+idxplus+'_'+i+'.png');
                $('.images_view li').filter(':nth-child('+i+')').find('a').attr('href','images/port_prew'+idxplus+'_'+i+'.png');
            }
            
            $('.detail_wrap > li').filter(':nth-child('+idxplus+')').css('display','block').siblings().css('display','none');
            if(idxplus==1){
                $('.images').css({
                    left:75 +'px',
                    top:0+'px'
                })
            }else{
                console.log('왜 안됨');
                $('.images').css({
                    left:25 +'px',
                    top:141+'px'
                })
            }
        });
    })
});