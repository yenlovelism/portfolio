$(function(){
    
    var swiper = new Swiper('.main_slider .swiper-container', {
      pagination: {
        el: '.main_slider .swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.main_slider .swiper-button-next',
        prevEl: '.main_slider .swiper-button-prev',
      },
    });   
    
    
    var n=0;
	var t=0;
	var pos=0;
	var timer=0;

	$(window).scroll(function(){
		clearTimeout(timer);

		timer=setTimeout(function(){
			t=$(window).scrollTop();
    
            

			if(t < $(".page1").offset().top){
				n=0;
			}
			else if(t < $(".page2").offset().top){
				n=1;
			}
			else if(t < $(".page3").offset().top){
				n=2;
			}
			else if(t < $(".page4").offset().top){
				n=3;
			}
			else if(t < $(".page5").offset().top){
				n=4;

				if($(document).height() <= Math.round($(window).height()+t)){
					n=5;
				}
			}
			else{
				n=5;
			}
			 //console.log("n : "+n);

            
                        
            if(t > 90){
                $("#header .top").addClass("fixed").animate({top:0}, 300); //<div class="top" style="top:0px>
            }
            else{
                $("#header .top").removeAttr("style").removeClass("fixed");
            }
            
            
			if(n == 0){
                    $(".main_slider").addClass("active");
			}
            else {
					$(".page"+n).addClass("active");
            }

			$("#gnb li").removeClass("on");
			$("#gnb li").eq(n).addClass("on");
            $(".controller li").removeClass("on");
			$(".controller li").eq(n).addClass("on");
		}, 100);
	});
	$(window).trigger("scroll");
    
    
    $(".controller li").click(function(e){
		e.preventDefault();
		n=$(this).index();
        //console.log(pos);
        //console.log(n);

        $("#gnb li").removeClass("on");
        $("#gnb li").eq(n).addClass("on");
        $(".controller li").removeClass("on");
        $(".controller li").eq(n).addClass("on");        
        
		if(n == 0){
            pos=$(".main_slider").offset().top;
		}
        else {
			pos=$(".page"+n).offset().top+20;
		}
    
        
		$("html").animate({scrollTop:pos}, 800);
	});
    $("#gnb li").click(function(e){
		e.preventDefault();
		n=$(this).index();
        //console.log(pos);
        //console.log(n);

        $("#gnb li").removeClass("on");
        $("#gnb li").eq(n).addClass("on");
        $(".controller li").removeClass("on");
        $(".controller li").eq(n).addClass("on");        
        
		if(n == 0){
            pos=$(".main_slider").offset().top;
		}
        else {
			pos=$(".page"+n).offset().top+20;
		}
    
        
		$("html").animate({scrollTop:pos}, 800);
	});
    $("#mobile > ul > li").click(function(e){
        e.preventDefault();
        n=$(this).index();
        
        if(n == 0){
            pos=$(".main_slider").offset().top;
		}
        else {
			pos=$(".page"+n).offset().top+20;
		}
        
        $("html").animate({scrollTop:pos}, 800, function(){
            $("body").removeClass("fixed");             $("#mobile").removeClass("show");
            $(".dim").removeClass("show");
                          
        });
    });
    $(".tab").click(function(e){
        e.preventDefault();
        $("#mobile").addClass("show");
        $(".dim").addClass("show");
        $("body").addClass("fixed");
    });
    $(".dim").click(function(){
        $("#mobile").removeClass("show");
        $(".dim").removeClass("show");
        $("body").removeClass("fixed");
    });
    $(".close").click(function(e){
        e.preventDefault();
        $("#mobile").removeClass("show");
        $(".dim").removeClass("show");
        $("body").removeClass("fixed");
    });    
});
