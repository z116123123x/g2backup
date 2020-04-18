<template>
  <div class="components">
    <p>/components/btn-more.vue</p>
    <ButtonMore />
    <p>/layout/footer.vue</p>
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