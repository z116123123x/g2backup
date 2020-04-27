<template>
  <div class="msContainer">
    <div class="msFrame">
      <aside class="msSideBar">
        <ul>
          <li>
            <router-link to="/manage/center">管理員管理</router-link>
          </li>
          <li>
            <router-link to="/manage/fan">果粉管理</router-link>
          </li>
          <li>
            <router-link to="/manage/seller">果農管理</router-link>
          </li>
          <li>
            <router-link to="/manage/ency">知識百科管理</router-link>
          </li>
          <li>
            <router-link to="/manage/blog">果農日誌管理</router-link>
          </li>
          <li>
            <router-link to="/manage/comment">日誌留言管理</router-link>
          </li>
        </ul>
      </aside>
      <router-view />
    </div>
  </div>
</template>

