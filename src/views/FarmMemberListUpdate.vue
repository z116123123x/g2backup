<template>
    <div class="FarmListUpdate">
        <div class="FarmListUpdate_head">
            <div class="FarmListUpdate_head_text">
                <span>訂單管理</span>
                <span class="new">查看 xxxxx 訂單詳情</span>
            </div>
        </div>
        <div class="FarmListUpdate_bottom">
            <div class="FarmListUpdatelist">
                <div class="list_1">
                    <div class="listnum">
                        <p>訂單編號: xxxxx</p>
                    </div>
                    <div class="farmlist">
                        <div class="farmlist_time">
                            <p class="title">成立時間</p>
                            <p>2020-04-17</p>
                        </div>
                        <div class="farmlist_price">
                            <p class="title">總金額</p>
                            <p>$1380</p>
                        </div>
                        <div class="farmlist_payment">
                            <p class="title">付款狀態</p>
                            <p>已付款</p>
                        </div>
                        <div class="farmlist_status">
                            <p class="title">訂單狀態</p>
                            <select name="country">
                            <option value="1">完成</option>
                            <option value="2">未完成</option>
                            <option value="3">選項3</option>
                        </select>
                        </div>
                    </div>

                    <div class="list_slide">
                        <img id="ploygon" class="plogon" src="@/assets/Polygon 2.svg" alt="">
                        <span id="ploygon">訂單明細</span>
                    </div>
                    <div class="slide display">
                        <div class="FarmListDetail">
                            <div class="farmlistdetail_num">
                                <p class="title">商品編號</p>
                                <p>xxxxx</p>
                                <p>xxxxx</p>
                                <p>xxxxx</p>
                                <p>xxxxx</p>
                            </div>
                            <div class="farmlistdetail_name">
                                <p class="title">名稱</p>
                                <p>台南麻豆文旦</p>
                                <p>本月熱賣!屏東香蕉</p>
                                <p>本月熱賣!屏東香蕉</p>
                                <p>保證有甜!屏東甘蔗</p>
                            </div>
                            <div class="farmlistdetail_price">
                                <p class="title">價格</p>
                                <p>$50</p>
                                <p>$50</p>
                                <p>$50</p>
                                <p>$60</p>
                            </div>
                            <div class="farmlistdetail_amount">
                                <p class="title">數量</p>
                                <p>10</p>
                                <p>10</p>
                                <p>10</p>
                                <p>10</p>
                            </div>
                            <div class="farmlistdetail_subtotal">
                                <p class="title">小計</p>
                                <p>$500</p>
                                <p>$500</p>
                                <p>$500</p>
                                <p>$600</p>
                            </div>
                        </div>
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
<script>
    import $ from "jquery";
    export default {
        mounted() {
            var i = 0;
            $(".list_slide").click(function () {
                if (i == 0) {
                    $("#ploygon").css("transform", "rotateX(180deg)");
                    i = 1;
                } else {
                    $("#ploygon").css("transform", "rotateX(0deg)");
                    i = 0;
                }

                $(".slide").toggleClass("display");
            });
        }
    };
</script>