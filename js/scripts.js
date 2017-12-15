function init() {
    
    
    var myMap = new ymaps.Map("map", {
        center: [55.818381, 37.760035]
        , zoom: 16
        , controls: ['zoomControl']
    });
    
    
    myMap.behaviors.disable('multiTouch');
    myMap.behaviors.disable('scrollZoom');
    var myGeoObjects = [];
    var flag_for_center = true;
    
    
    
    $(".pick-adr").each(function (e) {
        var latt = $(this).attr("data-lat");
        var longg = $(this).attr("data-lon");
        
        myGeoObjects[e] = new ymaps.Placemark([latt, longg], {
            clusterCaption: 'Заголовок'
        }, {
            iconLayout: 'default#image'
            //, iconImageHref: 'img/marker-1.png'
            //, iconImageSize: [76, 70]
            //, iconImageOffset: [-26, -70]
        });
    });
    
    
    /*var clusterIcons = [{
        href: 'img/marker-1.png'
        , size: [76, 70]
        , offset: [0, 0]
    }];
    */
    
    var clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false
        , clusterOpenBalloonOnClick: false
        , clusterBalloonPanelMaxMapArea: 0
        , clusterBalloonContentLayoutWidth: 300
        , clusterBalloonContentLayoutHeight: 200
        , clusterBalloonPagerSize: 2
        , clusterBalloonPagerVisible: false
    });
    
    
    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
    
    
    
    $('.pick-adr').click(function(){
        myMap.setCenter(
            [parseFloat($(this).attr("data-centerlat"))
             , parseFloat($(this).attr("data-centerlon"))], 16, {
                checkZoomRange: false
            });  
    });
    
}

ymaps.ready(init);
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
        focusOnSelect: true,
        responsive: [
             {
                 breakpoint: 1601
                 , settings: {
                     slidesToShow: 4
                     , slidesToScroll: 1
                     
                 }
             },
             {
                 breakpoint: 1351
                 , settings: {
                     slidesToShow: 3
                     , slidesToScroll: 1
                     
                 }
             }
        ]
    });

    var clock1 = $('.tatia-counter-1').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false
    });
    

   $('.slider-nav').on('afterChange', function(event, slick, currentSlide, nextSlide){
  
       $(".circle").removeClass('changed');
       
       $('.slider-nav .slick-current .circle').addClass('changed');
   
   });
    
    $('.slider-wr-two').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        
    });
    
    
    $('.slider-nav .slick-current .circle').addClass('changed');

});
