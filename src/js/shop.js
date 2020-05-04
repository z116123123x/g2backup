import $ from "jquery";
import { gsap, TweenMax, Power1, Power3, TimelineMax, Linear } from "gsap";


// window.addEventListener("load", init);


window.addEventListener("load", () => {
  //觸發明星商品方塊
  $(".hot_commodity_items").hover(function () {
    var tl = $(this);
    TweenMax.to(tl, 0.5, {
      x: -25,
      width: "100% + 25px",
    });
    var tl2 = $(this).children(".hot_commodity_bg");
    TweenMax.to(tl2, 0.5, {
      autoAlpha: 0.5,
    });
    var tl3 = $(this).children(".hot_commodity_text");
    TweenMax.to(tl3, 0.5, {
      autoAlpha: 1,
    });
  });
  //返回明星商品原處
  $(".hot_commodity_items").mouseleave(function () {
    var tl = $(this);
    TweenMax.to(tl, 0.5, {
      x: 0,
      width: "100%",
    });
    var tl2 = $(this).children(".hot_commodity_bg");
    TweenMax.to(tl2, 0.5, {
      autoAlpha: 1,
    });
    var tl3 = $(this).children(".hot_commodity_text");
    TweenMax.to(tl3, 0.5, {
      autoAlpha: 0,
    });
  });
  //觸發追蹤商品效果
  $(".hot_commodity_seller").hover(function () {
    var howhow = $(this);
    TweenMax.to(howhow, 0.5, {
      x: -25,
      width: "100% + 25px",
    });
    var howhow2 = $(this).find(".track-btn");
    TweenMax.to(howhow2, 1, {
      x: 70,
      autoAlpha: 1,
    });
  });
  //反觸發追蹤商品效果
  $(".hot_commodity_seller").mouseleave(function () {
    var howhow = $(this);
    TweenMax.to(howhow, 0.5, {
      x: 0,
      width: "100%",
    });
    var howhow2 = $(this).find(".track-btn");
    TweenMax.to(howhow2, 1, {
      x: 0,
      autoAlpha: 0,
    });
  });
  //觸發按鈕效果
  $(".card_btn").hover(function () {
    var cbtn = $(this);
    TweenMax.to(cbtn, 0.3, {
      css: {
        backgroundColor: "#ffa978",
        color: "white",
      },
    });
  });
  //反觸發按鈕效果
  $(".card_btn").mouseleave(function () {
    var cbtn = $(this);
    TweenMax.to(cbtn, 0.3, {
      css: {
        backgroundColor: "#fbf8ef",
        color: "#007552",
      },
    });
  });
  //觸發item按鈕效果
  $(".item_btn").hover(function () {
    var ibtn = $(this);
    TweenMax.to(ibtn, 0.3, {
      css: {
        backgroundColor: "#ffa978",
        color: "white",
      },
    });
  });
  //商品效果
  $(".box-top").hover(function () {
    TweenMax.to(".shopItemImg", 0.5, {
      y: -30,
    });
  });
  //反觸發商品效果
  $(".box-top").mouseleave(function () {
    TweenMax.to(".shopItemImg", 0.5, {
      y: 0,
    });
  });

});




