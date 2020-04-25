<template>
  <div id="test" class="home">
    <homePage />
  </div>
</template>

<script>
// @ is an alias to /src
import homePage from "@/components/homePage";
import "@/js/home";

export default {
  name: "Home",
  components: {
    homePage
  }
};
</script>
