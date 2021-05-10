
$(function(){
      //main_slider
   var swiper = new Swiper('#main_slider .swiper-container', {
      navigation: {
           nextEl: '#main_slider .swiper-button-next',
           prevEl: '#main_slider .swiper-button-prev',
      },
        pagination: {
            el: "#main_slider .swiper-pagination",
			type: "fraction"
		},   
    });
    
    
    
        //recommend_slider
    var swiper = new Swiper('#recommend_slider .swiper-container', {
      slidesPerView: 1.5,
      spaceBetween: 10,
      scrollbar: {
        el: '#recommend_slider .swiper-scrollbar',
        hide: false,
      },
        navigation: {
           nextEl: '#recommend_slider .swiper-button-next',
           prevEl: '#recommend_slider .swiper-button-prev',
      }, 
         pagination: {
            el: "#recommend_slider .swiper-pagination",
            type: "fraction"
      },    
    
    });
    
    
    //header. tab
    $("#header .tab").click(function(e){
        e.preventDefault();
        $("body").addClass("fixed");
        $("#mobile").addClass("active");
        $(".dim").addClass("active");
    });
    $(".dim").click(function(){
        $("body").removeClass("fixed");
        $("#mobile").removeClass("active");
        $(".dim").removeClass("active");      
    });
    $(".home .close").click(function(e){
		e.preventDefault();
		$(".dim").trigger("click");
	});
    

});
  
