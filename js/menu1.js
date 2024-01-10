$(document).ready(function () {

  $(".gnb li").hover(function(){
    num = $(this).index()+1;
    $(this).find("a img").attr({"src":"image/menuover_0" + num + ".jpg"});
    //.gnb li a img{} , js의 이미지경로는 html과 동일함
  },function(){
    // let num = $(this).index()+1;
    $(this).find("a img").attr({"src":"image/menu_0" + num + ".jpg"});
  });

});

/* 전역변수(어디서든 사용가능)와 지역변수(문장내에서만 사용할수 있음)
변수에 let 을 붙이지 않으면 전역변수가 되어서 마우스 아웃일때 변수를 저장하지 않아도  변수 num을 사용할수 있다.
*/