$(document).ready(function() {
  $('#navbar').hide();
  $('#middle-content').hide();
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    $('.logo_container').css({'opacity':((750-scroll)/750)})
    if (scroll > 250) {
      $("#scroll_down").fadeOut();
    }
    if (scroll > 365) {
      $('#navbar').fadeIn(800);
      $('#navbar').addClass("navbar-fixed-top");
    } else {
      $('#navbar').hide(800);
    }
    if (scroll > 1500) {
      $('#middle-content').fadeIn(900);
    }
  });
});