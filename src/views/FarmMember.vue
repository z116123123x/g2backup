<template>
  <div class="contain">
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
            <router-link to="/member/information">個人資料修改</router-link>
          </li>
          <li>
            <router-link to="/member/order">商品管理</router-link>
          </li>
          <li>
            <router-link to="/member/track">日誌管理</router-link>
          </li>
          <li>
            <router-link to="/member/track">訂單查詢</router-link>
          </li>
        </ul>
      </div>

      <div class="farm_button">
        <div class="farm">
          <router-link to="/main/member/information">
            <p>切換果粉</p>
          </router-link>
        </div>
      </div>
    </aside>
    <router-view />
  </div>
</template>
