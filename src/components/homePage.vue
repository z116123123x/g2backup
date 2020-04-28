<template>
  <div id="test" class="hello">
    <main>
      <button id="scroll_btn"></button>
      <div id="mainLOGO">
        <img src="../assets/LOGO.svg" alt />
      </div>
      <div id="mainText">
        以「水果王國」名聞全世界的台灣，水果種類豐富，一年四季皆可嚐到新鮮可口的水果，但多數人可能不知道這些水果的產地、產季、甚至是色香味等等，因此希望能藉由我們的網站帶大家認識台灣獨特的水果文化。
      </div>
      <div id="knowledge_container">
        <div class="season">
          <div class="spring_tab tab -on" data-target="tab1">春</div>
          <div class="summer_tab tab" data-target="tab2">夏</div>
          <div class="fall_tab tab" data-target="tab3">秋</div>
          <div class="winter_tab tab" data-target="tab4">冬</div>
        </div>
        <div class="knowledge_page_parent">
          <div class="knowledge_page tab1 -on">
            <div class="knowledge_page_back">
              <div>1</div>
            </div>
          </div>
          <div class="knowledge_page tab2">
            <div class="knowledge_page_back">
              <div>2</div>
            </div>
          </div>
          <div class="knowledge_page tab3">
            <div class="knowledge_page_back">
              <div>3</div>
            </div>
          </div>
          <div class="knowledge_page tab4">
            <div class="knowledge_page_back">
              <div>4</div>
            </div>
          </div>
        </div>

        <button class="home_title">
          知識百科
        </button>
      </div>
      <div id="market_container">
        <button class="home_title">
          水果市集
        </button>
        <div id="market_page">
          <div class="market_pic">
            <img src="../assets/marketitem01.png" alt />
          </div>
          <div class="market_intro">
            <h3>蜜焦乾 零添加</h3>
            <div class="market_tags">
              <img src="../assets/tagspic.svg" alt />
              <a href>24小時宅配到府</a>
            </div>
            <div class="number_price">
              <input class="input_number" type="text" value="1" min="0" />
              <span class="input_number_select">
                <button class="plus_number">+</button>
                <button class="minus_number">-</button>
              </span>
              <span>$ 250/包</span>
            </div>
            <div class="pay_cart">
              <button>加入購物籃</button>
              <button>直接購買</button>
            </div>
          </div>
        </div>
      </div>
      <div id="blog_container">
        <button class="home_title">
          果農日誌
        </button>
        <div id="blog_page">
          <div class="blog_tags_area">
            <h2>Tags</h2>
            <div>
              <img src="../assets/tagspic.svg" alt />
              <span>果農心得</span>
            </div>
            <div>
              <img src="../assets/tagspic.svg" alt />
              <span>水果產品</span>
            </div>
            <div>
              <img src="../assets/tagspic.svg" alt />
              <span>旅遊日誌</span>
            </div>
            <div>
              <img src="../assets/tagspic.svg" alt />
              <span>水果知識</span>
            </div>
          </div>
        </div>
      </div>
      <div id="member_container">
        <button class="home_title">
          果農日誌
        </button>
        <div id="member_page">
          <img src="../assets/memberpic.png" alt />
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {};
</script>
