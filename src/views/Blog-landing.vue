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
    <div class="blog-landing-container2">
      <div>
        <div>
          <img
            style="width:100%;"
            src="@/assets/blog-img/blog-someoneshead.png"
            alt=""
          />
        </div>
        <div>
          <span
            style="background-color: #F4ABE9;padding:3px;font-size:15px;margin-bottom: 10px;display:inline-block;"
            >蓬蓬草莓姨</span
          >
          <div>
            <img style="width: 20px;" src="@/assets/blog-img/blog-star.png" />
            <img style="width: 20px;" src="@/assets/blog-img/blog-star.png" />
            <img style="width: 20px;" src="@/assets/blog-img/blog-star.png" />
            <img style="width: 20px;" src="@/assets/blog-img/blog-star.png" />
            <img style="width: 20px;" src="@/assets/blog-img/blog-star.png" />
          </div>
        </div>
        <div>
          <span
            style="background-color: #007552;border-radius: 20px;color:#FFF;font-size:15px;"
            >+追蹤</span
          >
        </div>
      </div>
      <div></div>
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
    grid-template-columns: 82% 18%;
    font-size: 20px;
    > div:nth-child(2) {
      gap: 10px;
      // justify-items: center;
      display: grid;
      position: relative;
      top: 30%;
      height: 60%;
      grid-template-columns: 1fr;
      > div:nth-child(1) {
        display: flex;
        // grid-template-columns: 0.9fr 1.4fr 1fr;
        text-align: center;
        justify-content: space-around;
        border-bottom: solid #007552 1px;
      }
      > div:nth-child(2) {
        border-bottom: solid #007552 1px;
        text-align: center;
      }
    }
  }
}
.blog-landing-container2 {
  width: 95%;
  margin-left: 2.5%;
  border: solid #007552 1.5px;

  margin-top: 1%;
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  > div:nth-child(1) {
    text-align: center;
    background-color: #ecdeb6;
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr;
    padding: 20px;
    padding-top: 30%;
    > div:nth-child(2) {
      padding-top: 15px;
    }
    > div:nth-child(3) {
      padding-top: 25px;
      > span {
        padding: 10px;
      }
    }
  }
}
</style>
