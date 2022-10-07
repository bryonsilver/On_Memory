$(document).ready(function(){
    $('.tab_3_his_more_btn').click(function(){
        $('.paper').css({height: 'auto'})
        $('.tab_3_his_more_btn').css({display: 'none'})
    })
    $('#tab_one').click(function(){
        $('.tab_one').css({display: 'inline-block'})
        $('.tab_two').css({display: 'none'})
        $('.tab_three').css({display: 'none'})
    })
    $('#tab_two').click(function(){
        $('.tab_one').css({display: 'none'})
        $('.tab_two').css({display: 'inline-block'})
        $('.tab_three').css({display: 'none'})
    })
    $('#tab_three').click(function(){
        $('.tab_one').css({display: 'none'})
        $('.tab_two').css({display: 'none'})
        $('.tab_three').css({display: 'inline-block'})
    })



    var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 7,
        freeMode: true,
        breakpoints: {
            2000: {
                slidesPerView: 7,
                spaceBetween: 10
            },
            1900: {
                slidesPerView: 7,
                spaceBetween: 10
            },
            1000: {
                slidesPerView: 7,
                spaceBetween: 10
            },
            900: {
                slidesPerView: 4,
                spaceBetween: 10
            },
            600: {
                slidesPerView: 4,
                spaceBetween: 10
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            100: {
                slidesPerView: 2,
                spaceBetween: 10
            }
        },
        
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        spaceBetween: 10,
        thumbs: {
          swiper: swiper,
        },
      });

    
      var tab_1_s = $('.tab_1').offsetTop;
      var tab_3his_s = $('.tab3_histroy').offsetTop;
      var tab_3_tabs_s = $('.tab3_tabs').offsetTop;
      var tab_2_s = $('.tab_2').offsetTop;
      var tab_3_s = $('.tab_3').offsetTop;
      var tab_4_s = $('.tab_4').offsetTop;
      var tab_5_s = $('.tab_5').offsetTop;
      var tab_6_s = $('.tab_6').offsetTop;

    //   $('#tab_1').click(function(){
    //   })

    $(window).resize(function(){
        var width = window.innerWidth;
        if(width <= 600){
            $('.mySwiper4')
            $('.black_pan').css({display: 'none'})
        }
	}).resize();
})