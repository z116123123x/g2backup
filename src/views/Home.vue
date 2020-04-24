<template>
  <div id="test" class="home">
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import "@/home";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
