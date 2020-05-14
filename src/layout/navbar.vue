<template>
  <nav id="nav">
    <router-link id="home" to="/main">
      <img class="logo" src="@/assets/headerLOGO.svg" alt="logo" />
    </router-link>
    <div class="member_status">
      <span class="farmer_pic"></span>
      <span>{{userName}}</span>
      <!-- 檢查登入的狀態 -->
      <router-link
        class="login_logout"
        to="/loginMember"
        v-if="status == false && session != true"
      >登入/註冊</router-link>
      <button class="logout" v-else @click="logout">登出</button>
    </div>
    <div class="cart">
      <router-link class="page" to="/main/member/shopping"></router-link>
    </div>
    <div class="hamburger hamburger--elastic">
      <div class="hamburger-box">
        <div class="hamburger-inner"></div>
      </div>
    </div>
    <div class="nav_back">
      <ul>
        <li class="dropdown">
          <div class="title">
            <router-link class="page" to="/main/book/bookIndex">
              <div class="title_pic">
                <img src="@/assets/knowledge.svg" alt />
              </div>
              <div class="title_text">
                <h1 class="title_text_h1">知識百科</h1>
                <br />
                <p style="margin-top:10px;">台灣產季水果介紹，</p>
                <p>在地小農知識心得分享，</p>
                <p>盡在知識百科。</p>
              </div>
            </router-link>
          </div>
        </li>
        <li class="dropdown">
          <div class="title">
            <router-link class="page" to="/main/shop">
              <div class="title_pic">
                <img src="@/assets/market.svg" alt />
              </div>
              <div class="title_text">
                <h1 class="title_text_h1">水果市集</h1>
                <br />
                <p style="margin-top:10px;">台灣產季水果介紹，</p>
                <p>在地小農知識心得分享，</p>
                <p>盡在知識百科。</p>
              </div>
            </router-link>
          </div>
        </li>
        <li class="dropdown">
          <div class="title">
            <router-link class="page" to="/main/blog">
              <div class="title_pic">
                <img src="@/assets/blog.svg" alt />
              </div>
              <div class="title_text">
                <h1 class="title_text_h1">果農日誌</h1>
                <br />
                <p style="margin-top:10px;">台灣產季水果介紹，</p>
                <p>在地小農知識心得分享，</p>
                <p>盡在知識百科。</p>
              </div>
            </router-link>
          </div>
        </li>
        <li class="dropdown">
          <div class="title">
            <router-link class="page" to="/main/member/information">
              <div class="title_pic">
                <img src="@/assets/membercenter.svg" alt />
              </div>
              <div class="title_text">
                <h1 class="title_text_h1">會員中心</h1>
                <br />
                <p style="margin-top:10px;">台灣產季水果介紹，</p>
                <p>在地小農知識心得分享，</p>
                <p>盡在知識百科。</p>
              </div>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  // 5. 接收父層的 memberStatus 的值
  props: ["memberStatus"],
  data() {
    return {
      status: false,
      userName: ""
    };
  },
  mounted() {
    const api = "/api/api_memberStatus.php";

    this.$http
      .post(api)
      .then(res => {
        const data = res.data;

        // 如果 session 的資料存在（代表有登入），則切換 navbar 果粉狀態
        if (data != "") {
          this.status = true;
          this.userName = data.name;
        }
      })
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  },
  computed: {
    session: function() {
      // 6. 偵聽到 memberStatus 有變動，觸發 login 方法，並回傳值到上面v-if狀態的顯示判斷

      this.login();
      return this.memberStatus;
    }
  },
  methods: {
    logout() {
      const api = "/api/api_memberLogout.php";

      this.$http.post(api);

      this.status = false;
      this.userName = "";

      // a. 傳遞 logout 的值到父層
      this.$emit("logout", false);

      this.$router.push("/main");
    },
    login() {
      const api = "/api/api_memberStatus.php";

      this.$http
        .post(api)
        .then(res => {
          const data = res.data;

          // 如果 session 的資料存在（代表有登入），則切換 navbar 果粉狀態
          if (data != "") {
            this.status = true;
            this.userName = data.name;
          }
        })
        // eslint-disable-next-line no-console
        .catch(err => console.log(err));
    }
  }
};
</script>