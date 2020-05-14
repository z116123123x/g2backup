<template>
  <div class="membercontain">
    <aside class="left ">
      <div class="head_portrait">
        <div class="head_img_box">
          <img src="../assets/navbar_account_img.svg" alt />
        </div>
        <ul>
          <li><span>設定頭像</span></li>
          <li class="nick">暱稱:<span>台北暴徒</span></li>
          <li class="fans">身分別:<span>果粉</span></li>
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
            <button-more class="become_farmer" msg="成為果農"></button-more>
          </router-link>
        </div>
      </div>
      <div class="member_button">
        <div class="changefarm">
          切換果農
          <router-link to="/farm/info"> </router-link>
        </div>
      </div>
      <button type="button" class="btn_drawer">&#9658;</button>
    </aside>
    <router-view @update="update" />
  </div>
</template>

<script>
import $ from "jquery";
export default {
  mounted() {
    if (window.innerWidth < 768) {
      $("aside.left").addClass("popover");
      $("button.btn_drawer").on("click", function() {
        $("aside.left").toggleClass("popover");
      });
    }

    $(window).resize(function() {
      if (window.innerWidth < 768) {
        $("aside.left").addClass("popover");
        $("button.btn_drawer").on("click", function() {
          $("aside.left").toggleClass("popover");
        });
      } else {
        $("aside.left").removeClass("popover");
      }
    });
  },
  methods: {
    update: function(s) {
      // this.$emit("loginStatus", s);
    },
  },
};
</script>
