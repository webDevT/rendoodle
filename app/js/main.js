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