$(document).ready(function () {
    var count = 0;

    $('a.lightbox').colorbox({transition:"fade"});
    if(count==0){
        $('.prev').css('opacity','0');
    }

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


    $(window).scroll(function () {
        var scrollOne = $(window).scrollTop();
        var scrollTwo = $(window).scrollTop();
        console.log('one : ' + scrollOne + '// two : ' + scrollTwo);
    })

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
            right:-600 +'px'
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
        $('.gnb li').filter(':nth-child('+idxplus+')').click(function(){
            $('html,body').animate({
                scrollTop:idxplus*profileOffset
            },500)
        })
    })
    $('.menu ul li').each(function(idx){
        var idxplus = idx+1;
        $('.menu ul li').filter(':nth-child('+idxplus+')').click(function(){
            $('html,body').animate({
                scrollTop:idx*profileOffset
            },500)
        })
    })
});