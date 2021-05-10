$(function(){
	// 1) navigation ฐüทร
	$(".nav > ul > li").hover(
		function(){
			$(this).parent().addClass("over");
		},
		function(){
			$(this).parent().removeClass("over");
		}
	);
	$(".nav > ul > li").focusin(function(){
		$(this).addClass("over");
	});
	$(".nav > ul > li").focusout(function(){
		$(this).removeClass("over");
	});
	$(".nav > ul > li:first-child").focusin(function(){
		$(this).parent().addClass("over");
	});
	$(".nav li:last-child li:last-child").focusout(function(){
		$(this).parent().parent().removeClass("over");
		$(this).parent().parent().parent().removeClass("over");
	});

      var swiper = new Swiper(".swiper-container", {
        
        slidesPerView: 3,
        spaceBetween: 150,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        
      });
});