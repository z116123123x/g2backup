import $ from "jquery";

window.addEventListener("load", function(){
        var x=0;
        $("button.btn_drawer").on("click", function(){
          
          if(x == 0){
            $('aside.left').css("transform","translateX(0%)");
            x=1;
          }else{
            $('aside.left').css("transform","translateX(-93%)");
            x=0;
          }
          
        });
      

});