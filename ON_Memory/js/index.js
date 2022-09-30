$(document).ready(function(){
    $('.sd_ul').hide();
    $('.sd_option').click(function(){
        var clicks = $(this).data('clicks');
        if (clicks) {
            $('.sd_ul').slideToggle("fast");
        }else {
            $('.sd_ul').slideToggle("fast");
        }
    })
    $('.sd1').click(function(){
        $('.sd_option').html('고인명')
        $('.sd_ul').slideUp("fast")
    })
    $('.sd2').click(function(){
        $('.sd_option').html('상주명')
        $('.sd_ul').slideUp("fast")
    })
    $('.sd3').click(function(){
        $('.sd_option').html('가족명')
        $('.sd_ul').slideUp("fast")
    })
    $('.sd4').click(function(){
        $('.sd_option').html('전화번호')
        $('.sd_ul').slideUp("fast")
    })
})