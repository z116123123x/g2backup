<template>
  <div class="fruit_start">
    <h1 style="color:#f6d16b;" class="summer_fruit_title">西瓜</h1>
    <div class="summer_pic">
      <div>
        <img id="big" src="@/assets/book_img/spring/plum/plum01.jpg" />
      </div>
      <ul>
        <li>
          <img src="@/assets/book_img/spring/plum/plum01.jpg" @click="changeImg($event)" />
        </li>
        <li>
          <img src="@/assets/book_img/spring/plum/plum06.jpg" @click="changeImg($event)" />
        </li>
        <li>
          <img src="@/assets/book_img/spring/plum/plum03.jpg" @click="changeImg($event)" />
        </li>
        <li>
          <img src="@/assets/book_img/spring/plum/plum07.jpg" @click="changeImg($event)" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: { type: Number, page: Number },
  methods: {
    changeImg: function(e) {
      const path = e.target.src;
      const img = document.getElementById("big");

      img.src = path;
    }
  }
};
</script>