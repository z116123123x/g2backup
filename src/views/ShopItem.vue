
<template>
  <main class="wrapper ItemWrapper">
    <div class="market_header" style="background-color: #fbf8ef;">
      <div class="market_title"></div>
    </div>

    <div class="search-wrapper">
      <img src="../assets/search_logo_img.svg" width="170px" height="100px" class="search_logo" />
      <div class="search-section">
        <div class="searchbar">
          <div class="searchbar_main">
            <form role="search" class="searchbar-input" autocomplete="off">
              <input
                class="searchbar-input_input"
                maxlength="128"
                placeholder="商品搜尋..."
                autocomplete="off"
              />
            </form>
            <button type="button" class="search_btn">
              <img
                src="../assets/icon/search_icon.svg"
                class="search_icon"
                width="20px"
                height="20px"
              />
            </button>
          </div>
          <div class="hot-words">
            <div class="hot-words_list">
              <a class="hot-words_item" href>週末親子旅遊</a>
              <a class="hot-words_item" href>桃園山區採果</a>
              <a class="hot-words_item" href>富士蘋果</a>
              <a class="hot-words_item" href>愛文芒果</a>
              <a class="hot-words_item" href>大湖草莓</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="blog_line_box"></div>

    <section class="CommodityWrapper">
      <div class="CommodityContent">
        <div class="CommodityContentImgBox">
          <div class="CommodityContentImgMain">
            <img src="../assets/shop/ia_300000013.jpg" alt class="CommodityContentImg" />
          </div>
          <div class="CommodityContentImgChangeBox">
            <img src="../assets/ia_300000017.jpg" alt class="CommodityContentChangeImg" />
            <img src="../assets/ia_300000011.jpg" alt class="CommodityContentChangeImg" />
          </div>
        </div>
        <div class="CommodityContenText">
          <div class="CommodityContenTextBox">
            <div class="CommodityTitle">
              <h1>木瓜乾 零添加</h1>
            </div>

            <div class="CommodityNarrative">
              <p>無添加ドライフルーツ．パパイヤ</p>
              <p>特選台南大內產木瓜，低溫乾燥且完全無添加</p>
              <p>果肉柔滑、香氣濃郁，像是吃到一杯木瓜牛奶</p>
            </div>

            <div class="CommodityInformation">
              產地：
              <span>台灣南部</span>
            </div>

            <div class="CommodityInformation">
              常溫保存：
              <span>6個月</span>
            </div>

            <div class="CommodityInformation">
              容量：
              <span>30公克</span>
            </div>

            <div class="CommodityInformation">
              成份：
              <span>新鮮木瓜</span>
            </div>

            <div class="CommodityFocus">
              <p>第55屆金馬獎指定貴賓禮品</p>
              <p>榮獲A.A「亞太無添加美食」評鑑最高榮譽三星獎</p>
              <p>旅遊觀光局頒發台南好物標章</p>
              <p>國際幾呎熱賣免稅商品</p>
            </div>

            <div class="CommodityItemMoneyBox">
              <span class="CommodityItemMoney">550</span>
            </div>

            <div class="CommodityItemBuyBox">
              <a href="#" class="CommodityItemBuyBtn">加入購物籃</a>Î
              <a href="#" class="CommodityItemBuyBtn Buynow">直接購買</a>
            </div>

            <div class="CommodityDetailsBox">
              <h2 class="CommodityDetailsTitle">商品詳情：</h2>
              <p>2020年頂級愛文芒果 愛文ドライマンゴー （アップルマンゴー）嚴選台灣出產高甜度愛文芒果，為夏季芒果推薦“TOP 1” 因果皮紅潤且果肉金黃，又有“太陽果”之稱。</p>
            </div>

            <div class="CommodityDetailsBox">
              <h2 class="CommodityDetailsTitle">商品敘述：</h2>
              <div class="CommodityDetailsTextBox">
                產地：
                <span>台灣</span>
              </div>
              <div class="CommodityDetailsTextBox">
                保存期限：
                <span>6個月</span>
              </div>
              <div class="CommodityDetailsTextBox">
                庫存數量：
                <span>10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="SellerInformationBox">
        <div class="SellerInformation">
          <img
            src="../assets/shop/BenjaminAidoo.jpg"
            alt
            height="60px"
            width="60px"
            style="border-radius: 100%;"
          />
          <p>Benjamin Aidoo</p>
          <div class="TrackBtn">＋追蹤</div>
        </div>
        <div class="SellerReviewsBox">
          <div class="SellerReviews">
            <div class="Reviews">5.0</div>
            <div class="StarBox">
              <img src="../assets/icon/star.svg" alt width="20" height="20" />
              <img src="../assets/icon/star.svg" alt width="20" height="20" />
              <img src="../assets/icon/star.svg" alt width="20" height="20" />
              <img src="../assets/icon/star.svg" alt width="20" height="20" />
              <img src="../assets/icon/star.svg" alt width="20" height="20" />
            </div>
          </div>
        </div>
        <div class="SellerInformationTextBox">
          <p>
            Owner and founder of Nana Otafrija
            Creator of the Coffin Dance
            humble and kind person
          </p>
        </div>
      </div>
    </section>

    <!--輪播-->
    <div id="carouselWrap">
      <ul id="CommodityCarouselList">
        <li class="CommodityCarouselConten">
          <div class="CommodityCarousel commodity">
            <div class="card_img_box">
              <img src="../assets/ia_300000017.jpg" width="100%" height="100%" title="蜜蕉乾 零添加" />
            </div>

            <div class="card_content">
              <div class="commodity_title">
                <div class="commodity_title_text">蜜蕉乾 零添加</div>
              </div>

              <div class="card_tag">
                <img src="../assets/icon/tag.svg" alt width="16px" height="16px" class="tag_icon" />
                <span class="card_tag_text">24hr宅配到府</span>
              </div>

              <div class="card_price">
                <span class="money">550</span>
              </div>

              <div class="buy">
                <a href="#" class="card_btn">加入購物籃</a>
                <a href="#" class="card_btn">直接購買</a>
              </div>
            </div>
          </div>
        </li>
        <li class="CommodityCarousel">
          <div class="CommodityCarouselConten commodity">
            <div class="card_img_box">
              <img src="../assets/ia_300000017.jpg" width="100%" height="100%" title="蜜蕉乾 零添加" />
            </div>

            <div class="card_content">
              <div class="commodity_title">
                <div class="commodity_title_text">蜜蕉乾 零添加</div>
              </div>

              <div class="card_tag">
                <img src="../assets/icon/tag.svg" alt width="16px" height="16px" class="tag_icon" />
                <span class="card_tag_text">24hr宅配到府</span>
              </div>

              <div class="card_price">
                <span class="money">550</span>
              </div>

              <div class="buy">
                <a href="#" class="card_btn">加入購物籃</a>
                <a href="#" class="card_btn">直接購買</a>
              </div>
            </div>
          </div>
        </li>
        <li class="CommodityCarousel">
          <div class="CommodityCarouselConten commodity">
            <div class="card_img_box">
              <img src="../assets/ia_300000017.jpg" width="100%" height="100%" title="蜜蕉乾 零添加" />
            </div>

            <div class="card_content">
              <div class="commodity_title">
                <div class="commodity_title_text">蜜蕉乾 零添加</div>
              </div>

              <div class="card_tag">
                <img src="../assets/icon/tag.svg" alt width="16px" height="16px" class="tag_icon" />
                <span class="card_tag_text">24hr宅配到府</span>
              </div>

              <div class="card_price">
                <span class="money">550</span>
              </div>

              <div class="buy">
                <a href="#" class="card_btn">加入購物籃</a>
                <a href="#" class="card_btn">直接購買</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <!--導航按鈕-->
      <div id="naDiv">
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
      </div>
      <!--左右按鍵-->
      <a class="arrow arrow-left" href="javascript:;">&lt;</a>
      <a class="arrow arrow-right" href="javascript:;">&gt;</a>
    </div>

    <!-- <div class="footer-box">
      <Footer />
    </div>-->
  </main>
</template>

<script>
import $ from "jquery";
import { gsap, TweenMax, Power1, Power3, TimelineMax, Linear } from "gsap";
export default {
  mounted() {}
};
</script>
