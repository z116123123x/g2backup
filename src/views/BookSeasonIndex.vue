<template>
  <div class="book_layout">
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
        <div class="bk_season_pic_package">
          <div class="bk_season_pic1" v-for="i in type[contentType].item" :key="i.name">
            <img src="../assets/book_img/spring/plum/plum04.jpg" alt />
            <span>{{i.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["contentType"],
  data() {
    return {
      type: [
        {
          item: [
            {
              name: "梅子",
              img: "plum04.jpg"
            },
            {
              name: "李子",
              img: "plum04.jpg"
            },
            {
              name: "桃子",
              img: "plum04.jpg"
            },
            {
              name: "琵琶",
              img: "plum04.jpg"
            }
          ]
        },
        {
          item: [
            {
              name: "西瓜",
              img: "plum04.jpg"
            },
            {
              name: "芒果",
              img: "plum04.jpg"
            },
            {
              name: "火龍果",
              img: "plum04.jpg"
            },
            {
              name: "荔枝",
              img: "plum04.jpg"
            }
          ]
        },
        {
          item: [
            {
              name: "西瓜",
              img: "plum04.jpg"
            },
            {
              name: "芒果",
              img: "plum04.jpg"
            },
            {
              name: "火龍果",
              img: "plum04.jpg"
            },
            {
              name: "荔枝",
              img: "plum04.jpg"
            }
          ]
        },
        {
          item: [
            {
              name: "西瓜",
              img: "plum04.jpg"
            },
            {
              name: "芒果",
              img: "plum04.jpg"
            },
            {
              name: "火龍果",
              img: "plum04.jpg"
            },
            {
              name: "荔枝",
              img: "plum04.jpg"
            }
          ]
        },
        {
          item: [
            {
              name: "西瓜",
              img: "plum04.jpg"
            },
            {
              name: "芒果",
              img: "plum04.jpg"
            },
            {
              name: "火龍果",
              img: "plum04.jpg"
            },
            {
              name: "荔枝",
              img: "plum04.jpg"
            }
          ]
        }
      ]
    };
  }
};
</script>