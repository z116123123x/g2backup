<template>
  <div id="body" class="adminLoginBody">
    <div id="body" class="adminLoginBox">
      <img class="titleImg" src="@/assets/adminLogin/adminLogin.png" alt />
      <form class="adminLoginForm" onsubmit="return false">
        <div class="form-item">
          <label class="adminLoginLabel">帳號</label>
          <div class="input-wrapper">
            <input
              class="adminLoginInput"
              type="text"
              id="username"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              spellcheck="false"
              data-lpignore="true"
            />
          </div>
        </div>
        <div class="form-item">
          <label class="adminLoginLabel">密碼</label>
          <div class="input-wrapper">
            <input
              class="adminLoginInput"
              type="password"
              id="password"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              spellcheck="false"
              data-lpignore="true"
            />
            <button class="adminLoginBtn" type="button" id="eyeball">
              <div class="eye"></div>
            </button>
            <div id="beam"></div>
          </div>
        </div>
        <button class="adminLoginBtn" id="submit">登入</button>
        <router-link class="adminLoginBtn" to="/adminManage">進入</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import "@/adminLogin";
export default {};
</script>