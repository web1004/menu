$(document).ready(function () {

  $(".gnb li").click(function(){

    let barWidth = $(this).find(">a").width();
    let barHeight = $(this).find(">a").height();      
    let mtop = $(this).offset().top;
    let mleft = $(this).offset().left;
    
    $("#horizontal-underline").animate({
      left: mleft + "px", 
      top: mtop + barHeight +"px", 
      width: barWidth
    },300);

  });

});
