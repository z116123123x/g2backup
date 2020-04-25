<template>
  <div style="padding-top:5%;">
    <img style="width:100%" src="@/assets/blog-img/blog-bar.png" /><br />
    <div class="blog-post-container">
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
    <div class="blog-post-container2">
      <div>
        <!--main-->
        <div>
          <div>
            <img src="@/assets/blog-img/post/basket.png" alt="" />
          </div>
          <div>
            <div>
              <form action="" method="get">
                <input style="padding:10px;border:#007552 solid 2px;border-radius:50px;" placeholder="水果知識" type="text" />
              </form>
            </div>
            <div>
              <span>周末親子旅遊</span>
              <span>桃園山區採果</span>
              <span>桃園山區採果</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <!-- tags&leaderblard-->
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.blog-post-container {
  padding-top: 1%;
  width: 95%;
  margin-left: 2.5%;
  > div:nth-child(1) {
    width: 95%;
    margin-left: 2.5%;
    display: grid;
    grid-template-columns: 78% 22%;
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

.blog-post-container2 {
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  padding-top: 5%;
  padding-left: 6%;
  > div:nth-child(1) {
    //main
    > div:nth-child(1) {
      display: grid;
      grid-template-columns: 0.3fr 1fr;
      >div:nth-child(2){//input//search
        display: grid;
        grid-template-columns: repeat(1,1fr);
        align-items: end;
        >div:nth-child(1){
          //search input
        }
        >div:nth-child(2){
          //keyword
          align-self: center;
        }
      }
    }
  }
  > div:nth-child(2) {
    //tags&leaderboard
  }
}
</style>
