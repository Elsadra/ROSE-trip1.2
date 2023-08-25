$(document).ready(function () {
  let menu_hamburger = $(".menu-hamburger");
  let sub_menu = $(".sub-menu");
  let line_two = $(".line-two");
  let slider_sub_menu = $(".slider-sub-menu");

  var isOpen = false;
  menu_hamburger.click(function () {
    if (!isOpen) {
      isOpen = true;
      sub_menu.css({
        position: "fixed",
        right: "0%",
        transition: ".7s",
      });
      line_two.addClass("line-two-click").removeClass("line-two");
      slider_sub_menu.css({
        position: "fixed",
        right: "65%",
        transition: ".7s",
      })
    } else {
      isOpen = false;
      sub_menu.css({
        position: "fixed",
        right: "-65%",
        transition: ".7s",
      });
      line_two.addClass("line-two").removeClass("line-two-click");
      slider_sub_menu.css({
        position: "fixed",
        right: "-35%",
        transition: ".7s",
      })
    }
  });
});
