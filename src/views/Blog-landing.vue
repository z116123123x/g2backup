<template>
  <div style="padding-top:3%;">
    <img style="width:100%" src="@/assets/blog-img/blog-bar.png" /><br />
    <div class="blog-landing-container">
      <div>
        <div>
          <img style="padding:10px" src="@/assets/blog-img/blog-logo.png" />
        </div>
        <div>
          <div>
            <div>
              <img src="@/assets/blog-img/blog-dot.png" alt="" />
              <span> </span>
              <span> 旅遊</span>
            </div>
            <div>
              <img src="@/assets/blog-img/blog-dot.png" alt="" />
              <span> </span>
              <span> 水果知識</span>
            </div>
            <div>
              <img src="@/assets/blog-img/blog-dot.png" alt="" />
              <span> </span>
              <span> 農民樂</span>
            </div>
          </div>
          <div>
            <span>20019/12/16 - 2020/06/05</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.blog-landing-container {
  padding-top: 1%;
  width: 95%;
  margin-left: 2.5%;
  > div:nth-child(1) {
    width: 95%;
    margin-left: 2.5%;
    display: grid;
    grid-template-columns: 70% 30%;
    font-size: 20px;
    > div:nth-child(2) {
      gap: 10px;
      justify-items: center;
      display: grid;
      position: relative;
      top: 30%;
      height: 60%;
      grid-template-columns: 1fr;
      > div:nth-child(1) {
        display: grid;
        grid-template-columns: 0.9fr 1.4fr 1fr;
        border-bottom: solid #007552 1px;
      }
      > div:nth-child(2) {
        border-bottom: solid #007552 1px;
        text-align: center;
      }
    }
  }
}
</style>
