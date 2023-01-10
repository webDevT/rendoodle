$(function(){

// ------start sticky header------
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('.header').addClass("sticky");
    }
    else{
    $('.header').removeClass("sticky");
    }
    }); 
    //-------end sticky header--------

    $('.menu__btn').click(function(){
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    })
    $(window).scroll(function() {
        $('.menu').removeClass('active');
        $('.menu__btn').removeClass('active');
        }); 
//-------end mobil menu------------

});


//start floorplan tabs
$(function(){
	$(".tab").click(function() {
	$(".tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab-item").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
});
//end floorplan tabs

//start product tabs
$(function(){
	$(".product-tab").click(function() {
	$(".product-tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".product-tab-item").removeClass("active").eq($(this).index()).addClass("active");
 	$(".product-tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
});
//end product tabs

//start product tabs
$(function(){
	$(".product-card-tab").click(function() {
	$(".product-card-tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".product-card-tab-item").removeClass("active").eq($(this).index()).addClass("active");
 	$(".product-card-tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
});
//end product tabs

$('[data-fancybox="gallery"]').fancybox({
    transitionEffect: "fade",
    transitionDuration: 0,
  
  });