$(document).ready(function () {

  $(".main").hover(function(){
    $(this).find(".sub").stop().slideDown();
  },function(){
    $(this).find(".sub").stop().slideUp();
  });

});

/*stop()메서드 : 애니메이션의 중복 겹침을 막기 위해서 사용하는 메서드
앞의 애니메이션의 움직임을 실행후 바로 멈추게 함
애니메이션 앞쪽에 사용하면 됨

stop()
stop(true,true)
*/
