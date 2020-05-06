import $ from "jquery";

window.addEventListener("load", function(){
  $('#signup_button').click(function(){
    $('.movebox').css('transform', 'translateX(80%)');
    $('.signin').addClass('nodisplay');
    $('.signup').removeClass('nodisplay');
  });
    

  $('#signin_button').click(function(){
    $('.movebox').css('transform', 'translateX(80%)');
    $('.signin').addClass('nodisplay');
    $('.signup').removeClass('nodisplay');
  });

 


});
