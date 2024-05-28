$(document).ready(function () {

  $(".gnb").hover(function(){
    $(this).find(".main .sub").stop().slideDown(500,"easeOutBounce");
  },function(){
    $(this).find(".main .sub").stop().slideUp();
  });

});