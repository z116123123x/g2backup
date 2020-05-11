import $ from "jquery";

window.addEventListener("load", function(){
        
        $("button.btn_drawer").on("click", function(){
          var x=0;
          if(x == 0){
            $('aside.left').css("transform","translateX(0%)");
            x=1;
          }else{
            $('aside.left').css("transform","translateX(-93%)");
            x=0;
          }
          
        });
        
});