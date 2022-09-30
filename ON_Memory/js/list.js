$(document).ready(function(){
    console.log(DECEASED[0].length)
    for(let i=0; i<DECEASED[0].length; i++) {
        let list = ` <li class="de_list">
                        <input type="checkbox" class="board_chk" value="27">
                        <div class="online_list">
                            <div class="on_list">
                                <div class="corner_ribon top_left"></div>
                                <div class="corner_ribon top_right"></div>
                        
                                <div class="on_list_info">
                                    <p class="name">
                                        <span class="con1">
                                            <span><span>故</span>${DECEASED[0][i].name}</span>
                                            <span>${DECEASED[0][i].age_gender}</span>
                                        </span>
                                    </p>
                                    <div class="info_list">
                                        <p class="labe1">
                                            <b>배우자</b>`
                                            for(let j=0; j<DECEASED[0][i].spouse.length; j++) {
                                 list +=  `<span class="con6_1">${DECEASED[0][i].spouse[j]}</span>`;
                                            }
                                list += `</p>
                                    </div>
                                    <div class="info_list">
                                        <p class="labe1">
                                            <b>아들</b>`
                                            for(let j=0; j<DECEASED[0][i].son.length; j++) {
                                    list +=  `<span class="con6_2">${DECEASED[0][i].son[j]}</span>`;
                                            }
                                list += `</p>
                                    </div>
                                    <div class="info_list">
                                        <p class="labe1">
                                            <b>딸</b>`
                                            for(let j=0; j<DECEASED[0][i].daugther.length; j++) {
                                    list +=  `<span class="con6_3">${DECEASED[0][i].daugther[j]}</span>`;
                                            }
                              list +=   `</p>
                                    </div>
                                    <div class="info_list">
                                        <p class="labe1">
                                            <b>사위</b>`
                                            for(let j=0; j<DECEASED[0][i].dau_in_law.length; j++) {
                                    list +=  `<span class="con6_4">${DECEASED[0][i].dau_in_law[j]}</span>`;
                                            }
                            list +=   `</p>
                                    </div>
                                    <div class="info_list">
                                        <p class="labe1">
                                            <b>며느리</b>`
                                            for(let j=0; j<DECEASED[0][i].son_in_law.length; j++) {
                                    list +=  `<span class="con6_5">${DECEASED[0][i].son_in_law[j]}</span>`;
                                            }
                                 list += `</p>
                                    </div>
                                    <div class="info_list">
                                        <p class="labe1">
                                            <b>손자</b>`
                                            for(let j=0; j<DECEASED[0][i].grandchildren.length; j++) {
                                    list +=  `<span class="con6_6">${DECEASED[0][i].grandchildren[j]}</span>`;
                                            }
                                 list +=`</p>
                                    </div>
                                    <div class="info_list">
                                        <p class="labe1">
                                            <b>빈소</b>
                                            <span class="con6_7">${DECEASED[0][i].mortuary}</span>
                                        </p>
                                    </div>
                                    <div class="info_list">
                                        <p class="labe1">
                                            <b>발인</b>
                                            <span class="con6_8">${DECEASED[0][i].valet}</span>
                                        </p>
                                    </div>
                                    <div class="info_list">
                                        <p class="labe1">
                                            <b>장지</b>
                                            <span class="con6_9">${DECEASED[0][i].burial_grounds}</span>
                                        </p>
                                    </div>
                                    <a href="" title="조문하기" class="info_btn">조문하기</a>
                                </div>
                            </div>
                        </div>
                    </li>`
        $('.de_ul').append(list);
    }
})