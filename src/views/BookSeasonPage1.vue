<template>
  <div class="book_layout">
    <div class="bk_ct bk_ct_left">
      <div class="fruit_start">
        <h1>梅子</h1>
        <div class="fruit_start_img">
          <div class="img_content">
            <img src="@/assets/book_img/spring/plum/plum04.jpg" alt />
          </div>
        </div>
      </div>
      <div class="fruit_intro">
        <p>梅子是亞洲特有的果樹，除了灣、日本和韓國之外，其他地區很少栽種。梅子的風味以清酸稱絕，滿口生津而別有風味，和一般水果講求香、甜有所不同。梅子所含的果酸較多，如果生食未成熟的青梅會造成腸胃不適，經過醃漬、曝晒加工之後更適合食用。梅子的加工品項多樣，除梅乾、蜜餞、脆梅、梅醬等，也能用來釀酒。梅子內有豐富檸檬酸、蘋果酸等有機酸，蛋白質的含量更是草莓、柑桔的兩倍以上。台灣的梅子主要栽種在中央山脈兩側，以南投信義鄉、水里鄉的產量最多，信義鄉更有「梅子鄉」的雅稱。</p>
      </div>
    </div>
    <div class="bk_ct bk_ct_right">
      <h2>梅子產季</h2>
      <div class="fruit_time">
        <ul>
          <li>1月</li>
          <li>2月</li>
          <li>3月</li>
          <li>4月</li>
          <li>5月</li>
          <li>6月</li>
          <li>7月</li>
          <li>8月</li>
          <li>9月</li>
          <li>10月</li>
          <li>11月</li>
          <li>12月</li>
        </ul>
        <div class="fruit_timeline"></div>
      </div>
      <div class="fruit_video">
        <video controls>
          <source src="@/assets/video/plum.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="fruit_Q">
        <div class="fruit_question">
          <h2>農知識</h2>
          <h2>為什麼梅子和李子的英文都是plum？</h2>
        </div>
        <div class="fruit_A">
          <p>
            梅子和李子都是植物學中薔薇科李屬中的植物，在「種」的位階上還有李、桃、杏等水果相互區分。因為梅子是亞洲特有種，西方並沒有為梅創造單字，稱它為是亞洲李Asian
            plum。
          </p>
          <div class="fruit_img">
            <img src="@/assets/book_img/spring/plum/plum05.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: { page: Number },
  methods: {
    content: function() {
      console.log(this.page);
    }
  }
};
</script>