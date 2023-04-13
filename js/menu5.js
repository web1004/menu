$(document).ready(function () {

  $(".main").hover(function(){
    $(this).find(".sub").stop().slideDown();
    $(".bg_box").stop().slideDown();
  },function(){
    $(this).find(".sub").stop().slideUp();
    $(".bg_box").stop().slideUp();
  });

});