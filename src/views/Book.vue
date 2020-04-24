<template>
    <main>
        <section id="Page_horizen">
            <div id="outter">
                <!-- 左page -->
                <div id="book_left">
                    <div class="bk_left">
                        <div class="bk_left_img">
                            <img src="@/assets/book_img/bookRighPage_img1t.svg" />
                        </div>
                        <div class="bk_right_img">
                            <img src="@/assets/book_img/bookRightPage_img2.svg" />
                        </div>
                    </div>
                </div>
                <!-- 右page -->
                <div class="book_middle"></div>
                <div id="book_right">
                    <div class="bookContain">
                        <!-- 標籤 -->
                        <div class="book_tag">
                            <div class="index">總目錄</div>
                            <ul class="tag">
                                <li class="tag0 tag1">春季</li>
                                <li class="tag0 tag2">夏季</li>
                                <li class="tag0 tag3">秋季</li>
                                <li class="tag0 tag4">冬季</li>
                                <li class="tag0 tag5">常年</li>
                            </ul>
                        </div>
                        <!-- book本體 -->
                        <div class="Book">
                            <!-- 左切換按鈕 -->
                            <div class="Change_Button">
                                <div class="pagepaper"></div>
                                <div class="pagepaper">
                                    <div class="page_button Pbutton_right"></div>
                                </div>
                                <div class="pagepaper"></div>
                            </div>
                            <!-- bookcontent書籍內容 -->
                            <div id="bk_content">
                                <div class="bk_ct bk_ct_left">
                                    <div class="fruit_start">
                                        <h1>梅子</h1>
                                        <div class="fruit_start_img">
                                            <div class="img_content">
                                                <img src="@/assets/book_img/spring/plum/plum04.jpg" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="fruit_intro">
                                        <!-- <h2>梅子介紹</h2> -->
                                        <p>梅子是亞洲特有的果樹，除了灣、日本和韓國之外，其他地區很少栽種。梅子的風味以清酸稱絕，滿口生津而別有風味，和一般水果講求香、甜有所不同。梅子所含的果酸較多，如果生食未成熟的青梅會造成腸胃不適，經過醃漬、曝晒加工之後更適合食用。梅子的加工品項多樣，除梅乾、蜜餞、脆梅、梅醬等，也能用來釀酒。梅子內有豐富檸檬酸、蘋果酸等有機酸，蛋白質的含量更是草莓、柑桔的兩倍以上。台灣的梅子主要栽種在中央山脈兩側，以南投信義鄉、水里鄉的產量最多，信義鄉更有「梅子鄉」的雅稱。</p>
                                    </div>
                                </div>
                                <div class="bk_ct bk_ct_right">
                                    <!-- 水果產季週期 -->
                                    <h2>梅子產季</h2>
                                    <div class="fruit_time">
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
                                        <video autoplay controls>
                                            <source src="@/assets/video/plum.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                    <div class="fruit_Q">
                                        <h2>農知識</h2>
                                        <h2 style="margin-left:40px;">為什麼梅子和李子的英文都是plum？</h2>
                                        <div class="fruit_A">
                                            <p>梅子和李子都是植物學中薔薇科李屬中的植物，在「種」的位階上還有李、桃、杏等水果相互區分。因為梅子是亞洲特有種，西方並沒有為梅創造單字，稱它為是亞洲李Asian plum。</p>
                                            <div class="fruit_img">
                                                <img
                                                    src="@/assets/book_img/spring/plum/plum05.jpg"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 右切換按鈕 -->
                            <div class="Change_Button">
                                <div class="pagepaper"></div>
                                <div class="pagepaper">
                                    <div class="page_button Pbutton_left"></div>
                                </div>
                                <div class="pagepaper"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="book_footer">
            <Footer />
        </section>
    </main>
</template>
<script>
import Footer from "@/layout/footer";
export default {
    components: {
        Footer
    }
};
</script>