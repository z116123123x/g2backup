<template>
  <div class="bk_Spring">
    <component :page="currentTab.page" :is="currentTab.index"></component>
    <div class="change_bookpage">
      <div v-for="tab in tabs" :key="tab.name" :class="'changebutton' + tab.class">
        <button v-if="tab.status == true" @click="toggleTab(tab)"></button>
      </div>
    </div>
  </div>
</template>
<script>
import index from "@/views/BookSeasonIndex";
import page1 from "@/views/BookSeasonPage1";
import page2 from "@/views/BookSeasonPage2";
export default {
  data() {
    return {
      currentTab: [],
      tabs: [
        {
          name: "上一頁",
          class: "left",
          status: false
        },
        {
          name: "下一頁",
          class: "right",
          status: true
        }
      ]
    };
  },
  created() {
    this.currentTab = {
      index: "index",
      page: 0
    };
  },
  methods: {
    toggleTab: function(tab) {
      // 頁面邏輯判斷
      if (this.currentTab.page == 0) {
        this.currentTab.index = "page1";
        this.currentTab.page = 1;
      } else if (
        this.currentTab.page > 0 &&
        this.currentTab.index == "page1" &&
        tab.name == "下一頁"
      ) {
        this.currentTab.index = "page2";
        this.currentTab.page++;
      } else if (
        this.currentTab.page > 0 &&
        this.currentTab.index == "page2" &&
        tab.name == "下一頁"
      ) {
        this.currentTab.index = "page1";
        this.currentTab.page++;
      } else if (
        this.currentTab.page == 1 &&
        this.currentTab.index == "page1" &&
        tab.name == "上一頁"
      ) {
        this.currentTab.index = "index";
        this.currentTab.page--;
      } else if (
        this.currentTab.page > 0 &&
        this.currentTab.index == "page1" &&
        tab.name == "上一頁"
      ) {
        this.currentTab.index = "page2";
        this.currentTab.page--;
      } else if (
        this.currentTab.page > 0 &&
        this.currentTab.index == "page2" &&
        tab.name == "上一頁"
      ) {
        this.currentTab.index = "page1";
        this.currentTab.page--;
      }
      // 按鈕顯示切換
      if (this.currentTab.page == 1) {
        this.tabs[0].status = true;
      } else if (this.currentTab.page == 0) {
        this.tabs[0].status = false;
      }
    }
  },
  components: {
    index,
    page1,
    page2
  }
};
</script>
