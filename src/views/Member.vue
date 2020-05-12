<template>
  <div class="membercontain">
    <aside class="left">
      <div class="head_portrait">
        <div class="head_img_box">
          <img src="../assets/navbar_account_img.svg" alt />
        </div>
        <ul>
          <li>設定頭像</li>
          <li class="nick">暱稱</li>
          <li class="fans">身分別:果粉</li>
        </ul>
      </div>

      <div class="info">
        <ul>
          <li>
            <router-link to="/main/member/information">個人資訊</router-link>
          </li>
          <li>
            <router-link to="/main/member/update">個人資料修改</router-link>
          </li>
          <li>
            <router-link to="/main/member/order">訂單管理</router-link>
          </li>
          <li>
            <router-link to="/main/member/track">追蹤名單管理</router-link>
          </li>
          <li>
            <router-link to="/main/member/shopping">購物籃</router-link>
          </li>
        </ul>
      </div>
      <div class="member_button">
        <div class="befarm">
          <router-link to="/main/member/farmRegistered">
            <p>成為果農</p>
          </router-link>
        </div>
      </div>
      <div class="member_button">
        <div class="changefarm">
          <router-link to="/farm/info">
            <p>切換果農</p>
          </router-link>
        </div>
      </div>
      <button type="button" class="btn_drawer">>></button>
    </aside>
    <router-view @update="update" />
  </div>
</template>

<script>
import $ from "jquery";
export default {
  mounted() {
    var x = 0;
    $("button.btn_drawer").on("click", function() {
      if (x == 0) {
        $("aside.left").css("transform", "translateX(0%)");
        x = 1;
      } else {
        $("aside.left").css("transform", "translateX(-93%)");
        x = 0;
      }
    });
  },
  methods: {
    update: function(s) {
      // this.$emit("loginStatus", s);
    }
  }
};
</script>