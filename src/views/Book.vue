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
            <div class="bk_right_img" id="move_img">
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
                  <p class="book_link" @click="changeType(5)">總目錄</p>
                </div>
                <ul class="tag">
                  <li
                    v-for="(item, index) in tabs"
                    :id="index"
                    :key="item.id"
                    @click="changeType(item.type)"
                  >
                    {{item.name}}
                    <!-- <router-link class="book_link" :to="'/main/book/'+ item.path">{{item.name}}</router-link> -->
                  </li>
                </ul>
              </div>
              <!-- book本體 -->
              <div class="Book">
                <!-- 左切換按鈕 -->
                <div class="page_decoration">
                  <div class="pagepaper"></div>
                  <div class="pagepaper"></div>
                  <div class="pagepaper"></div>
                </div>
                <!-- bookcontent書籍內容 -->
                <div id="bk_content" :class="type">
                  <Content v-if="change == false" :contentIndex="index"></Content>
                  <Index v-if="change == true"></Index>
                  <!-- <router-view /> -->
                  <!-- fruit_knowledge -->
                </div>
                <!-- 右切換按鈕 -->
                <div class="page_decoration">
                  <div class="pagepaper"></div>
                  <div class="pagepaper"></div>
                  <div class="pagepaper"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div id="book_footer">
                <Footer />
      </div>-->
    </section>
    <!-- <div id="book_footer">
                <Footer />
    </div>-->
  </div>
</template>
<script>
import "@/js/book";
import Index from "@/views/BookIndex";
import Content from "@/views/BookContent";
export default {
  data() {
    return {
      tabs: [
        {
          name: "春季",
          type: 0
        },
        {
          name: "夏季",
          type: 1
        },
        {
          name: "秋季",
          type: 2
        },
        {
          name: "冬季",
          type: 3
        },
        {
          name: "常年",
          type: 4
        }
      ],
      i: 0,
      top: 0,
      type: "spring",
      index: 0,
      change: true
    };
  },
  mounted() {
    window.addEventListener("scroll", this.imgMoveToRight, true);
  },
  methods: {
    imgMoveToRight() {
      const el = document.getElementById("Page_horizen").scrollTop;

      if (el > this.top) {
        this.top = el;
        this.i++;
        document.getElementById("move_img").style = `left:${this.i}%;`;
      } else if (el < this.top) {
        this.top = el;
        this.i--;
        document.getElementById("move_img").style = `left:${this.i}%;`;
      }
    },
    changeType: function(t) {
      if (t == 0) {
        this.type = "spring";
        this.index = 0;
        this.change = false;
      } else if (t == 1) {
        this.type = "summer";
        this.index = 1;
        this.change = false;
      } else if (t == 2) {
        this.type = "full";
        this.index = 2;
        this.change = false;
      } else if (t == 3) {
        this.type = "winter";
        this.index = 3;
        this.change = false;
      } else if (t == 4) {
        this.type = "year";
        this.index = 4;
        this.change = false;
      } else if (t == 5) {
        this.type = "index";
        this.change = true;
      }
    }
  },
  components: {
    Content,
    // eslint-disable-next-line vue/no-unused-components
    Index
  }
};
</script>

