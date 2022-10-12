$(document).ready(function(){
    $('.korean').click(function(){
        $(this).toggleClass('btn_active');
        $(this).toggleClass('bk');

        $('.special').removeClass('btn_active');
        $('.special').removeClass('bk')

        $('.kor').toggleClass('btn_img_act')
        $('.spe').removeClass('btn_img_act')
    })
    $('.special').click(function(){
        $(this).toggleClass('btn_active');
        $(this).toggleClass('bk');

        $('.korean').removeClass('btn_active');
        $('.korean').removeClass('bk')

        $('.kor').removeClass('btn_img_act')
        $('.spe').toggleClass('btn_img_act')
    })

    $('.btnSubmit').click(function() {
        var result = $.trim($('#member_id').val());
        var result2 = $.trim($('#member_passwd').val());
        if (!result) {
          alert("아이디 항목은 필수 입력값입니다.");
        } else if (!result2) {
            alert("비밀번호 항목은 필수 입력값입니다.");
        }
    })
})