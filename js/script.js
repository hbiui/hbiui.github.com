
$(function(){
        $(window).on('scroll', function(){
            if($(window).scrollTop() > 100){
                $('header').removeClass('lg').addClass('sm');
            } else {
                $('header').removeClass('sm').addClass('lg');
            }
        });//主菜单的动效

        $('.to-top').toTop();//回到顶部

        $('.view-content').addClass('clearfix');//清除内容与页码出现的浮动不正常 

    });

new WOW().init(); //源自wow.min.js动画效果

$('#nav').onePageNav(); //源自jquery.nav.js菜单点击导航

var slider = new IdealImageSlider.Slider('#slider1');
    slider.start();  //ideal-image-slider.min.js幻灯片特效

var slider = new IdealImageSlider.Slider('#slider2');
    slider.start();  //ideal-image-slider.min.js幻灯片特效