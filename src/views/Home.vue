<template>
  <div id="test" class="home">
    <homePage />
  </div>
</template>

<script>
// @ is an alias to /src
import "@/js/home";
import homePage from "@/components/homePage";

export default {
  name: "Home",
  components: {
    homePage
  }
};
</script>
