import {
    TweenMax
} from "gsap";
import ScrollMagic from "scrollmagic";

// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
// require('../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js');
// require('../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js');

let scroll = TweenMax.to('.move_img', 1, {
    x: 100
});

window.addEventListener("load", () => {

    var controller = new ScrollMagic.Controller({
        vertical: false
    });

    new ScrollMagic.Scene({
        triggerElement: '#tripper', //觸發點
        triggerHook: 0.5, //觸發點位置//1-瀏覽器最底部...只能輸入0~1範圍內
        offset: 1000, //2-場景---從哪裡開始觸發動畫
        reverse: true, //反轉
        duration: 400, //....在這段距離裡完成動畫

    }).setTween(scroll).addTo(controller);
});