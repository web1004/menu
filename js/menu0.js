$(document).ready(function () {

  $(".gnb li").hover(function(){
    num = $(this).index()+1;  //index는 0,1,2,3.... 이미지의 파일명에 맞게 1부터 시작하게 함
    $(this).find("a img").attr({"src":"image/menuover_0" + num + ".jpg"});
    //$(this).find("a img") -> .gnb li a img

  },function(){
    //num = $(this).index()+1;
    $(this).find("a img").attr({"src":"image/menu_0" + num + ".jpg"});
  });

});

/* 
전역변수(어디서든 사용가능)와 지역변수(문장내에서만 사용할수 있음)
변수에 let을 붙이지 않으면 전역변수가 되어서 마우스 아웃일때 변수를 저장하지 않아도  변수num을 사용할수 있다.
*/