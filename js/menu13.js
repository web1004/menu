$(document).ready(function () {

  //처음 보이는 탑메뉴
  $(".gnbMenu").hover(function(){ 
    $(this).find("li>.smenu").stop().slideDown();
    $(".bg_box").stop().slideDown();
    $(".top,.gnb").css({"background":"rgba(51,102,204,0.6)","transition":"all 1s"});
  },function(){
    $(this).find("li>.smenu").stop().slideUp();
    $(".bg_box").stop().slideUp();
    $(".top,.gnb").css({"background":"transparent","transition":"all 1s"});
  });

  //처음 보이는 탑메뉴
  $(".gnbMenu_fix").hover(function(){ 
    $(this).find("li>.smenu_fix").stop().slideDown();
    $(".bg_box").stop().slideDown();
  },function(){
    $(this).find("li>.smenu_fix").stop().slideUp();
    $(".bg_box").stop().slideUp();
  });


  //스크롤 내렸을때 내려오는 탑메뉴2
  $(window).scroll(function(){

    /*(1)animate를 이용한 방법 
    if ($(this).scrollTop()>100){
      $(".gnb_fix").stop().animate({marginTop:"0px"});
    } else {
      $(".gnb_fix").stop().animate({marginTop:"-140px"},"fast");
    } */
    

    //(2)css()메서드를 이용한 방법
    if ($(this).scrollTop()>100){
      $(".gnb_fix").css({"margin-top":"0px","transition":"all 1s"});
    } else {
      $(".gnb_fix").css({"margin-top":"-140px","transition":"all 1s"});
    }
  
  });

});