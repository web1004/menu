$(document).ready(function () {

  $(".gnb").hover(function(){
    $(this).find(".main .sub_all").stop().slideDown(500,"easeOutBounce");
  },function(){
    $(this).find(".main .sub_all").stop().slideUp();
  });

});