'use strict'

// 탭메뉴 
const tab_list =$(".tab_menu");
tab_list.find("ul ul").hide();
tab_list.find("li.active ul").show();

function tabMenu(e){
    e.preventDefault();
    const $this =$(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
}
tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);


// html 마크업 세팅 -> css 연동 ->제이쿼리 연동 -> 제이쿼리 호출
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
    dots:true
  });

// 버튼을 클릭하면 전체 메뉴을 보이게 하기

$(".tit .btn").click(function(e){
    e.preventDefault();
    // $("#cont_nav").css("display","block");
    // $("#cont_nav").show();
    // $("#cont_nav").fadeIn();
    // $("#cont_nav").slideDown();
    // $("#cont_nav").toggle();
    // $("#cont_nav").fadeToggle();
    $("#cont_nav").slideToggle(200);
    // $(".tit .btn").toggleClass("on");
    $(this).toggleClass("on");
});