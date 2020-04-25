import {
    TweenMax
} from "gsap";


window.addEventListener("load", () => {

    TweenMax.to('.box3', 4, {
        x: 200,
        y: 300,
    });
});