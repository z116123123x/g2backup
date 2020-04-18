<template>
  <div class="home">
    <HelloWorld msg="這是 ./components/HelloWorld.vue 範例頁面"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
