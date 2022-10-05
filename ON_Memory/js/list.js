$(document).ready(function(){
    const urlParams = new URL(location.href).searchParams;
    const value = urlParams.get('s_val');
    console.log(value)

    let s_val_1 = 9;
    if (value == DECEASED[0][0].name) {
        s_val_1 = 0;
        console.log('s_val_1', s_val_1)
    } else if (value == DECEASED[0][1].name) {
        s_val_1 = 1;
        console.log('s_val_1', s_val_1)
    } else if (value == DECEASED[0][2].name) {
        s_val_1 = 2;
        console.log('s_val_1', s_val_1)
    } else if (value == DECEASED[0][3].name) {
        s_val_1 = 3;
        console.log('s_val_1', s_val_1)
    } else if (value == DECEASED[0][4].name) {
        s_val_1 = 4;
        console.log('s_val_1', s_val_1)
    } else if (value == DECEASED[0][5].name) {
        s_val_1 = 5;
        console.log('s_val_1', s_val_1)
    } else {
        console.log('s_val_1', '잘못치셨소이다')
        $('.de_ul').html('검색결과가 없습니다')
        // value = '틀림'
        // s_val_1 = 9;
    }
    

    console.log(DECEASED[0].length)
    for(let i=0; i<1; i++) {
        let list = ` <li class="de_list">
                        <input type="checkbox" class="board_chk" value="27">
                        <div class="online_list">
                            <div class="on_list">
                                <div class="corner_ribon top_left"></div>
                                <div class="corner_ribon top_right"></div>
                        
                                <div class="on_list_info">
                                    <p class="name">
                                        <span class="con1">
                                            <span><span>故</span>${DECEASED[0][s_val_1].name}</span>
                                            <span>${DECEASED[0][s_val_1].age_gender}</span>
                                        </span>
                                    </p>
                                    <div class="info_list">
                                        <p class="labe1">
                                            <b>배우자</b>`
                                            for(let j=0; j<DECEASED[0][s_val_1].spouse.length; j++) {
                                 list +=  `<span class="con6_1">${DECEASED[0][s_val_1].spouse[j]}</span>`;
                                            }
                                list += `</p>
                                    </div>
                                    <div class="info_list">
                                        <p class="labe1">
                                            <b>아들</b>`
                                            for(let j=0; j<DECEASED[0][s_val_1].son.length; j++) {
                                    list +=  `<span class="con6_2">${DECEASED[0][s_val_1].son[j]}</span>`;
                                            }
                                list += `</p>
                                    </div>
                                    <div class="info_list">
                                        <p class="labe1">
                                            <b>딸</b>`
                                            for(let j=0; j<DECEASED[0][s_val_1].daugther.length; j++) {
                                    list +=  `<span class="con6_3">${DECEASED[0][s_val_1].daugther[j]}</span>`;
                                            }
                              list +=   `</p>
                                    </div>
                                    <div class="info_list">
                                        <p class="labe1">
                                            <b>사위</b>`
                                            for(let j=0; j<DECEASED[0][s_val_1].dau_in_law.length; j++) {
                                    list +=  `<span class="con6_4">${DECEASED[0][s_val_1].dau_in_law[j]}</span>`;
                                            }
                            list +=   `</p>
                                    </div>
                                    <div class="info_list">
                                        <p class="labe1">
                                            <b>며느리</b>`
                                            for(let j=0; j<DECEASED[0][s_val_1].son_in_law.length; j++) {
                                    list +=  `<span class="con6_5">${DECEASED[0][s_val_1].son_in_law[j]}</span>`;
                                            }
                                 list += `</p>
                                    </div>
                                    <div class="info_list">
                                        <p class="labe1">
                                            <b>손자</b>`
                                            for(let j=0; j<DECEASED[0][s_val_1].grandchildren.length; j++) {
                                    list +=  `<span class="con6_6">${DECEASED[0][s_val_1].grandchildren[j]}</span>`;
                                            }
                                 list +=`</p>
                                    </div>
                                    <div class="info_list">
                                        <p class="labe1">
                                            <b>빈소</b>
                                            <span class="con6_7">${DECEASED[0][s_val_1].mortuary}</span>
                                        </p>
                                    </div>
                                    <div class="info_list">
                                        <p class="labe1">
                                            <b>발인</b>
                                            <span class="con6_8">${DECEASED[0][s_val_1].valet}</span>
                                        </p>
                                    </div>
                                    <div class="info_list">
                                        <p class="labe1">
                                            <b>장지</b>
                                            <span class="con6_9">${DECEASED[0][s_val_1].burial_grounds}</span>
                                        </p>
                                    </div>
                                    <a href="" title="조문하기" class="info_btn">조문하기</a>
                                </div>
                            </div>
                        </div>
                    </li>`
        $('.de_ul').append(list);
    }

    $('#s_input').bind('input', function() {
        var value = $(this).val() // get the current value of the input field.
        console.log(value) 
        $('#s_val').attr('value', value);
    });

    
})