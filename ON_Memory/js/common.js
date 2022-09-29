$(document).ready(function(){
    // 메인 고인면 클릭시 list인 sd_ul 나오게 
    $('.sd_ul').hide();
    $('.sd_option').click(function(){
        var clicks = $(this).data('clicks');
        if (clicks) {
            $('.sd_ul').slideToggle("fast");
        }else {
            $('.sd_ul').slideToggle("fast");
        }
        
    })
})