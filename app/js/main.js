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

//start slider init 
$('.slider').slick({
    centerMode: true,
    centerPadding: '20vw',
    slidesToShow: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10vw',
        }
      }
     
    ]
  });
//end slider init

//start floorplan tabs
$(function(){
	$(".tab").click(function() {
	$(".tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab-item").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
});
//end floorplan tabs