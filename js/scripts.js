$(document).ready(function () {
    /* $('.slider-last-ex').slick({
         dots: false
         , arrows: false
         , infinite: true
         , speed: 300
         , slidesToShow: 3
         , autoplay: true
         , autoplaySpeed: 5000
         , slidesToScroll: 1
         , responsive: [
             {
                 breakpoint: 992
                 , settings: {
                     slidesToShow: 2
                     , slidesToScroll: 1
                     
                 }
             },
             {
                 breakpoint: 768
                 , settings: {
                     slidesToShow: 1
                     , slidesToScroll: 1
                     
                 }
             }
           ]
     });*/


    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        slidesToScroll: 1,
        asNavFor: '.slider-main',
        dots: false,
        arrows: true,
        pauseOnFocus: false,

        focusOnSelect: true
    });

    var clock1 = $('.tatia-counter-1').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false
    });
    

   $('.slider-nav').on('afterChange', function(event, slick, currentSlide, nextSlide){
  
       $(".circle").removeClass('changed');
       
       $('.slider-nav .slick-current .circle').addClass('changed');
   
   });
    
    $('.slider-nav .slick-current .circle').addClass('changed');

});
