$(function(){
    //main slider
    var swiper = new Swiper('#main-slider .swiper-container', {
      spaceBetween: 30,
      effect: 'fade',
      pagination: {
        el: '#main-slider .swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 4000,
      },  
    });
    
    
    //content slider
    var swiper = new Swiper('.page3 .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      scrollbar: {
        el: '.page3 .swiper-container .swiper-scrollbar',
        hide: false,
      },
      pagination: {
        el: ".page3 .swiper-container .swiper-pagination",
        type: "fraction",
      },            
    });
//mobile menu
    $("a.tab").click(function(e){
        e.preventDefault();
        $("#menu").addClass("active");
    });
    $("a.close").click(function(e){
        e.preventDefault();
        $("#menu").removeClass("active");
    });
    $("#menu .gnb > ul > li").click(function(e){
        e.preventDefault();
        
        if($(this).hasClass("active") == false) {
            $("menu .gnb > ul > li").removeClass("active");
            $(this).addClass("active");
            $("#menu .gnb ul ul").slideUp(300);
            $(this).children("ul").slideDown(300);
        }
        else {
            $(this).removeClass("active");
            $(this).children("ul").slideUp(300);
        }
    });
});
 