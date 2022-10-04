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

    function print_v() {
        const v = $('.s_input').value;
        $('.text_box p').html = v;
        if (v == '김구') {
            console.log(v)
            for(let i=0; i<DECEASED[0][1].length; i++) {
                let list = ` <li class="de_list">
                                <input type="checkbox" class="board_chk" value="27">
                                <div class="online_list">
                                    <div class="on_list">
                                        <div class="corner_ribon top_left"></div>
                                        <div class="corner_ribon top_right"></div>
                                
                                        <div class="on_list_info">
                                            <p class="name">
                                                <span class="con1">
                                                    <span><span>故</span>${DECEASED[0][1].name}</span>
                                                    <span>${DECEASED[0][1].age_gender}</span>
                                                </span>
                                            </p>
                                            <div class="info_list">
                                                <p class="labe1">
                                                    <b>배우자</b>`
                                                    for(let j=0; j<DECEASED[0][1].spouse.length; j++) {
                                         list +=  `<span class="con6_1">${DECEASED[0][1].spouse[j]}</span>`;
                                                    }
                                        list += `</p>
                                            </div>
                                            <div class="info_list">
                                                <p class="labe1">
                                                    <b>아들</b>`
                                                    for(let j=0; j<DECEASED[0][1].son.length; j++) {
                                            list +=  `<span class="con6_2">${DECEASED[0][1].son[j]}</span>`;
                                                    }
                                        list += `</p>
                                            </div>
                                            <div class="info_list">
                                                <p class="labe1">
                                                    <b>딸</b>`
                                                    for(let j=0; j<DECEASED[0][1].daugther.length; j++) {
                                            list +=  `<span class="con6_3">${DECEASED[0][1].daugther[j]}</span>`;
                                                    }
                                      list +=   `</p>
                                            </div>
                                            <div class="info_list">
                                                <p class="labe1">
                                                    <b>사위</b>`
                                                    for(let j=0; j<DECEASED[0][1].dau_in_law.length; j++) {
                                            list +=  `<span class="con6_4">${DECEASED[0][1].dau_in_law[j]}</span>`;
                                                    }
                                    list +=   `</p>
                                            </div>
                                            <div class="info_list">
                                                <p class="labe1">
                                                    <b>며느리</b>`
                                                    for(let j=0; j<DECEASED[0][1].son_in_law.length; j++) {
                                            list +=  `<span class="con6_5">${DECEASED[0][1].son_in_law[j]}</span>`;
                                                    }
                                         list += `</p>
                                            </div>
                                            <div class="info_list">
                                                <p class="labe1">
                                                    <b>손자</b>`
                                                    for(let j=0; j<DECEASED[0][1].grandchildren.length; j++) {
                                            list +=  `<span class="con6_6">${DECEASED[0][1].grandchildren[j]}</span>`;
                                                    }
                                         list +=`</p>
                                            </div>
                                            <div class="info_list">
                                                <p class="labe1">
                                                    <b>빈소</b>
                                                    <span class="con6_7">${DECEASED[0][1].mortuary}</span>
                                                </p>
                                            </div>
                                            <div class="info_list">
                                                <p class="labe1">
                                                    <b>발인</b>
                                                    <span class="con6_8">${DECEASED[0][1].valet}</span>
                                                </p>
                                            </div>
                                            <div class="info_list">
                                                <p class="labe1">
                                                    <b>장지</b>
                                                    <span class="con6_9">${DECEASED[0][1].burial_grounds}</span>
                                                </p>
                                            </div>
                                            <a href="" title="조문하기" class="info_btn">조문하기</a>
                                        </div>
                                    </div>
                                </div>
                            </li>`
                $('.de_ul').append(list);
            }
        }
    }

})