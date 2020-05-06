<template>
  <div class="bk_Spring">
    <component :is="currentTab"></component>
    <div class="change_bookpage">
      <div v-for="tab in tabs" :key="tab.id" :class="'changebutton' + tab.class">
        <button @click="toggleTab(tab)"></button>
      </div>
    </div>
  </div>
</template>
<script>
import before from "@/views/BookSeasonPage1";
import after from "@/views/BookSeasonPage2";
export default {
  data() {
    return {
      currentTab: "before",
      tabs: [
        {
          name: "上一頁",
          index: "before",
          class: "left",
          id: 1
        },
        {
          name: "下一頁",
          index: "after",
          class: "right",
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
