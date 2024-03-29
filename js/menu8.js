$(document).ready(function () {

  $(".gnb").hover(function(){
    $(this).find(".main .sub_all").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  },function(){
    $(this).find(".main .sub_all").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });

  //주메뉴 오버시 해당하는 서브박스의 전체배경색과 왼쪽이미지 나오게 함
  $(".main").hover(function(){

    let oldimg = 0;  //기존에 보이는 이미지
    let newimg = $(this).index(); //새로 바뀌는 이미지

    $(this).find(".sub_all").css({ "background": "#dbe4ea"});

    $(".subBoxImg ul li").eq(oldimg).stop().hide("slow"); //기존이미지는 숨기기
    $(".subBoxImg ul li").eq(newimg).stop().show("slow"); //새로 선택된 이미지는 보이기
    oldimg = newimg; //위에서 새로 바뀐 이미지는 다시 기존이미지에 저장

  },function(){
    $(this).find(".sub_all").css({ "background": "#fff"});
    $(".subBoxImg ul li").stop().hide();   
  });

});