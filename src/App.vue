<template>
  <div id="app">
    <nav id="nav">
      <router-link id="home" to="/">
        <img class="logo" src="@/assets/navbar_logo.svg" alt="logo" />
      </router-link>
      <div class="member_status">
        <span class="farmer_pic"></span>
        <span>果農</span>
        <a href="">登出</a>
      </div>
      <div class="cart">
        <span></span>
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
              <router-link class="page" to="/book">
                <div class="title_pic">
                  <img src="@/assets/knowledge.svg" alt="" />
                </div>
                <div class="title_text">
                  <h1>知識百科</h1>
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
              <router-link class="page" to="/Components">
                <div class="title_pic">
                  <img src="@/assets/knowledge.svg" alt="" />
                </div>
                <div class="title_text">
                  <h1>components</h1>
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
              <router-link class="page" to="/Shop">
                <div class="title_pic">
                  <img src="@/assets/market.svg" alt="" />
                </div>
                <div class="title_text">
                  <h1>水果市集</h1>
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
              <router-link class="page" to="/Blog-landing">
                <div class="title_pic">
                  <img src="@/assets/blog.svg" alt="" />
                </div>
                <div class="title_text">
                  <h1>果農日誌</h1>
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
              <router-link class="page" to="/Member">
                <div class="title_pic">
                  <img src="@/assets/membercenter.svg" alt="" />
                </div>
                <div class="title_text">
                  <h1>會員中心</h1>
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
              <router-link class="page" to="/AdminLogin">
                <div class="title_pic">
                  <img src="@/assets/knowledge.svg" alt="" />
                </div>
                <div class="title_text">
                  <h1>後台</h1>
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
    <router-view />
  </div>
</template>
<script>
export default {};
</script>
