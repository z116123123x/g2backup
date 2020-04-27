import {
    TweenMax
} from "gsap";


window.addEventListener("load", () => {

    TweenMax.to('move_img', 1, {
        x: 900,
        y: 400,
    });
});