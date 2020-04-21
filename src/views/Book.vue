<template>
    <main>
        <section id="Page_horizen">
            <div id="outter">
                <!-- 左page -->
                <div id="book_left">
                    <div class="bk_left">
                        <div class="bk_left_img">
                            <img src="../assets/book_img/bookRighPage_img1t.svg" />
                        </div>
                        <div class="bk_right_img">
                            <img src="../assets/book_img/bookRightPage_img2.svg" />
                        </div>
                    </div>
                </div>
                <!-- 右page -->
                <div class="book_middle"></div>
                <div id="book_right">
                    <!-- 標籤 -->
                    <div class="bookContain">
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
                                <div class="pagepaper"></div>
                                <div class="pagepaper"></div>
                            </div>
                            <!-- bookcontent書籍內容 -->
                            <div id="bk_content">
                                <!-- <div class="bk_ct"></div>
                                <div class="bk_ct_R"></div>
                                <div class="bk_ct"></div>
                                <div class="bk_ct"></div>-->
                            </div>
                            <!-- 右切換按鈕 -->
                            <div class="Change_Button">
                                <div class="pagepaper"></div>
                                <div class="pagepaper"></div>
                                <div class="pagepaper"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer></footer>
    </main>
</template>