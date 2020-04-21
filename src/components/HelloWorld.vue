<template>
  <div class="hello">
    <header>
      <div id="header">
        <a href="#">
          <img id="headerLOGO" src="../assets/headerLOGO.svg" />
        </a>
        <div id="memberStatus">
          <a href>
            <img src="../assets/headFarmer.svg" />
          </a>
          <a href>果農</a>
          <a href>登出</a>
        </div>
        <a href="#">
          <img id="headCart" src="../assets/headerCart.svg" />
        </a>
        <a id="hamburger_a" href="#">
          <div
            class="hamburger hamburger--collapse hamburger_set"
            aria-label="Menu"
            role="button"
            aria-controls="navigation"
          >
            <div class="hamburger-box">
              <div class="hamburger-inner"></div>
            </div>
          </div>
        </a>
      </div>
    </header>
    <main>
      <div id="knowledge_container">
        <div>
          <div class="knowledge_page tab1 -on">
            <div class="aa">
              <div>1</div>
            </div>
          </div>
          <div class="knowledge_page tab2">
            <div class="aa">
              <div>2</div>
            </div>
          </div>
          <div class="knowledge_page tab3">
            <div class="aa">
              <div>3</div>
            </div>
          </div>
          <div class="knowledge_page tab4">
            <div class="aa">
              <div>4</div>
            </div>
          </div>
        </div>
        <div id="knowledge_button" class="button">
          <a href="#">Learn more</a>
        </div>
        <div id="knowledge_title">
          <img src="../assets/knowledgetitle.svg" alt />
        </div>
        <div class="spring_tab tab -on" data-target="tab1">春</div>
        <div class="summer_tab tab" data-target="tab2">夏</div>
        <div class="fall_tab tab" data-target="tab3">秋</div>
        <div class="winter_tab tab" data-target="tab4">冬</div>
      </div>
      <div id="market_container">
        <div id="market_title">
          <img src="../assets/markettitle.svg" alt />
        </div>
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
        <div class="button">
          <a href="#">Learn more</a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import "../home";

export default {
  name: "HelloWorld",
};
</script>