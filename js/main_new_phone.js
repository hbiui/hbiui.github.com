
     

( function($) {

    var $navbtn = $(".nav-btn");

    
    
    function all(){
        
        var width = $(window).width();//检测屏幕
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';



       

        var four = ["fyd" , "zszj" , "df" , "sy"];
        var addvideo = ["md" , "sg" , "tx", "kjl" , "ranababy" , "laia"];
        var $mlab = $(".nav-list").find("li").eq(3).find("a");
        var $model = $(".model-content span:first-child");
        var $leader = $(".leader span");
        var $logo = $(".in-service-card li span");
        var $p = $("card-content p");
        var $contact1 = $(".contact-call").find("dd").eq(0);
        var $contact2 = $(".contact-call").find("dd").eq(1);

        var addTel = '<div class="Tel_fill"></div><div class="Tel_add"><dl><dt><p>联系</p><span></span></dt><dd><img src="img/tel_add1.png"><p>132 9759 7812 黄健</p></dd><dd><img src="img/tel_add2.png"><p>1653665023@qq.com</p></dd></dl>'

        if( width <= 768 ){

                if( width <= 320 || width > 414){
                    $(".copyright p").html('Copyright© 2007 - 2018 <a href="#" target="_blank" >JOJOUI</a> 版权所有<a href="#" target="_blank" >粤ICP备17013291号</a>');
                } else {
                    $(".copyright p").html('Copyright© 2007 - 2018 <a href="#" target="_blank" >JOJOUI</a>版权<br/>所有<a href="#" target="_blank" >粤ICP备17013291号</a>');
                }

                //手机端导航增加电话
                

                //控制文本换行
               
                $(".tel-fa").html('<a class="tel" mce_href="tel://13297597812"><div class="icon_phone">个人电话</div>13297597812</a>');


                $contact1.html('<img src="../img/icon_phone30.png"><a  mce_href="tel://13297597812" >132 9759 7812 黄健</a>');
                $contact2.html('<img src="../img/icon_phone30.png"><a mce_href="tel://13297597812">13297597812</a>');


                $(addvideo).each(function(index,element){
                    $("."+ element).html('');
                });


                

                // 删除第三个案例
                $(".in-analysis-content a").eq(2).css({
                    "display" : "none"
                });

                // 删除新闻3个以上案例
                $(".news-content a").each(function(index,element){
                    if(index > 1){
                         $(element).css({
                            "display" : "none"
                         });
                    }
                });


                $model.each(function(index,element){
                    $(element).css({
                        "background" : "url("+img_phone[index]+")",
                        "background-image" : "-webkit-image-set(url("+imgl_phone[index]+") 1x,url("+imgl_phone[index]+") 2x)",
                        "background-size" : "cover"
                    })
                });

                $(".nav-list ").css({
                    "display" : "none"
                });




            } else {

                
                $(".nav-list ").css({
                    "display" : "block"
                });


                
                


                $(".banner-video").html('');

                $(".tel-fa").html('<a class="tel" mce_href="tel://13297597812"><div class="icon_phone"></div>13297597812</a>'+addTel);

                $contact1.html('<img src="jpg"><a >132 9759 7812 黄健 </a>');
                $contact2.html('<img src="jpg"><a >132 9759 7812</a>');

                $(addvideo).each(function(index,element){
                    $("."+ element).html('<video loop autoplay muted><source src="img.JOJOUI.com/portfolio/'+element+'_video.mp4" type="video/mp4"></video>');
                });

                
                $model.each(function(index,element){
                    $(element).css({
                        "background" : "url("+img[index]+")",
                        "background-image" :"-webkit-image-set(url("+imgl[index]+") 1x,url("+imgl[index]+") 2x)",
                        "background-size" : "cover"
                    })
                });

                // 删除第三个案例
                $(".in-analysis-content a").eq(2).css({
                    "display" : "inline-block"
                });

                // 删除新闻3个以上案例
                $(".news-content a").each(function(index,element){
                    if(index > 1){
                         $(element).css({
                            "display" : "block"
                         });
                    }
                });
            }

            
            
            

            window.onload = function(){
                if( width <= 768 ){
                    $(".tel-fa").html('<a class="tel" mce_href="tel://13297597812" ><div class="icon_phone">电话</div>13297597812</a>');
                } else {
                    $(".tel-fa").html('<a class="tel" mce_href="tel://13297597812" ><div class="icon_phone"></div>13297597812</a>'+addTel);
                }

                $(addvideo).each(function(index,element){
                    $("."+ element).html('<video loop autoplay muted><source src="img.JOJOUI.com/portfolio/'+element+'_video.mp4" type="video/mp4"></video>');
                });

            }


        
    }

    all();

    $(window).resize(function(){
        all();

        var width = $(window).width();//检测屏幕

        window.onload = function(){
                if( width <= 768 ){
                    $(".tel-fa").html('<a class="tel" mce_href="tel://13297597812" "><div class="icon_phone">电话</div>13297597812</a>');
                } else {
                    $(".tel-fa").html('<a class="tel" mce_href="tel://13297597812" "><div class="icon_phone"></div>13297597812</a>'+addTel);
                }
            }

    });

    
}(jQuery));






