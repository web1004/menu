$(document).ready(function () {

  $(".gnb li").hover(function(){
    let num = $(this).index()+1;  //0,1,2....->이미지파일명이 1부터 시작하므로 +1을 해서 0이 아닌 1부터 시작하게 함.
    $(this).find("a img").attr({"src":"image/menuover_0"+num+".jpg"});
    //$(".gnb li a img").attr(); 
  },function(){
    let num = $(this).index()+1;
    $(this).find("a img").attr({"src":"image/menu_0"+num+".jpg"});
  });

});