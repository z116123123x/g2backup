<template>
  <div class="btn-bg">
    <button class="btn-more">{{msg}}</button>
  </div>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      required: false,
      default() {
        return "請在標籤內加入 msg = '按鈕文字'";
      }
    }
  }
};
</script>