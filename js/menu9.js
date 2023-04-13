$(document).ready(function () {

  /* $(".main").click(function(){

    $(this).siblings().find(".sub").slideUp(300);
    $(this).siblings().find(">a").removeClass("uparrow")
    $(this).find(".sub").stop().slideToggle(200);
    $(this).find(">a").toggleClass("uparrow");

  }); */

  //주메뉴만 클릭했을때 움직이게 함...
  $(".main>a").click(function(){

    $(".main .sub").slideUp(300);
    $(".main>a").removeClass("uparrow")
    $(this).siblings(".sub").stop().slideToggle(200);
    $(this).toggleClass("uparrow");

  });

});