$(document).ready(function(){
  

    $('#gnb_left>li').on('mouseenter', function(){
        $(this).children('a').addClass('on');
        $(this).children('ul').addClass('on');
        $('#gnb_left>li>ul.on').stop().slideDown();
      
    });
    $('#gnb_left>li').on('mouseleave', function(){
        $(this).children('a').removeClass('on');
        $(this).children('ul').removeClass('on');
        $('#gnb_left>li>ul').slideUp();
       
    });

    $('#gnb_right>li').on('mouseenter', function(){
        $(this).children('a').addClass('on');
        $(this).children('ul').addClass('on');
        $('#gnb_right>li>ul.on').stop().slideDown();
      
    });
    $('#gnb_right>li').on('mouseleave', function(){
        $(this).children('a').removeClass('on');
        $(this).children('ul').removeClass('on');
        $('#gnb_right>li>ul').slideUp();
       
    });

    var speed = 500;
    var $btn = $('.btn1');
    var $top = $('.top');
    var $right = $('.right');
    var $bottom = $('.bottom');
    var $left = $('.left');
    var $content=$('.content');
    var $close1 = $('.close1')

        $btn.on('click', function(e){
            e.preventDefault();
            // 이벤트 발생 함수 
            $top.animate({'width':'100%'}, speed ,function(){
                $right.animate({'height':'100%'},speed , function(){
                    $bottom.animate({'width':'100%'},speed ,  function(){
                        $left.animate({'height':'100%'},speed , function(){
                            $content.fadeIn(2000);
                        });
                    })
                })
            });

        });
        $close1.on('click', function(e){
            e.preventDefault();
            $content.fadeOut(1000, function(){
                $top.animate({'width':'0%'}, speed);
                $right.animate({'height':'0%'}, speed);
                $bottom.animate({'width':'0%'}, speed);
                $left.animate({'height':'0%'}, speed);
            });
            


        });
    

})