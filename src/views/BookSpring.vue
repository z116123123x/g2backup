<template>
  <div class="bk_Spring">
    <div class="bk_season_index">
      <div class="bk_season">
        <h5>春季目錄</h5>
        <div class="bk_season_img">
          <img src="@/assets/book_img/flower_ct.svg" />
        </div>
        <div class="bk_season_img">
          <img src="@/assets/book_img/flower_ct.svg" />
        </div>
        <div class="bk_season_img">
          <img src="@/assets/book_img/flower_ct.svg" />
        </div>
      </div>
      <div class="bk_season_pic">
        <div class="bk_season_pic1">
          <img src="@/assets/book_img/spring/plum/plum04.jpg" alt />
          <span>梅子</span>
        </div>
        <div class="bk_season_pic1">
          <img src="@/assets/book_img/spring/plum/plum04.jpg" alt />
          <span>李子</span>
        </div>
        <div class="bk_season_pic1">
          <img src="@/assets/book_img/spring/plum/plum04.jpg" alt />
          <span>桃子</span>
        </div>
        <div class="bk_season_pic1">
          <img src="@/assets/book_img/spring/plum/plum04.jpg" alt />
          <span>琵琶</span>
        </div>
      </div>
    </div>
    <component :is="currentTab"></component>
    <button v-for="tab in tabs" :key="tab.id" @click="toggleTab(tab)">{{tab.name}}</button>
  </div>
</template>
<script>
import before from "@/views/BookSpringPage1";
import after from "@/views/BookSpringPage2";
export default {
  data() {
    return {
      currentTab: "before",
      tabs: [
        {
          name: "上一頁",
          index: "before",
          id: 1
        },
        {
          name: "下一頁",
          index: "after",
          id: 2
        }
      ]
    };
  },
  methods: {
    toggleTab: function(tab) {
      this.currentTab = tab.index;
    }
  },
  components: {
    before,
    after
  }
};
</script>