$(document).ready(function () {

  $(".main").click(function(){
    //다른 주메뉴를 클릭했을때 기존에 내려가 있는거 올라가게 하고 화살표방향 바뀜
    $(this).siblings().find(".sub").slideUp(300);
    $(this).siblings().find(">a").removeClass("uparrow")
    
    //현재 선택한 주메뉴에 해당하는 서브메뉴 토글, 화살표 토글
    $(this).find(".sub").stop().slideToggle(200);
    $(this).find(">a").toggleClass("uparrow");
  });

});