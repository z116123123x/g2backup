<template>
    <div class="Order">
        <div class="Order_head">
            <div class="Order_head_text">
                <h2>訂單管理</h2>
            </div>
        </div>
        <div class="Order_bottom">
            <div class="Orderlist">
                <div class="list_1">
                    <div class="listnum">
                        <p>訂單編號: xxxxx</p>
                    </div>
                    <div class="list_th">
                        <p>成立時間</p>
                        <p>總金額</p>
                        <p>付款狀態</p>
                        <p>訂單狀態</p>
                    </div>
                    <div class="list_td">
                        <p>2020-04-17</p>
                        <p>$1380</p>
                        <p>已付款</p>
                        <p>完成</p>
                    </div>
                    <span class="triangle"></span>
                    <div class="list_slide">
                        <p>訂單明細</p>
                    </div>

                    <div class="list_th2">
                        <p>商品編號</p>
                        <p>名稱</p>
                        <p>價格</p>
                        <p>數量</p>
                        <p>小計</p>
                    </div>
                    <div class="list_td2">
                        <p>xxxxx</p>
                        <p>台南麻豆文旦</p>
                        <p class="td2_price">$50</p>
                        <p class="td2_num">10</p>
                        <p>$500</p>
                    </div>

                    <div class="list_td3">
                        <p>xxxxx</p>
                        <p>本月熱賣!屏東香蕉</p>
                        <p class="td3_price">$50</p>
                        <p class="td3_num">10</p>
                        <p>$500</p>
                    </div>

                    <div class="list_td3">
                        <p>xxxxx</p>
                        <p>保證有甜!屏東甘蔗</p>
                        <p class="td3_price">$60</p>
                        <p class="td3_num">10</p>
                        <p>$600</p>
                    </div>
                    <div class="total">
                        <p>商品金額 $130</p>
                        <p>運費 $80</p>
                        <p>總金額 $1380</p>
                    </div>
                    <div class="address">
                        <div class="address_left">
                            <p>收件人:</p>
                            <p>連絡電話:</p>
                            <p>收件地址:</p>
                            <p>運送方式:</p>
                        </div>
                        <div class="address_right">
                            <p>資策會DD106</p>
                            <p>0912-345678</p>
                            <p>桃園市中壢區中大路300-1號</p>
                            <p>宅配到府<span>(運送編號:28800118667)</span></p>
                        </div>
                    </div>
                    <div class="Evaluation">
                        <div class="Evaluation_top">
                            <p>訂單已完成，可以給評價囉!</p>
                        </div>
                        <div class="star">
                            <div class="starimg">
                                <img src="@/assets/memberstar.svg" alt="">
                            </div>
                            <div class="starimg">
                                <img src="@/assets/memberstar.svg" alt="">
                            </div>
                            <div class="starimg">
                                <img src="@/assets/memberstar.svg" alt="">
                            </div>
                            <div class="starimg">
                                <img src="@/assets/memberstar.svg" alt="">
                            </div>
                            <div class="Evaluation_submit">
                                <p>不想給了</p>
                                <p>送出</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="pagination_block">
                <ul class="pagination">
                    <li><a href="#">&lt;</a></li>
                    <li><a href="#" class="-on">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">6</a></li>
                    <li><a href="#">7</a></li>
                    <li><a href="#">8</a></li>
                    <li><a href="#">9</a></li>
                    <li><a href="#">10</a></li>
                    <li><a href="#">&gt;</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>