<template>
  <main class="wrapper">
    <section class="show_item">
      <div class="market_header">
        <div class="market_title"></div>
      </div>
      <div class="show_item-content">
        <div class="shop-imgbox">
          <img
            src="../assets/shop/market_showImg_line.svg"
            alt=""
            class="box-line"
          />
          <img
            src="../assets/shop/market_showImg_behind.svg"
            alt=""
            class="box-bottom"
          />
          <img src="../assets/shop/item_001.png" alt="" class="box-item" />
          <img
            src="../assets/shop/market_showImg_front.svg"
            alt=""
            class="box-top"
          />
        </div>
        <div class="show_item-text">
          <div class="show_item-content-box">
            <div class="item-title"><span>愛文芒果2.5公斤/箱</span></div>
            <div class="item-money"><p>NT $1890</p></div>
            <div class="item-content-box">
              <div class="item-card_tag">
                <img
                  src="../assets/icon/tag.svg"
                  alt
                  width="16px"
                  height="16px"
                  class="item-tag_icon"
                />
                <span class="item-card_tag_text">24hr宅配到府</span>

                <img
                  src="../assets/icon/tag.svg"
                  alt
                  width="16px"
                  height="16px"
                  class="item-tag_icon"
                />
                <span class="item-card_tag_text">芒果</span>
              </div>
              <p class="item-content-text">
                2020年頂級愛文芒果 愛文マンゴー(アップルマンゴー)
                嚴選台灣出產高甜度愛文芒果，為夏季芒果推薦 “TOP 1”
                因果皮紅潤且果肉金黃，又有“太陽果”之稱。
              </p>
              <div class="item_buy-box">
                <a href="#" class="item_btn">加入購物籃</a>
                <a href="#" class="item_btn">直接購買</a>
              </div>
              <div class="details-box">
                <a href="#" class="product-details">商品詳情</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="search-wrapper">
      <img
        src="../assets/search_logo_img.svg"
        width="170px"
        height="100px"
        class="search_logo"
      />
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

    <section class="shop_main">
      <div class="shop_container">
        <aside class="filter-panel">
          <img
            src="../assets/market_choose_right_mountain_only.svg"
            class="mountain"
          />
          <div class="filter-status">
            <div class="filter-status_text">條件篩選</div>
          </div>
          <form class="filter-group">
            <div class="filter-group_header">運送方式：</div>
            <div class="folding-items">
              <div class="checkbox-filter">
                <input type="checkbox" id="24hour" />
                <label class="checkbox_label">24hr宅配到府</label>
              </div>
              <div class="checkbox-filter">
                <input type="checkbox" id="home" />
                <label class="checkbox_label">宅配到府</label>
              </div>
              <div class="checkbox-filter">
                <input type="checkbox" id="store" />
                <label class="checkbox_label">超商取貨</label>
              </div>
            </div>
          </form>
          <form class="filter-group">
            <div class="filter-group_header">分類：</div>
            <div class="folding-items">
              <div class="checkbox-filter">
                <input type="checkbox" id="gift_box" />
                <label class="checkbox_label">禮盒</label>
              </div>
              <div class="checkbox-filter">
                <input type="checkbox" id="promotion" />
                <label class="checkbox_label">促銷商品</label>
              </div>
              <div class="checkbox-filter">
                <input type="checkbox" id="coming_soon" />
                <label class="checkbox_label">即將放送</label>
              </div>
              <div class="checkbox-filter">
                <input type="checkbox" id="machining" />
                <label class="checkbox_label">加工產品</label>
              </div>
              <div class="checkbox-filter">
                <input type="checkbox" id="dried_fruit" />
                <label class="checkbox_label">果乾</label>
              </div>
              <div class="checkbox-filter">
                <input type="checkbox" id="fresh_fruit" />
                <label class="checkbox_label">新鮮水果</label>
              </div>
              <div class="checkbox-filter">
                <input type="checkbox" id="organic_fruit" />
                <label class="checkbox_label">有機水果</label>
              </div>
            </div>
          </form>
        </aside>

        <div class="search-item-result_items">
          <div class="dropdown-box-flex">
            <div class="dropdown-box">
              <label class="dropdown" for="states">最新商品</label>
              <div class="button dropdown-content">
                <select id="colorselector">
                  <option value="price-high-to-low">價錢高到低</option>
                  <option value="high-to-low">評價高到低</option>
                  <option value="new-to old" selected>由新到舊</option>
                </select>
              </div>
            </div>
          </div>
          <div class="commodity-flex">
            <div class="commodity">
              <div class="card_img_box">
                <img
                  src="../assets/ia_300000017.jpg"
                  width="270px"
                  height="100%"
                  title="蜜蕉乾 零添加"
                />
              </div>

              <div class="card_content">
                <div class="commodity_title">
                  <div class="commodity_title_text">蜜蕉乾 零添加</div>
                </div>

                <div class="card_tag">
                  <img
                    src="../assets/icon/tag.svg"
                    alt
                    width="16px"
                    height="16px"
                    class="tag_icon"
                  />
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
            <div class="commodity">
              <div class="card_img_box">
                <img
                  src="../assets/ia_300000017.jpg"
                  width="270px"
                  height="100%"
                />
              </div>

              <div class="card_content">
                <div class="commodity_title">
                  <div class="commodity_title_text">蜜蕉乾 零添加</div>
                </div>

                <div class="card_tag">
                  <img
                    src="../assets/icon/tag.svg"
                    alt
                    width="16px"
                    height="16px"
                    class="tag_icon"
                  />
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
            <div class="commodity">
              <div class="card_img_box">
                <img
                  src="../assets/ia_300000017.jpg"
                  width="270px"
                  height="100%"
                />
              </div>

              <div class="card_content">
                <div class="commodity_title">
                  <div class="commodity_title_text">蜜蕉乾 零添加</div>
                </div>

                <div class="card_tag">
                  <img
                    src="../assets/icon/tag.svg"
                    alt
                    width="16px"
                    height="16px"
                    class="tag_icon"
                  />
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
            <div class="commodity">
              <div class="card_img_box">
                <img
                  src="../assets/ia_300000017.jpg"
                  width="270px"
                  height="100%"
                />
              </div>

              <div class="card_content">
                <div class="commodity_title">
                  <div class="commodity_title_text">蜜蕉乾 零添加</div>
                </div>

                <div class="card_tag">
                  <img
                    src="../assets/icon/tag.svg"
                    alt
                    width="16px"
                    height="16px"
                    class="tag_icon"
                  />
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
            <div class="commodity">
              <div class="card_img_box">
                <img
                  src="../assets/ia_300000017.jpg"
                  width="270px"
                  height="100%"
                />
              </div>

              <div class="card_content">
                <div class="commodity_title">
                  <div class="commodity_title_text">蜜蕉乾 零添加</div>
                </div>

                <div class="card_tag">
                  <img
                    src="../assets/icon/tag.svg"
                    alt
                    width="16px"
                    height="16px"
                    class="tag_icon"
                  />
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
            <div class="commodity">
              <div class="card_img_box">
                <img
                  src="../assets/ia_300000017.jpg"
                  width="270px"
                  height="100%"
                />
              </div>

              <div class="card_content">
                <div class="commodity_title">
                  <div class="commodity_title_text">蜜蕉乾 零添加</div>
                </div>

                <div class="card_tag">
                  <img
                    src="../assets/icon/tag.svg"
                    alt
                    width="16px"
                    height="16px"
                    class="tag_icon"
                  />
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
          </div>
        </div>

        <aside class="hot_commodity">
          <div class="hot_commodity_filter-status">
            <div class="hot_commoditystatus_text">
              <img
                src="../assets/market_choose_right_mountain_only.svg"
                class="mountain"
              />
              明星商品
            </div>
          </div>
          <div class="hot_commodity_group">
            <div class="hot_commodity_items">
              <span>1</span>
              <div class="hot_commodity_bg">
                <div class="hot_commodity_text">木瓜乾 零添加</div>
              </div>
            </div>
            <div class="hot_commodity_items">
              <span>2</span>
              <div class="hot_commodity_bg">
                <div class="hot_commodity_text">木瓜乾 零添加</div>
              </div>
            </div>
            <div class="hot_commodity_items">
              <span>3</span>
              <div class="hot_commodity_bg">
                <div class="hot_commodity_text">木瓜乾 零添加</div>
              </div>
            </div>
            <div class="hot_commodity_items">
              <span>4</span>
              <div class="hot_commodity_bg">
                <div class="hot_commodity_text">木瓜乾 零添加</div>
              </div>
            </div>
            <div class="hot_commodity_items">
              <span>5</span>
              <div class="hot_commodity_bg">
                <div class="hot_commodity_text">木瓜乾 零添加</div>
              </div>
            </div>
          </div>
          <div class="hot_commodity_filter-status">
            <div class="hot_commoditystatus_text">明星農民</div>
          </div>
          <div class="hot_commodity_seller seller_topborder">
            <a href="#"
              ><div class="seller_box">
                <img
                  src="../assets/howhow.jpg"
                  alt=""
                  height="40"
                  width="40"
                  style="border-radius: 40px;"
                /></div
            ></a>
            <div class="seller_content">
              <div class="seller_content-box">
                <p>內湖金城武</p>
                <div class="star-box">
                  <img
                    src="../assets/icon/star.svg"
                    alt=""
                    width="14"
                    height="14"
                  />
                  <img
                    src="../assets/icon/star.svg"
                    alt=""
                    width="14"
                    height="14"
                  />
                  <img
                    src="../assets/icon/star.svg"
                    alt=""
                    width="14"
                    height="14"
                  />
                  <img
                    src="../assets/icon/star.svg"
                    alt=""
                    width="14"
                    height="14"
                  />
                  <img
                    src="../assets/icon/star.svg"
                    alt=""
                    width="14"
                    height="14"
                  />
                </div>
              </div>
              <div class="track-btn">＋追蹤</div>
            </div>
          </div>
          <div class="hot_commodity_seller">
            <a href="#"
              ><div class="seller_box">
                <img
                  src="../assets/howhow.jpg"
                  alt=""
                  height="40"
                  width="40"
                  style="border-radius: 40px;"
                /></div
            ></a>
            <div class="seller_content">
              <div class="seller_content-box">
                <p>內湖金城武</p>
                <div class="star-box">
                  <img
                    src="../assets/icon/star.svg"
                    alt=""
                    width="14"
                    height="14"
                  />
                  <img
                    src="../assets/icon/star.svg"
                    alt=""
                    width="14"
                    height="14"
                  />
                  <img
                    src="../assets/icon/star.svg"
                    alt=""
                    width="14"
                    height="14"
                  />
                  <img
                    src="../assets/icon/star.svg"
                    alt=""
                    width="14"
                    height="14"
                  />
                  <img
                    src="../assets/icon/star.svg"
                    alt=""
                    width="14"
                    height="14"
                  />
                </div>
              </div>
              <div class="track-btn">＋追蹤</div>
            </div>
          </div>
          <div class="hot_commodity_seller seller_topborder">
            <a href="#"
              ><div class="seller_box">
                <img
                  src="../assets/howhow.jpg"
                  alt=""
                  height="40"
                  width="40"
                  style="border-radius: 40px;"
                /></div
            ></a>
            <div class="seller_content">
              <div class="seller_content-box">
                <p>內湖金城武</p>
                <div class="star-box">
                  <img
                    src="../assets/icon/star.svg"
                    alt=""
                    width="14"
                    height="14"
                  />
                  <img
                    src="../assets/icon/star.svg"
                    alt=""
                    width="14"
                    height="14"
                  />
                  <img
                    src="../assets/icon/star.svg"
                    alt=""
                    width="14"
                    height="14"
                  />
                  <img
                    src="../assets/icon/star.svg"
                    alt=""
                    width="14"
                    height="14"
                  />
                  <img
                    src="../assets/icon/star.svg"
                    alt=""
                    width="14"
                    height="14"
                  />
                </div>
              </div>
              <div class="track-btn">＋追蹤</div>
            </div>
          </div>
          <div class="hot_commodity_seller seller_topborder">
            <a href="#"
              ><div class="seller_box">
                <img
                  src="../assets/howhow.jpg"
                  alt=""
                  height="40"
                  width="40"
                  style="border-radius: 40px;"
                /></div
            ></a>
            <div class="seller_content">
              <div class="seller_content-box">
                <p>內湖金城武</p>
                <div class="star-box">
                  <img
                    src="../assets/icon/star.svg"
                    alt=""
                    width="14"
                    height="14"
                  />
                  <img
                    src="../assets/icon/star.svg"
                    alt=""
                    width="14"
                    height="14"
                  />
                  <img
                    src="../assets/icon/star.svg"
                    alt=""
                    width="14"
                    height="14"
                  />
                  <img
                    src="../assets/icon/star.svg"
                    alt=""
                    width="14"
                    height="14"
                  />
                  <img
                    src="../assets/icon/star.svg"
                    alt=""
                    width="14"
                    height="14"
                  />
                </div>
              </div>
              <div class="track-btn">＋追蹤</div>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <nav class="Page_navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item page-left">
          <a class="page-link" href="#">
            <img
              src="../assets/prouduct_button_left.svg"
              alt=""
              height="40"
              width="30"
            />
          </a>
        </li>
        <li class="page-item pageborder">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">4</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">5</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">6</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">7</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">8</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">9</a>
        </li>
        <li class="page-item page-right">
          <a class="page-link" href="#">
            <img
              src="../assets/product_button_right.svg"
              alt=""
              height="40"
              width="30"
            />
          </a>
        </li>
      </ul>
    </nav>
    <div class="footer-box">
      <Footer />
    </div>
  </main>
</template>
<script>
// import "../js/shop";
export default {};
</script>
