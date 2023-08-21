$(document).ready(function () {

  $(".gnb").hover(function(){
    $(this).find(".main .sub_all").stop().slideDown(500,"easeOutBounce");
    $(".bg_box").stop().slideDown();
  },function(){
    $(this).find(".main .sub_all").stop().slideUp();
    $(".bg_box").stop().slideUp();
  });

});