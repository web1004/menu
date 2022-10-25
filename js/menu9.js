$(document).ready(function () {

  $(".main").click(function(){
    
    $(this).siblings().find(".sub").slideUp(300);
    $(this).siblings().find(">a").removeClass("uparrow")
    $(this).find(".sub").stop().slideToggle(200);
    $(this).find(">a").toggleClass("uparrow");

  });

});

/* siblings()
선택한 요소를 제외한 형제 요소를 모두 찾습니다. 

$("선택자").siblings();  ->선택한 요소의 형제 요소를 선택
$("선택자1").siblings("선택자2");
->선택자2를 제외한 형제요소를 찾는다.
*/