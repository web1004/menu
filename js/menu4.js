$(document).ready(function () {

  $(".sub").hide();  //display:none 과 동일함

  $(".main").hover(function(){
    $(this).find(".sub").stop().slideDown();
  },function(){
    $(this).find(".sub").stop().slideUp();
  });

});