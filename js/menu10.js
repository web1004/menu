$(document).ready(function () {

  //처음위치
  $("#sidebar").css({"left":"-150px"});
  $(".sub_box").css({"left":"-150px"}); 

  //햄버거메뉴 클릭시 나오는 사이드바.....
  qchk=true;
  $(".trigger").click(function(){
    $(this).toggleClass("active");

    if(qchk){
      $(this).stop().animate({left:"150px"},500); 
      $("#sidebar").stop().animate({left:"0px"},500); 
      qchk=false;
    }else{
      $(this).stop().animate({left:"0px"},500); 
      $("#sidebar").stop().animate({left:"-150px"},500); 
      qchk=true;
    }

  });

  //주메뉴 오버시 나오는 서브박스.....
  $(".main").hover(function(){ 
    $(this).find(".sub").stop().show("slow");
    $(".sub_box").stop().animate({left:"150px"},300);
    $(".trigger").stop().animate({left:"300px"},300);  
  },function(){
    $(this).find(".sub").stop().hide("fast");        	
  });

  $(".main").mouseleave(function(){
    $(".sub_box").stop().animate({"left":"-150px"},300);
    $(".trigger").stop().animate({left:"150px"},300);
  });
  
});