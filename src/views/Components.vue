<template>
  <div class="components">
    <p>/components/btn-more.vue</p>
    <br>
    <ButtonMore />
    <br>
    <br>
    <p>/layout/footer.vue</p>
    <br>
    <Footer />
  </div>
</template>
<script>
import ButtonMore from "@/components/btn-more.vue";
import Footer from "@/layout/footer.vue";

export default {
  components: {
    ButtonMore,
    Footer
  }
};
</script>