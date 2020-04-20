<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">
        <img class="logo" src="./assets/navbar_logo.svg" alt="logo" />
      </router-link>
      <ul>
        <li class="dropdown">
          <div class="title">
            <router-link class="page" to="/about">知識百科</router-link>
          </div>
        </li>
        <li class="dropdown">
          <div class="title">
            <router-link class="page" to="/components">Components</router-link>
          </div>
        </li>
        <li class="dropdown">
          <div class="title">
            <router-link class="page" to="/blog">Components</router-link>
          </div>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>
<script>
import "@/style/main.scss";

export default {};
</script>
