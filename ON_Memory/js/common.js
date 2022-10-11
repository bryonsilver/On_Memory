$(document).ready(function(){
    // 메인 고인면 클릭시 list인 sd_ul 나오게 
    $('.d_ul').hide();
    $('.d_option').click(function(){
        var clicks = $(this).data('clicks');
        if (clicks) {
            $('.d_ul').slideToggle("fast");
        }else {
            $('.d_ul').slideToggle("fast");
        }
    })
    $('.sd1').click(function(){
        $('.d_option').html('고인명')
        $('.d_ul').slideUp("fast")
    })
    $('.sd2').click(function(){
        $('.d_option').html('상주명')
        $('.d_ul').slideUp("fast")
    })
    $('.sd3').click(function(){
        $('.d_option').html('가족명')
        $('.d_ul').slideUp("fast")
    })
    $('.sd4').click(function(){
        $('.d_option').html('전화번호')
        $('.d_ul').slideUp("fast")
    })

    


})