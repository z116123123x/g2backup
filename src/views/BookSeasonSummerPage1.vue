<template>
    <div class="book_layout">
        <div class="bk_ct bk_ct_left">
            <div class="fruit_start">
                <h1 style="color:#f6d16b;" class="summer_fruit_title">西瓜</h1>
                <div class="summer_pic">
                    <div>
                        <img id="big" src="@/assets/book_img/spring/plum/plum01.jpg" />
                    </div>
                    <ul>
                        <li>
                            <img
                                src="@/assets/book_img/spring/plum/plum01.jpg"
                                @click="changeImg($event)"
                            />
                        </li>
                        <li>
                            <img
                                src="@/assets/book_img/spring/plum/plum06.jpg"
                                @click="changeImg($event)"
                            />
                        </li>
                        <li>
                            <img
                                src="@/assets/book_img/spring/plum/plum03.jpg"
                                @click="changeImg($event)"
                            />
                        </li>
                        <li>
                            <img
                                src="@/assets/book_img/spring/plum/plum07.jpg"
                                @click="changeImg($event)"
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <div class="fruit_intro">
                <p>
                    西瓜香甜多汁，消暑解渴，被稱為「夏季瓜果之王」。水分含量佔西瓜整體約94%，不含脂肪和膽固醇，卻具備許多人體所需的營養素。傳統中醫認為西瓜味甘、性寒，助於解暑、止渴、開胃、利尿等。不僅瓜肉，瓜皮與瓜子同樣可食用及藥用，不過由於水分多，中醫建議傍晚之後應少吃西瓜，以免呼吸與消化系統受影響。另外，最虛弱、體質虛寒者也要盡量避免食用。
                    臺灣地處熱帶及亞熱帶，氣候與環境適合西瓜生長，產地遍及全臺，主要產區為花蓮、雲林、臺南、宜蘭、屏東等。近年來許多縣市舉辦西瓜節，如花蓮鳳林、苗栗後龍、苗栗白沙屯、彰化、雲林二崙，民眾可以品嘗到當地西瓜的美味、欣賞西瓜果雕、觀賞西瓜評鑑比賽、參加好玩的遊戲與DIY，並到鄰近景點半日、一日遊。
                </p>
            </div>
        </div>
        <div class="bk_ct bk_ct_right summer_bg">
            <h2>西瓜產季</h2>
            <div class="fruit_time summer_fruit_time">
                <ul>
                    <li>1月</li>
                    <li>2月</li>
                    <li>3月</li>
                    <li>4月</li>
                    <li>5月</li>
                    <li>6月</li>
                    <li>7月</li>
                    <li>8月</li>
                    <li>9月</li>
                    <li>10月</li>
                    <li>11月</li>
                    <li>12月</li>
                </ul>
                <div class="fruit_timeline"></div>
            </div>
            <div class="fruit_video">
                <video controls>
                    <source
                        src="https://www.youtube.com/watch?time_continue=9&v=oHbnP7yBgJo&feature=emb_logo
"
                        type="video/mp4"
                    />
                </video>
            </div>
            <div class="fruit_Q">
                <div class="fruit_question">
                    <h2>農知識</h2>
                    <h2>如何挑選美味西瓜？</h2>
                </div>
                <div class="fruit_A">
                    <p>
                        1.看外觀：選擇表面光滑完整、顏色青綠明亮、花紋清晰鮮明，果梗呈捲曲狀，瓜蒂部分些微凹陷者。
                        <br />
                        <br />2.拍果皮：聲音清脆響亮者為佳。
                    </p>
                    <div class="fruit_img">
                        <img src="@/assets/book_img/spring/plum/plum07.jpg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: { page: Number },
    methods: {
        content: function() {
            console.log(this.page);
        },
        changeImg: function(e) {
            
            const path = e.target.src;
            const img = document.getElementById("big");

            img.src = path;
        }
    }
};
</script>