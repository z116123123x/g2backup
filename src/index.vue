<template>
  <div id="app">
    <button @click="goIndexPage">前台</button>
    <button @click="goAdminPage">後台</button>
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
    }
  }
};
</script>
