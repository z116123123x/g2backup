<template>
  <div class="book_main">
    <section id="Page_horizen">
      <div id="outter">
        <!-- 左page -->
        <div id="book_left">
          <div class="bk_left">
            <div class="bk_left_img">
              <img src="@/assets/book_img/bookRighPage_img1t.svg" />
            </div>
            <div class="bk_right_img move_img">
              <img src="@/assets/book_img/bookRightPage_img2.svg" />
            </div>
          </div>
        </div>
        <!-- 右page -->
        <div class="book_middle"></div>
        <div id="book_right">
          <div class="bookContain">
            <div class="bkbk_content">
              <!-- 標籤 -->
              <div class="book_tag">
                <div class="index">
                  <router-link class="book_link" to="/main/book/bookIndex">總目錄</router-link>
                </div>
                <ul class="tag">
                  <li v-for="(item, index) in tabs" :id="index" :key="item.id">
                    <router-link class="book_link" :to="'/main/book/'+ item.path">{{item.name}}</router-link>
                  </li>
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
                  <router-view />
                  <!-- fruit_knowledge -->
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
      </div>
    </section>
  </div>
</template>
<script>
import "@/js/book";
export default {
  data() {
    return {
      tabs: [
        {
          name: "春季",
          path: "bookSpring"
        },
        {
          name: "夏季",
          path: "bookSummer"
        },
        {
          name: "秋季",
          path: "bookFall"
        },
        {
          name: "冬季",
          path: "bookWinter"
        },
        {
          name: "常年",
          path: "bookYear"
        }
      ]
    };
  }
};
</script>
