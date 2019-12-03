$(document).ready(function(){

    $(window).scroll(function(){
        if($(window).scrollTop()>0){
            $('header').addClass('sticky');
        }else{
            $('header').removeClass('sticky');
        }
    })
    var profileOffset =$('.profile').offset().top;
    var profileThre = profileOffset - 300;
    var portOffset =$('.portfolio').offset().top;
    var portThre = profileOffset - 300;
    
    
    $(window).scroll(function(){
        var scrollOne = $(window).scrollTop();
        var scrollTwo = $(window).scrollTop();
        console.log('one : '+scrollOne+'// two : '+scrollTwo);
    })
    
    $('.skill_value li').each(function(idx){
        var indexPlus = idx+1;
        var skillValue= $('.skill_value li').filter(':nth-child('+indexPlus+')').find('span').attr('data-value');
        $(window).scroll(function(){
            if($(window).scrollTop()>profileThre){
                $('.skill_value li').filter(':nth-child('+indexPlus+')').find('span').animate({
                    width:skillValue+'px'
                },1000,function(){
                    $('.skill_value li').filter(':nth-child('+indexPlus+')').find('p').css('opacity','1');
                });
            }
        })
        
    });

    $('.colors ul li').each(function(idx){
        var indexPlus = idx+1;
        $('.colors ul li').filter(':nth-child('+indexPlus+')').hover(function(){
            $(this).find('span').stop().fadeIn();
        },function(){
            $(this).find('span').stop().fadeOut();
        });
    });
});