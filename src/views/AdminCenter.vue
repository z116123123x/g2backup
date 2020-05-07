<template>
  <div class="msContainer">
    <div class="msFrame">
      <aside class="msSideBar">
       
        <ul>
        <img class="mng_logo" src="@/assets/LOGO.svg" alt />
          <li>
            <router-link to="/center/manage">管理員管理</router-link>
          </li>
          <li>
            <router-link to="/center/fan">果粉管理</router-link>
          </li>
          <li>
            <router-link to="/center/seller">果農管理</router-link>
          </li>
          <li>
            <router-link to="/center/ency">知識百科管理</router-link>
          </li>
          <li>
            <router-link to="/center/blog">果農日誌管理</router-link>
          </li>
          <li>
            <router-link to="/center/comment">日誌留言管理</router-link>
          </li>
        </ul>
      </aside>
      <router-view />
    </div>
  </div>
</template>

