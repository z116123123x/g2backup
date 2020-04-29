<template>
  <div id="app">
    <div id="index_front_container">
      <div class="front_LOGO">
        <img src="@/assets/headerLOGO.svg" alt="" />
      </div>
      <div class="front_button">
        <button @click="goIndexPage">前台</button>
        <button class="back_button" @click="goAdminPage">後台</button>
      </div>
      <div class="front_container_cloud">
        <img src="@/assets/index_img/front_page_cloud.svg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goIndexPage: () => {
      window.location.href = "/main";
    },
    goAdminPage: () => {
      window.location.href = "/admin";
    },
  },
};
</script>
