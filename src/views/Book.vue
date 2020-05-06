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
                  <keep-alive>
                    <router-view />
                  </keep-alive>
                  <!-- fruit_knowledge -->
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
                                    <li class="tag0 tag1">
                                        <router-link class="book_link" to="/main/book/bookSpring">春季</router-link>
                                    </li>
                                    <li class="tag0 tag2">
                                        <router-link class="book_link" to="/main/book/bookSummer">夏季</router-link>
                                    </li>
                                    <li class="tag0 tag3">
                                        <router-link class="book_link" to="/main/book/bookFall">秋季</router-link>
                                    </li>
                                    <li class="tag0 tag4">
                                        <router-link class="book_link" to="/main/book/bookWinter">冬季</router-link>
                                    </li>
                                    <li class="tag0 tag5">
                                        <router-link class="book_link" to="/main/book/bookYear">常年</router-link>
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
                                    <keep-alive>
                                        <router-view />
                                    </keep-alive>

                                    <!-- 總目錄 -->
                                    <!-- fruit_index -->
                                    <!-- <div class="fruit_index">
                                        <div class="bk_content">
                                            <h5>春季</h5>
                                            <div class="bk_content_img">
                                                <img src="@/assets/book_img/flower_ct.svg" />
                                            </div>
                                            <ul>
                                                <li>梅子</li>
                                                <li>李子</li>
                                                <li>桃子</li>
                                                <li>琵琶</li>
                                            </ul>
                                        </div>
                                        <div class="bk_content">
                                            <h5>夏季</h5>
                                            <div class="bk_content_img">
                                                <img src="@/assets/book_img/binbo.svg" />
                                            </div>
                                            <ul>
                                                <li>西瓜</li>
                                                <li>火龍果</li>
                                                <li>荔枝</li>
                                                <li>芒果</li>
                                            </ul>
                                        </div>
                                        <div class="bk_content">
                                            <h5>秋季</h5>
                                            <div class="bk_content_img">
                                                <img src="@/assets/book_img/leaf.svg" />
                                            </div>
                                            <ul>
                                                <li>葡萄</li>
                                                <li>柿子</li>
                                                <li>柚子</li>
                                                <li>梨子</li>
                                            </ul>
                                        </div>
                                        <div class="bk_content">
                                            <h5>冬季</h5>
                                            <div class="bk_content_img">
                                                <img src="@/assets/book_img/snow.svg" />
                                            </div>
                                            <ul>
                                                <li>草莓</li>
                                                <li>橘子</li>
                                                <li>棗子</li>
                                                <li>番茄</li>
                                            </ul>
                                        </div>
                                        <div class="bk_content">
                                            <h5>常年</h5>
                                            <div class="bk_content_img">
                                                <img src="@/assets/book_img/leaf_year.svg" />
                                            </div>
                                            <ul>
                                                <li>木瓜</li>
                                                <li>鳳梨</li>
                                                <li>香蕉</li>
                                                <li>芭樂</li>
                                            </ul>
                                        </div>
                                    </div>-->
                                    <!-- <div class="change_bookpage">
                                        <div class="changebuttonleft">
                                            <button></button>
                                        </div>
                                        <div class="changebuttonright">
                                            <button></button>
                                        </div>
                                    </div> -->
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
