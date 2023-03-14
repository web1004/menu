$(document).ready(function () {

  $(".gnb").hover(function(){ //주메뉴영역전체에 오버시 
    $(this).find(".main .sub_all").stop().slideDown(500,"easeOutBounce");
  },function(){
    $(this).find(".main .sub_all").stop().slideUp();
  });

});