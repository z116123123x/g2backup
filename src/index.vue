<template>
  <div id="app">
    <div id="index_front_container">
      <div class="front_LOGO">
        <img src="@/assets/headerLOGO.svg" alt="" />
      </div>

      <button class="btn_left" @click="goIndexPage">
        前台
        <div class="waterpear_top"></div>
      </button>
      <button class="btn_right" @click="goAdminPage">後台</button>
      <div class="front_background"></div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goIndexPage: () => {
      window.location.href = "./main";
    },
    goAdminPage: () => {
      window.location.href = "./admin";
    },
  },
};
</script>
