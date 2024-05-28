$(document).ready(function () {

  $(".gnb").hover(function(){
    $(this).find(".main .sub").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  },function(){
    $(this).find(".main .sub").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });

});