<template>
  <div class="login">
    <div class="welcome">
      <div class="movebox">
        <div class="signup nodisplay">
          <img class="signuptitle" src="@/assets/memberlogin/Group 362.png" alt />
          <form class="less-padding" autocomplete="off">
              <div class="formarea">
                  <div class="formtext">
                  <label>帳號:</label>
                  <br>
                  <label>密碼:</label>
                  <br>
                  <label>再次輸入密碼:</label>
                  <br>
                  <label>e-mail:</label>
              </div>
            <form class="forminputbox">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </form>
              </div>
            
            
            <div class="signupsubmit">
              <p>註冊</p>
            </div>
          </form>
        </div>
        <div class="signin">
          <img class="logintitle" src="@/assets/memberlogin/Group 363.png" alt />
          <form class="more-padding" autocomplete="off">
            <span>帳號:</span>
            <input type="text" placeholder="請輸入帳號" />
            <br />
            <span>密碼:</span>
            <input type="text" placeholder="請輸入密碼" />
            <br />
            <div class="signinsubmit">
              <p>登入</p>
            </div>
          </form>
        </div>
      </div>
      <div class="leftbox">
        <h1>已經是果粉了?</h1>
        <img class="loginbutton" id="signin" src="@/assets/login.png" alt />
      </div>
      <div class="rightbox">
        <h1>還不是果粉嗎?</h1>
        <img class="signupbutton" id="signup" src="@/assets/signup.png" alt />
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import $ from "jquery";
export default {
  mounted() {
    $("#signup").click(function() {
      $(".movebox").css("transform", "translateX(80%)");
      $(".signin").toggleClass("nodisplay");
      $(".signup").removeClass("nodisplay");
    });

    $("#signin").click(function() {
      $(".movebox").css("transform", "translateX(-10%)");
      $(".signup").addClass("nodisplay");
      $(".signin").removeClass("nodisplay");
    });
  }
};
</script>