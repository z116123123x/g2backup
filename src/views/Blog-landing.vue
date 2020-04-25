<template>
  <div style="padding-top:3%;">
    <img style="width:100%" src="../assets/blog-img/blog-bar.png" /><br />
    <div class="blog-landing-container">
      <div>
        <div>
          <img style="padding:10px" src="../assets/blog-img/blog-logo.png" />
        </div>
        <div>
          <div>
            <div>
              <img src="@/assets/blog-img/blog-dot.png" alt="" />
              <span>旅遊</span>
            </div>
            <div>
              <img src="@/assets/blog-img/blog-dot.png" alt="" />
              <span>水果知識</span>
            </div>
            <div>
              <img src="@/assets/blog-img/blog-dot.png" alt="" />
              <span>農民樂</span>
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
          <div>
            <img
              style="width:100%;"
              src="@/assets/blog-img/blog-someoneshead.png"
              alt=""
            />
          </div>
          <div>
            <span
              style="background-color: #F8c7f1;padding:3px;font-size:15px;margin-bottom: 10px;display:inline-block;"
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
          <div style="border-bottom:1px solid #007552; padding-top:10px;"></div>
          <div style="border-bottom:1px solid #007552; padding-top:10px;"></div>
          <div style="border-bottom:1px solid #007552; padding-top:10px;"></div>
        </div>
        <div>
          <a href="">其他文章連結</a>
          <a href="">其他文章連結</a>
          <a href="">其他文章連結</a>
        </div>
      </div>

      <div>
        <div>
          <div style="justify-self:end; padding:10px 100px 0px 0px;">
            <img src="@/assets/blog-img/blog-tag.png" alt="" />
            <span>草莓</span>
            <img src="@/assets/blog-img/blog-tag.png" alt="" />
            <span>旅遊日誌</span>
          </div>
          <div style="font-size:15px;">2020-04-10</div>
          <div style="padding-top:10px;font-size:20px;">
            <span style="background-color: #f8c7f1;"
              >“ 親子輕旅行 台北白石湖採草莓、踏青一日遊”</span
            >
          </div>
          <div style="padding:30px 10px 30px 10px;">
            <img src="@/assets/blog-img/blog-bendingbar2.png" alt="" />
          </div>
          <div>
          <img src="@/assets/blog-img/blog-collection.png" alt="">
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
  border: solid #007552 2px;

  margin-top: 1%;
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  > div:nth-child(1) {
      background-color: #ecdeb6;
      border-right: solid #007552 2px;
    > div:nth-child(1) {
      text-align: center;
      display: grid;
      grid-template-columns: 0.5fr 1fr 1fr;
      padding: 20px;
      padding-top: 30%;
      > div:nth-child(2) {
        padding-top: 0px;
      }
      > div:nth-child(3) {
        padding-top: 15px;
        > span {
          padding: 5px;
        }
      }
    }
    > div:nth-child(2) {
      display: grid;
      grid-template-columns: 1fr;
      padding-top: 20%;
      justify-items: center;
      > a {
        background-color: #f8c7f1;
        text-align: center;
        line-height: 1.5;
        margin-top: 10px;
        text-decoration: none;
        color: black;
        font-size: 15px;
      }
    }
  }
  > div:nth-child(2) {
    > div {
      display: grid;
      grid-template-columns: 1fr;
      border: goldenrod 3px solid;
      padding: 50px;
    }
  }
}
</style>
