<template>
  <div id="app">
    <!-- 4. 傳遞 memberStatus 的值（login）到子層 -->
    <!-- b. 接到子層的 logout 的值，傳進 checkLogin 方法 -->
    <Navbar :memberStatus="login" @logout="checkLogin" />
    <keep-alive>
      <!-- 2. 接到子層的 loginStatus 的值，傳進 checkLogin 方法 -->
      <router-view @loginStatus="checkLogin" />
    </keep-alive>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: false
    };
  },
  methods: {
    // 3. c. 接到 loginStatus 的值（status），傳給 login
    checkLogin(status) {
      this.login = status;
    }
  }
};
</script>
