$(document).ready(function(){

    // 고인이 걸어온 길의 더보기 버튼 
    $('.tab_3_his_more_btn').click(function(){
        $('.paper').css({height: 'auto'})
        $('.tab_3_his_more_btn').css({display: 'none'})
    })

    // 생전사진, 생전영상, 유품영상 버튼 클릭시 다른버튼 등
    $('#tab_On').click(function(){
        $('.tab_one').css({display: 'inline-block'})
        $('.tab_two').css({display: 'none'})
        $('.tab_three').css({display: 'none'})
    })
    $('#tab_Tw').click(function(){
        $('.tab_one').css({display: 'none'})
        $('.tab_two').css({display: 'inline-block'})
        $('.tab_three').css({display: 'none'})
    })
    $('#tab_Th').click(function(){
        $('.tab_one').css({display: 'none'})
        $('.tab_two').css({display: 'none'})
        $('.tab_three').css({display: 'inline-block'})
    })



     // 생전사진의 슬라이드 ( 실제 움직이는 사이즈는 1000px - 4, 600 - 2개 나머지는 코드가 안되서 넣은 것들 )
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

      
      // bottom_nav의 a 클릭시 a href에 저장된 id의 offset Top으로 스크롤 이동
    $('.bottom_nav a').click(function(){
        event.preventDefault();

        let href = $(this).attr('href'); // 현재 클릭한 a의 href 값 가져옴 ex) #sec2
        $('html, body').stop().animate({
            scrollTop: $(href).offset().top
        }, 500)

        $('.tab_bottom').removeClass('bn_active')
        $(this).addClass('bn_active')
    })

        let tab_1_o_top = $('#tab_1').offset().top - 100;
        let tab_3_his_o_top = $('#tab3_histroy').offset().top - 100;
        let tab_3_tabs__o_top = $('#tab_3_tabs').offset().top - 100;
        let tab_2_o_top = $('#tab_2').offset().top - 100;
        let tab_3_o_top = $('#tab_3').offset().top - 100;
        let tab_4_o_top = $('#tab_4').offset().top - 100;
        let tab_5_o_top = $('#tab_5').offset().top - 100;
        let tab_6_o_top = $('#tab_6').offset().top - 100;

        let tab_1_o_bot = tab_1_o_top + $('#tab_1').outerHeight();
        let tab_3_his_o_bot = tab_3_his_o_top + $('#tab3_histroy').outerHeight();
        let tab_3_tabs_o_bot = tab_3_tabs__o_top + $('#tab_3_tabs').outerHeight();
        let tab_2_o_bot = tab_2_o_top + $('#tab_2').outerHeight();
        let tab_3_o_bot = tab_3_o_top + $('#tab_3').outerHeight();
        let tab_4_o_bot = tab_4_o_top + $('#tab_4').outerHeight();
        let tab_5_o_bot = tab_5_o_top + $('#tab_5').outerHeight();
        let tab_6_o_bot = tab_6_o_top + $('#tab_6').outerHeight();

        $(window).scroll(function() {
            let s_top = $(window).scrollTop();
    
            if(tab_1_o_top <= s_top && s_top < tab_1_o_bot) {
                $('.bottom_nav a').removeClass('bn_active')
               $('.t1').addClass('bn_active')
               $('.tab_bottom').show()
                console.log(0)
            }
            else if(tab_3_his_o_top <= s_top && s_top < tab_3_his_o_bot) {
                $('.bottom_nav a').removeClass('bn_active')
               $('.t3_h').addClass('bn_active')
               $('.tab_bottom').show()
                console.log(1)
            }
            else if(tab_3_tabs__o_top <= s_top && s_top < tab_3_tabs_o_bot) {
                $('.bottom_nav a').removeClass('bn_active')
               $('.t3_t').addClass('bn_active')
               $('.tab_bottom').show()
                console.log(2)
            }
            else if(tab_2_o_top <= s_top && s_top < tab_2_o_bot) {
                $('.bottom_nav a').removeClass('bn_active')
               $('.t2').addClass('bn_active')
               $('.tab_bottom').show()
                console.log(3)
            }
            else if(tab_3_o_top <= s_top && s_top < tab_3_o_bot) {
                $('.bottom_nav a').removeClass('bn_active')
               $('.t3').addClass('bn_active')
               $('.tab_bottom').show()
                console.log(4)
            }
            else if(tab_4_o_top <= s_top && s_top < tab_4_o_bot) {
                $('.bottom_nav a').removeClass('bn_active')
               $('.t4').addClass('bn_active')
               $('.tab_bottom').show()
                console.log(5)
            }
            else if(tab_5_o_top <= s_top && s_top < tab_5_o_bot) {
                $('.bottom_nav a').removeClass('bn_active')
               $('.t5').addClass('bn_active')
               $('.tab_bottom').show()
                console.log(6)
            }
            else if(tab_6_o_top <= s_top && s_top < tab_6_o_bot) {
                $('.bottom_nav a').removeClass('bn_active')
                $('.t6').addClass('bn_active')
                $('.tab_bottom').show()
                console.log(7)
            }
            
        })

    
    
    $(window).resize(function() {
        // 스크롤 이동하면 indi 변경
        

        var width = window.innerWidth;
        if(width <= 600) {
            $('.tab_bottom').hide()
            $('.bn_active').show()
            $('.icon').click(function(){
                var clicks = $(this).data('clicks');
                if (clicks) {
                // odd clicks 
                    $('.tab_bottom').toggle()
                    $('.bn_active').show()
                } else {
                // even clicks
                    $('.tab_bottom').toggle()
                    $('.bn_active').show()
                }
                $(this).data("clicks", !clicks);
            })

            $('.bottom_nav a').click(function(){
                $('.tab_bottom').hide()
                $('.bn_active').show()
            })

            $(window).scroll(function() {
                let s_top = $(window).scrollTop();
        
                if(tab_1_o_top <= s_top && s_top < tab_1_o_bot) {
                    $('.tab_bottom').hide()
                    $('.bn_active').show()
                }
                else if(tab_3_his_o_top <= s_top && s_top < tab_3_his_o_bot) {
                    $('.tab_bottom').hide()
                    $('.bn_active').show()
                }
                else if(tab_3_tabs__o_top <= s_top && s_top < tab_3_tabs_o_bot) {
                    $('.tab_bottom').hide()
                    $('.bn_active').show()
                }
                else if(tab_2_o_top <= s_top && s_top < tab_2_o_bot) {
                    $('.tab_bottom').hide()
                    $('.bn_active').show()
                }
                else if(tab_3_o_top <= s_top && s_top < tab_3_o_bot) {
                    $('.tab_bottom').hide()
                    $('.bn_active').show()
                }
                else if(tab_4_o_top <= s_top && s_top < tab_4_o_bot) {
                    $('.tab_bottom').hide()
                    $('.bn_active').show()
                }
                else if(tab_5_o_top <= s_top && s_top < tab_5_o_bot) {
                    $('.tab_bottom').hide()
                    $('.bn_active').show()
                }
                else if(tab_6_o_top <= s_top && s_top < tab_6_o_bot) {
                    $('.tab_bottom').hide()
                    $('.bn_active').show()
                }
                
            })

        } else if(width > 600) {
            $('.tab_bottom').show()
            $('.bn_active').show()
            $('.bottom_nav a').click(function(){
                $('.tab_bottom').css({display: 'block'})
            })
        }
    }).resize();

    // $(window).resize(function(){
    //     var width = window.innerWidth;
    //     if(width <= 600){
    //         $('.mySwiper4').css({display: 'none'})
    //     }
	// }).resize();
})

