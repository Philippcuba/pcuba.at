
jQuery(document).ready(function() {

//-------------------//
//--BACK-TOP-BUTTON--//
//-------------------//

  var btn = $('.back-top_button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

//---------------------//
//-------BURGER--------//
//---------------------//

  $(".header-menu_burger").on("click", function() {
    $(".header-menu_menu").slideDown(150);
    $(".header-menu_x").css("opacity", "1")
  })

  $(".header-menu_x").on("click", function() {
    $(".header-menu_menu").slideUp(150);
    $(".header-menu_x").css("opacity", "0")
  });
});
