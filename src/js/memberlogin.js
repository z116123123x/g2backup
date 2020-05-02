import $ from "jquery";

window.addEventListener("load", function(){
  $('.rightbox').click(function() {
    $('.movebox').css('transform', 'translateX(80%)');
    $('.loginbutton').toggleClass('nodisplay');
    $('.signupbutton').removeClass('nodisplay');
  });
  
  $('.rightbox').click(function() {
    $('.movebox').css('transform', 'translateX(0%)');
    $('.loginbutton').addClass('nodisplay');
    $('.signupbutton').removeClass('nodisplay');
  });

 


});

$('#signup').click(function() {
  $(this).hide();
});