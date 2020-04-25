<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {

  methods: {

    goAdminPage: () => {

      window.location.href = "admin.html";
    }
  }
};
</script>
