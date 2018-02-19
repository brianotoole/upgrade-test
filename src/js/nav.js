// Mobile nav
$(document).ready(function() {
  var trigger = $("#js-nav-toggle");
  //var isClosed = false;
  trigger.click(function() {
    $("#js-nav-mobile").toggleClass("nav-open");
    $("body").toggleClass("nav-open");
    $("#js-nav-toggle, .nav-mobile-wrap li").toggleClass("active");
  });
});
// close nav-toggle on esc key press
$(document).keydown(function(e) {
  if (e.keyCode == 27) {
    $("#js-nav-mobile").removeClass("nav-open");
    $("body").removeClass("nav-open");
    $("#js-nav-toggle, .nav-mobile-wrap li").removeClass("active");
  }
});
