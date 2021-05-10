$(function(){
    
    
    /*scroll*/
    var n=0;    
    var t=0;
    var pos=0;
    var timer=0;

    $(window).scroll(function(){
        clearTimeout(timer);
        
        timer=setTimeout(function(){
            t=$(window).scrollTop();
            

			if(t <= $("#page1").offset().top){
				n=0;
			}
			else if(t <= $("#page2").offset().top){
				n=1;
			}
			else if(t <= $("#page3").offset().top){
				n=2;
			}
			else if(t <= $("#page4").offset().top){
				n=3;
			}
			else if(t <= $("#page5").offset().top){
				n=4;

				if($(document).height() <= Math.round($(window).height()+t)){
					n=5;
				}
			}
			else{
				n=5;
			}
			// console.log(n);

			/*gnb fixed*/
			if(t > 700) {
				$("#header .top .logo img").attr({"src" : "images/b_logo.png"});
			}
			else {
				$("#header .top .logo img").attr({"src" : "images/logo.png"});
			}

			if(n == 0){
				$("#main_page").addClass("active");
			}
			else {
				$("#page"+n).addClass("active");
				
			}

			switch(n){
			case 0 : idx=0; break;
			case 1 : idx=1; break;
			case 2 : idx=2; break;
			case 3 : idx=2; break;
			case 4 : idx=3; break;
			case 5 : idx=4; break;
			default : break;
			}

			/*gnb*/
			$("#gnb li").removeClass("on");
			$("#gnb li").eq(idx).addClass("on");

            
            /*text effect*/
            if(n == 0){
                $(".main_tit2").hide();

                $(".main_tit1").textillate({
                    loop: false,
                    in: {
                        effect: "fadeInUp"
                    }
                });
                $(".main_tit1").on("inAnimationEnd.tlt", function(){
                    $(".main_tit2").show();
                    $(".main_tit2").textillate({
                        loop: false,
                        in: {
                            effect: "fadeInUp"
                        }
                    });
                });
            }
			/*text animation*/
			if(n == 1){
                $(".profile_text").show();
                    $(".profile_text").textillate({
                        loop: false,
                        in: {
                            effect: "fadeInUp"
                        }
                    });
			}
		});
	});
	$(window).trigger("scroll");


	var idx=0;

	/*gnb*/
	$("#gnb li").click(function(e){
		e.preventDefault();
		idx=$(this).index();

		switch(idx){
			case 0 : n=0; break;
			case 1 : n=1; break;
			case 2 : n=2; break;
			case 3 : n=4; break;
			case 4 : n=5; break;
			default : break;
		}
//console.log(n);

		if(idx == 0){
			pos=$("#main_page").offset().top;
		}
		else {
			pos=$("#page"+n).offset().top+20;
		}
		$("html").animate({scrollTop:pos}, 800);
	});

    /*m_gnb*/
    $(".tab").click(function(e){
        e.preventDefault();
        $("#m_gnb").addClass("show");
        $("body").addClass("fixed");
    });
    $(".close").click(function(e){
        e.preventDefault();
        $("#m_gnb").removeClass("show");
        $("body").removeClass("fixed");
    });           
    
    
	$("#m_gnb > ul > li").click(function(e){
		e.preventDefault();
		console.log($(this).index());

		switch($(this).index()){
			case 0 : n=0; break;
			case 1 : n=1; break;
			case 2 : n=2; break;
			case 3 : n=4; break;
			case 4 : n=5; break;
			default : break;
		}
		//console.log(n);

		if(n == 0){
			pos=$("#main_page").offset().top;
		}
		else {
			pos=$("#page"+n).offset().top+20;
		}
		
		$("html").animate({scrollTop:pos}, 800, function(){
			$("body").removeClass("fixed");             $("#m_gnb").removeClass("show");
		});
	});
    
    /*page1 photo mouseover effect*/
	$("#page1 .photo").mouseenter(function(e){
		mouseoverEffect(e, "#page1", "#page1 .photo img");
	});

	// evt : mousemove 이벤트 객체입니다.
	// area : 영역입니다.
	// target : 목표 대상입니다.
	function mouseoverEffect(evt, area, target){
		var tempY=evt.pageY-$(area).offset().top;
		var e=-($(window).innerWidth()/2-evt.pageX)/30;
		var n=($(window).innerHeight()/2-tempY)/60;
		$(target).attr("style", "transform: rotateY("+e+"deg) rotateX("+n+"deg); -webkit-transform: rotateY("+e+"deg) rotateX("+n+"deg); -moz-transform:rotateY("+e+"deg) rotateX("+n+"deg)");
	}
   
    


    
    /*page2*/
    /*publishing slider*/
   var swiper = new Swiper('.publishing-slider .swiper-container', {
      slidesPerView: 3,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
            delay: 4000,
      },   
      pagination: {
        el: '.publishing-slider .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.publishing-slider .swiper-button-next',
        prevEl: '.publishing-slider .swiper-button-prev',
      },
    });
    
    /*page3*/
    /*story slider*/
    var swiper = new Swiper('.story-slider .swiper-container', {
      slidesPerView: 1.9,
      spaceBetween: 90,   
      pagination: {
        el: '.story-slider .swiper-pagination',
        clickable: true,
      },        
      navigation: {
        nextEl: '.story-slider .swiper-button-next',
        prevEl: '.story-slider .swiper-button-prev',
      },
    });    

    /*page3*/
    /*phone2 slider*/    
   var swiper = new Swiper('.phone2-slider .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
            delay: 3000,
      },   
    });    
});