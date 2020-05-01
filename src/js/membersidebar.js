import $ from "jquery";

window.addEventListener("load", function(){
    $(function(){

        // 點擊
        $("button.btn_drawer").on("click", function(){
          // -open 的樣式切換
          $(this).closest("aside.right_sidebar").toggleClass("-open");
        });
      
      });
})