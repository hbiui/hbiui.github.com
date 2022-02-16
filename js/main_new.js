( function($) {

    var $navbtn = $(".nav-btn");

        //按钮动画效果
            $navbtn.on("click", function(){
                if(!$navbtn.hasClass("on")){
                    $navbtn.addClass("on");
                    $navbtn.removeClass("off");
                    $(".nav-list").css({
                        "display" : "block"
                    });
                    $(".nav-list").addClass("on");
                    $(".nav-list li").addClass("on");
                    $(".nav-list li").removeClass("off");
                    
                } else {
                    $navbtn.removeClass("on");
                    $navbtn.addClass("off");
                    $(".nav-list").removeClass("on");
                    $(".nav-list li").removeClass("on");
                    $(".nav-list li").addClass("off");
                    setTimeout(function(){
                        $(".nav-list").css({
                            "display" : "none"
                        })
                    },400)
                }
            });
    
    $(".banner-text").addClass("active");

    
    //导航背景切换
    var oTop = document.body.scrollTop || document.documentElement.scrollTop;
    var $toTopBtn = $(".to-top");
    function navChange(){
        
        if(oTop > 0){
            $(".nav").addClass("active");
            $(".nav-bg").addClass("active");
            $(".nav-list").addClass("active");
            $(".nav-logo").addClass("active");
            $(".icon_phone").addClass("active");
        } else {
            $(".nav").removeClass("active");
            $(".nav-bg").removeClass("active");
            $(".nav-list").removeClass("active");
            $(".nav-logo").removeClass("active");
            $(".icon_phone").removeClass("active");
        }
    }
    navChange();

    //点击回到顶部
    var timer = null;
    var isTop = true;
    function toTop(){
        window.onscroll = function(){
        if(!isTop){
            clearInterval( timer );
        }
        isTop = false;
        }

        $toTopBtn.on("click", function(){
            timer = setInterval(function(){
                var oTop = document.body.scrollTop || document.documentElement.scrollTop;
                var speed = Math.floor( -oTop / 6 );
                document.body.scrollTop = document.documentElement.scrollTop = oTop + speed;

                isTop = true;

                if(oTop == 0){
                    clearInterval(timer);
                }
            },20);
        });
    }
    toTop();

     
    //首页logo鼠标悬浮动画
    var width = $(window).width();//手机可视宽度
    $(window).resize(function(){
        logo_animation();
    });

    function logo_animation(){
        var logo = document.querySelectorAll(".logo_span");
        var li = document.querySelectorAll(".in-service-card li");
        for (var i = 0 ; i < logo.length ; i++ ) {
            (function(i){
                if ( width > 1024) {
                    if ( width > 1700 ){

                        li[i].time_logo = null;
                        li[i].onmouseover = function(){

                           clearInterval(li[i].time_logo);
                           li[i].time_logo = setInterval(function(){
                                var bg = parseInt(logo[i].style.backgroundPosition);
                                if (bg > -2900){
                                    logo[i].style.backgroundPosition = bg - 116 + "px";
                                } else {
                                    clearInterval(li[i].time_logo);
                                }
                            },30);
                        }
                        li[i].onmouseout = function(){
                            clearInterval(li[i].time_logo);
                            li[i].time_logo = setInterval(function(){
                                var bg = parseInt(logo[i].style.backgroundPosition);
                                if (bg < 0){
                                    logo[i].style.backgroundPosition = bg + 116 + "px";
                                } else {
                                    clearInterval(li[i].time_logo);
                                }
                            },30);
                        }
                    } else {
                        li[i].time_logo = null;
                        li[i].onmouseover = function(){
                            clearInterval(li[i].time_logo);
                            li[i].time_logo = setInterval(function(){
                                var bg = parseInt(logo[i].style.backgroundPosition);
                                if (bg > -2200){
                                    logo[i].style.backgroundPosition = bg - 88 + "px";
                                } else {
                                    clearInterval(li[i].time_logo);
                                }
                            },30);
                        }
                        li[i].onmouseout = function(){
                            clearInterval(li[i].time_logo);
                            li[i].time_logo = setInterval(function(){
                                var bg = parseInt(logo[i].style.backgroundPosition);
                                if (bg < 0){
                                    logo[i].style.backgroundPosition = bg + 88 + "px";
                                } else {
                                    clearInterval(li[i].time_logo);
                                }
                            },30);
                        }
                }
            } else {
                li[i].onclick = function(){
                    var $li_span = $(li[i]).find("span");
                    if(!$li_span.hasClass("on")){
                        $li_span.addClass("on");
                        setTimeout(function(){
                            $li_span.removeClass("on");
                        },2000);
                    }
                }            
            }
            })(i)
        }
    }
    logo_animation();

    function employee_animation(){
        var $employee = $(".employee-pic");
        if(width < 1024){
            $employee.each(function(element , index){
            var $employee_span = $(this).find("span").eq(0);
                $(this).on("click", function(){
                    if(!$employee_span.hasClass("on")){
                        $employee_span.addClass("on");
                        setTimeout(function(){
                            $employee_span.removeClass("on");
                        },2000)
                    }
                })
            })
        }
    }
    employee_animation();



    function toDown(){
        
        if(!isTop){
            clearInterval( timer );
        }
        isTop = false;


        $(".tel").on("click", function(){  
            if(width > 768){
                timer = setInterval(function(){
                    var oTop = document.body.scrollTop || document.documentElement.scrollTop;
                    var speed = Math.floor( oTop / 6 +10 );
                    document.body.scrollTop = document.documentElement.scrollTop = oTop + speed;

                    isTop = true;

                    if(document.documentElement.scrollHeight == document.documentElement.clientHeight + oTop  ||  document.body.scrollTop == document.documentElement.clientHeight + oTop){
                        clearInterval(timer);
                    }
                },20);
            }
        });
    }
    toDown();

    function momoux(){
        $('.banner-index').on('mousemove', function(e){

          var offset = $('.banner-index').offset();

          
          var x = e.pageX - offset.left;
          var y = e.pageY - offset.top;

          var centerX = $('.banner-index').width() /2;
          var centerY = $('.banner-index').height() /2;
          
          var deltaX = x - centerX;
          var deltaY = y - centerY;
          
          var percentX = -deltaX / 120;
          var percentY = -deltaY / 120;

          var percentX2 = -deltaX / 180;
          var percentY2 = -deltaY / 180;

          var deg = 10;
          

          $('.country').css({
            transform: 'translateX('+(-percentX2) +'px)'
          });

        })

        $('.banner-index').on('mouseleave', function(){

          $('.banner-momoux').css({
            transform: ''
          });

          $('.country').css({
            transform: ''
          });
        })
    }
    momoux();

    var $fyd2 = $(".fyd-2"),
        $fyd1 = $(".fyd-1"),
        $df  = $(".df"),
        $sy1  = $(".sy-1"),
        $sy2  = $(".sy-2"),
        $zszj1 = $(".zszj-1"),
        $zszj2 = $(".zszj-2"),
        $szw1 = $(".szw-1"),
        $szw2 = $(".szw-2"),
        $airx2 = $(".airx-2");
    function jet_leg(obj , top){
        if(width >760){
            $(window).scroll(function(){
                var oTop = document.body.scrollTop||document.documentElement.scrollTop;
                if(oTop > top){
                    obj.velocity({ backgroundPositionY: (oTop - top)/40 -40 }, {duration:0,easing: "liniar"});
                }
            })
        } else {
            return;
        }
    }

    function jet_leg_width(){

        width = $(window).width();

        if(width > 1700){
            //首页视觉差
            jet_leg($sy1,100);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            jet_leg($zszj1,2400);
            jet_leg($fyd1,3600);

            //案例页视觉差
            jet_leg($sy2,0);
            jet_leg($zszj2,1550);
            jet_leg($fyd2,1000);
            jet_leg($airx2,3200);
        }
         else {
            //首页视觉差
            jet_leg($sy1,100);
            jet_leg($zszj1,1700);
            jet_leg($fyd1,2200);

            //案例页视觉差
            jet_leg($sy2,0);
            jet_leg($zszj2,1000);
            jet_leg($fyd2,1800);
            jet_leg($airx2,1900);
        }
    }

    jet_leg_width();

    $(window).resize(function(){
        jet_leg_width();
    });


	/*banner文字滚动视觉差*/
	$(window).scroll(function(){
        
		var $banText = $(".banner-text");
            $banText2 = $(".banner-index-pic");
        var oTop = document.body.scrollTop||document.documentElement.scrollTop;
		$banText.velocity({ translateY:oTop/2 }, {duration:0,easing: "liniar"});
        $banText2.velocity({ translateY:oTop/2 }, {duration:0,easing: "liniar"});
        $(".banner-momoux").velocity({ bottom: -oTop/4 -10} , {duration:0,easing: "linear"});
        $(".country").velocity({ bottom: -oTop/5} , {duration:0,easing: "linear"});
        
        /*改变导航背景*/
        if(oTop > 0){
            $(".nav").addClass("active");
            $(".nav-bg").addClass("active");
            $(".nav-list").addClass("active");
            $(".nav-logo").addClass("active");
            $(".nav-btn").addClass("active");
            $(".icon_phone").addClass("active");
        } else {
            $(".nav").removeClass("active");
            $(".nav-bg").removeClass("active");
            $(".nav-list").removeClass("active");
            $(".nav-logo").removeClass("active");
            $(".nav-btn").removeClass("active");
            $(".icon_phone").removeClass("active");
        }
        
        /*回到顶部*/
        if(oTop > 930){
            $toTopBtn.css({
                "display" : "block",
                "opacity" : 0.5
            })
            $(".qq-line").css({
                "display" : "block",
                "opacity" : 0.5
            })
        } else {
            $toTopBtn.css({
                "opacity" : 0,
                "display" : "none"
            })
            
            $(".qq-line").css({
                "opacity" : 0,
                "display" : "none"
            })
        }
	});


    /*案例页面，筛选案例功能*/
    var $portBtn = $(".portfolio-nav li");
    var $part = $(".portfolio-part a");

    function select(){
        $portBtn.each(function(index){
            $(this).on("click",function(){
                $portBtn.removeClass("active");
                $(this).addClass("active");
                $part.css({
                    "display" : "inline-block"
                })
                $part.not("."+index).css({
                    "display" : "none"
                })
            });
        });
    }
    select();


    /*服务页面*/
    var $new = $(".news-content a");
    var $newUl = $(".news-content-wrap");
    var $newBtn = $(".news-dot span");
    var mainWidth = parseInt($(".main").css("width"));
    
    $newBtn.each(function(index){
        $(this).on("click", function(){
            $newBtn.removeClass("active");
            $(this).addClass("active");
            $newUl.css({
                "transform" : "translateX(-"+(index * mainWidth)+"px)"
            })
        });
    })


    

    /*服务页面,点击出现下拉板块*/
    var $dropTab = $(".drop-tab"),
        $cardWrap = $(".card-wrap");
    var num = 0;

    $dropTab.each(function(index , element){
        var count = index + 1;
        $(element).css({
            "background-image" : "url(image/service/drop_tab_bg"+count+".png)"
        })
    });    

    $cardWrap.each(function(){
    	$(this).on("click", function(){

            if(width > 768){
                var $cardDown = $(this).siblings(".card-dropDown");
                var $cardDownCont = $(this).siblings(".card-dropDown").find(".dropDown-content");

                if (!$cardDown.hasClass("active")){
                    $(this).find("span").addClass("active");
                    var DownHeight = parseInt($cardDownCont.height()) + parseInt($cardDownCont.css("padding-bottom"));

                    $cardDown.animate({
                        "height" : DownHeight 
                    } , {
                        duration : 300,
                        easing : 'easeInOutQuad', 
                        complete : function(){
                            $cardDown.addClass("active");                        
                        }
                    });


                } else {
                    $(this).find("span").removeClass("active");
                    
                    $cardDown.animate({
                        "height" : "0",
                    } , {
                        duration : 400,
                        easing : 'easeInOutQuad',              
                        complete : function(){
                            $cardDown.removeClass("active");
                        }              });
                }
            } else{
                return;
            }
    	});
    })



    // /*我们页面,鼠标悬浮切换图片*/
    // var img = [
    //         "image/about/yw_hover.png",
    //         "image/about/bj_hover.png",
    //         "image/about/az_hover.png",
    //         "image/about/jg_hover.png",
    //         "image/about/dx_hover.png",
    //         "image/about/xh_hover.png",
    //         "image/about/sr_hover.png",
    //         "image/about/jl_hover.png",
    //         "image/about/hm_hover.png",
    //         "image/about/pf_hover.png",
    //         "image/about/qs_hover.png",
    //         "image/about/xyw_hover.png",
    //         "image/about/yh_hover.png",
    //         "image/about/hh_hover.png",
    //         "image/about/yx_hover.png",
    //         "image/about/ly_hover.png",
    //         "image/about/kl_hover.png",
    //         "image/about/my_hover.png",
    //         "image/about/xx_hover.png",
    //         "image/about/cc_hover.png",
    //         "image/about/cy_hover.png",
    //         "image/about/wrm_hover.png",
    //         "image/about/zk_hover.png",
    //         "image/about/df_hover.png",
    //         "image/about/xm_hover.png",
    //         "image/about/lvmoer_hover.png",
    //         "image/about/gd_hover.png",
    //         "image/about/xn_hover.png",
    //         "image/about/cm_hover.png",
    //         "image/about/zj_hover.png",
    //         "image/about/cj_hover.png",
    //         "image/about/yl_hover.png",
    //         "image/about/wq_hover.png",
    //         "image/about/xf_hover.png",
    //         "image/about/xk_hover.png",
    //         "image/about/hsd_hover.png",
    //         "image/about/lm_hover.png",
    //         "image/about/zf_hover.png",
    //         "image/about/ml_hover.png",
    //         "image/about/lance_hover@2x.png"
    // ]
    
    // var imgLg = [
    //         "image/about/yw_hover@2x.png",
    //         "image/about/bj_hover@2x.png",
    //         "image/about/az_hover@2x.png",
    //         "image/about/jg_hover@2x.png",
    //         "image/about/dx_hover@2x.png",
    //         "image/about/xh_hover@2x.png",
    //         "image/about/sr_hover@2x.png",
    //         "image/about/jl_hover@2x.png",
    //         "image/about/hm_hover@2x.png",
    //         "image/about/pf_hover@2x.png",
    //         "image/about/qs_hover@2x.png",
    //         "image/about/xyw_hover@2x.png",
    //         "image/about/yh_hover@2x.png",
    //         "image/about/hh_hover@2x.png",
    //         "image/about/yx_hover@2x.png",
    //         "image/about/ly_hover@2x.png",
    //         "image/about/kl_hover@2x.png",
    //         "image/about/my_hover@2x.png",
    //         "image/about/xx_hover@2x.png",
    //         "image/about/cc_hover@2x.png",
    //         "image/about/cy_hover@2x.png",
    //         "image/about/wrm_hover@2x.png",
    //         "image/about/zk_hover@2x.png",
    //         "image/about/df_hover@2x.png",
    //         "image/about/xm_hover@2x.png",
    //         "image/about/lvmoer_hover@2x.png",
    //         "image/about/gd_hover@2x.png",
    //         "image/about/xn_hover@2x.png",
    //         "image/about/cm_hover@2x.png",
    //         "image/about/zj_hover@2x.png",
    //         "image/about/cj_hover@2x.png",
    //         "image/about/yl_hover@2x.png",
    //         "image/about/wq_hover@2x.png",
    //         "image/about/xf_hover@2x.png",
    //         "image/about/xk_hover@2x.png",
    //         "image/about/hsd_hover@2x.png",
    //         "image/about/lm_hover@2x.png",
    //         "image/about/zf_hover@2x.png",
    //         "image/about/ml_hover@2x.png",
    //         "image/about/lance_hover@2x.png"

    // ];

    // var $employee = $(".employee-pic");
    // $employee.each(function(index){
    //     $(this).on("mouseover",function(){
    //         $(this).find("span").eq(0).css({
    //             "background" : "url("+img[index]+")",
    //             "background-image" : "-webkit-image-set(url("+img[index]+") 1x,url("+imgLg[index]+") 2x)",
    //             "background-size" : "cover"
    //         })
    //     });
    // })

    /*我们页面招募,点击按钮控制内容出现与消失*/
    var $recruitmentBtn = $(".recruitment-btn");
    $(".recruitment-word").css({
        "height" : 0
    })

    $(".recruitment-title").each(function(){
        $(this).on("click", function(){
            $recruitmentCont_me = $(this).siblings();

            if(!$(this).hasClass("active")){
                $recruitmentCont_me.css({
                    "display" : "block"
                });
                $(this).addClass("active");
                $(this).find(".recruitment-btn").addClass("active");
                
                var $recruitmentP = $recruitmentCont_me.find("p");
                var recruitmentHight1 = parseInt($recruitmentP.eq(0).height()) + parseInt($recruitmentP.eq(0).css("margin-bottom"));
                var recruitmentHight2 = parseInt($recruitmentP.eq(1).height()) + parseInt($recruitmentP.eq(1).css("margin-bottom"));
                var recruitmentHight3 = parseInt($recruitmentP.eq(2).height()) + parseInt($recruitmentP.eq(2).css("margin-bottom"));
                var recruitmentHight = recruitmentHight1 + recruitmentHight2 + recruitmentHight3;

                $recruitmentCont_me.animate({
                    "height" : recruitmentHight
                } , {
                    duration : 500,
                    easing : 'easeInOutQuad'
                });

            } else {
                $(this).removeClass("active");
                $(this).find(".recruitment-btn").removeClass("active");

                $recruitmentCont_me.animate({
                    "height" : "0",
                } , {
                    duration : 500,
                    easing : 'easeInOutQuad',
                    complete : function(){
                        $recruitmentCont_me.css({
                            "display" : "none"
                        });
                    }      
                });

            }
        });
    })

    //我们页面图片轮播
    // $pic = $(".banner-pic-about li");
    // var count = 0;
    // setInterval(function(){
    //     if(count < 4){
    //         $pic.animate({
    //             "opacity" : 0
    //         } ,{
    //             duration : 100,
    //             easeing : "easeOutCubic"
    //         });
    //         $pic.eq(count).animate({
    //             "opacity" : 1
    //         } ,{
    //             duration : 100,
    //             easeing : "easeOutCubic"
    //         });
    //         count++;
    //     } else {
    //         count = 0;
    //     }
    // },6000);


    
    //给微信四个小图标加上背景适配
    $(".footer-logo li").css({
        "background-size" : "cover"
    })



    //点击微信图标，出现二维码
    var $vx1 = $(".footer-logo li").eq(0);
    function vx_pop_up(){
        $(".footer").after('<div class="vx-tips"><div class="vx-mask"></div><div class="vx-information"><span></span><P>扫描二维码</br>关注MOMOUX微信公众号</p><span>确定</span></div</div>');
        var winHeight = $(window).height();
        $(".vx-information").css({
            "top" : (winHeight - 532) / 2 + 100 +  "px"
        });

        $(".vx-information").animate({
            "top" : (winHeight - 532) / 2 +  "px",
            "opacity" : 1
        },{
            duration : 500
        });
        
        $(".vx-mask").on("click" , function(){
            $(".vx-information").animate({
                "top" : (winHeight - 532) / 2 + 100 +  "px",
                "opacity" : 0
            },{
                duration : 200,
                complete : function(){
                    $(".vx-tips").remove();
                }
            });
            $(".vx-mask").addClass("active");
        });

        $(".vx-information span:nth-child(3)").on("click", function(){
            $(".vx-information").animate({
                "top" : (winHeight - 532) / 2 + 100 +  "px",
                "opacity" : 0
            },{
                duration : 200,
                complete : function(){
                    $(".vx-tips").remove();
                }
            });
            $(".vx-mask").addClass("active");
        });
    }

    $vx1.on("click", function(){
        vx_pop_up();
    })

    $(".tel-fa").hover(function(){
                $(".tel-fa").addClass("active");
                $(".Tel_add").addClass("active");
                $(".icon_phone").addClass("active");
               
            },function(){
                $(".tel-fa").removeClass("active");
                $(".Tel_add").removeClass("active");
                if($(".icon_phone").hasClass("active") && !$(".nav-list").hasClass("active")){
                    $(".icon_phone").removeClass("active");
                } else {
                    return;
                }
            });

}(jQuery));

























