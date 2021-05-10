
$(function(){
    
    //gnb
   var wint;
    
    $(window).scroll(function(){
        wint=$(window).scrollTop();
        
        if(wint > 90){
            $("#header .top").addClass("fixed");   
        }
        else{
            $("#header .top").removeClass("fixed");
        }
    });
    
    $("#gnb > ul > li").hover(
        function(){
          $("#header .top").addClass("active");  
        },
        function(){
          $("#header .top").removeClass("active");  
        }      
    );
    
    $("#gnb > ul > li:first-child > a").focusin(function(){
        $("#header .top").addClass("active");
    });
    $("#gnb li:last-child li:last-child a").focusout(function(){
        $("#header .top").removeClass("active");
    });
    
    $("#gnb > ul > li > a").focusin(function(){
        $(this).parent().addClass("over"); 
    });
    $("#gnb li li:last-child a").focusout(function(){
        $(this).parent().parent().parent().removeClass("over"); 
    });    
    
    //slider
    var n=0;
    $(".keyvisual li").eq(n).addClass("show");
    $(".controller li").eq(n).addClass("on");
    
    $(".controller li").click(function(){
        
        n=$(this).index();
        
        $(".controller li").removeClass("on");
        $(this).addClass("on");
        
        $(".keyvisual li").removeClass("show");
        $(".keyvisual li").eq(n).addClass("show");    
        
    });
    
    
    //gallery
	var pagen=0;
	var posx=0;
	$(".pagination li").eq(pagen).addClass("active");

	$(".pagination li").click(function(e){
		e.preventDefault();
		$(".pagination li").removeClass("active");
		$(this).addClass("active");

		pagen=$(this).index();

		posx=pagen*(-1)*1467;

		$(".gallery_zone .gallery .box").css({"left":posx});
	});
	$(".controlls .prev").click(function(e){
		e.preventDefault();
		if(pagen > 0){
			pagen=pagen-1;
			$(".pagination li").removeClass("active");
			$(".pagination li").eq(pagen).addClass("active");
			posx=pagen*(-1)*1467;
			$(".gallery_zone .gallery .box").css({"left":posx});
		}
	});
	$(".controlls .next").click(function(e){
		e.preventDefault();
		if(pagen < 1){
			pagen=pagen+1;
			$(".pagination li").removeClass("active");
			$(".pagination li").eq(pagen).addClass("active");
			posx=pagen*(-1)*1467;
			$(".gallery_zone .gallery .box").css({"left":posx});
		}
	});
});    
  