<template>
  <nav id="nav">
    <router-link id="home" to="/main">
      <img class="logo" src="@/assets/headerLOGO.svg" alt="logo" />
    </router-link>
    <div class="member_status">
      <span class="farmer_pic"></span>
      <span></span>
      <router-link class="login_logout" to="/loginMember">登入/註冊</router-link>
      <!-- <button class="logout">登出</button> -->
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
            <router-link class="page" to="/main/blog-landing">
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
  data() {
    return {};
  },
  created() {
    const api = "/api/api_memberStatus.php";

    this.$http
      .post(api, JSON.stringify(this.member))
      .then(res => {
        const data = res.data;

        if (data != "") {
          // eslint-disable-next-line no-console
          console.log("已經有登入過");
        }
      })
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  }
};
</script>