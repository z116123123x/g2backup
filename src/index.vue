<template>
  <div id="app">
    <div id="index_front_container">
      <div class="clouds">
        <img
          src="@/assets/cloudWhite.png"
          class="cloud big front slowest indexClouds"
        />
        <img
          src="@/assets/cloud2White.png"
          class="cloud distant smaller indexClouds"
        />

        <img
          src="@/assets/cloudGreen.png"
          class="cloud small slow indexClouds"
        />
        <img
          src="@/assets/cloudSkin.png"
          class="cloud distant super-slow massive indexClouds"
        />

        <img src="@/assets/cloudPink.png" class="cloud slower indexClouds" />
      </div>
      <!-- end of clouds -->

      <div class="front_LOGO">
        <img src="@/assets/headerLOGO.svg" alt />
      </div>

      <div id="btn_section">
        <button class="btn_left" @click="goIndexPage">
          前台
          <!-- <div class="waterpear_top"></div> -->
        </button>

        <button class="btn_right" @click="goAdminPage">後台</button>
      </div>

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
