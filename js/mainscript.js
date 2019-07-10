/*****************************/
// AOS Animate
/******************************/

        // AOS
        AOS.init({
          offset: 200,
          duration: 600,
          easing: 'ease-out-cubic',
          delay: 100,
      });
      AOS.refresh();


$('.slide-con').slick({
  infinite: true,
      dots: true,
    speed: 300,
     fade: true,
  slidesToShow: 1,
});

$('.testimonail-wrap').slick({
  infinite: true,
      dots: true,
    speed: 300,
    auto:true,
    arrows:false,
  slidesToShow: 1,
});

/***Client**/
$('.clients-wrap').slick({
  infinite: true,
  dots: true,
  speed: 500,
  auto:true,
  arrows:false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(function() {
  $('.searchtoggle').on("click", function(event) {
    event.preventDefault();
    $("#search").addClass("open");
    $('#search > form > input[type="text"]').focus();
  });

  $("#search, #search button.close, .close, .x-close").on("click keyup", function(event) {
    if (
      event.target == this ||
      event.target.className == "close" ||
      event.keyCode == 27
    ) {
      $(this).removeClass("open");
    }
  });


});

$(document).ready(function(){
  $('.set > a').on("click", function(){
    if($(this).hasClass('active')){
      $(this).removeClass("active");
     $('.set').removeClass("active-wrap");
      $(this).siblings('.content').slideUp(200);
      //$(".set > a i").removeClass("fa-minus").addClass("fa-plus");
    }else{
     // $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
    //$(this).find("i").removeClass("fa-plus").addClass("fa-minus");
    $(".set > a").removeClass("active");
    $('.set').addClass("active-wrap");
    $(this).addClass("active");
    $('.content').slideUp(200);
    $(this).siblings('.content').slideDown(200);
    } 
  });
});

$(document).ready(function() {
  $(".tabs-left a").click(function(event) {
      event.preventDefault();
      $(this).parent().addClass("current");
      $(this).parent().siblings().removeClass("current");
      var tab = $(this).attr("href");
      $(".tabsleft-content").not(tab).css("display", "none");
      $(tab).fadeIn();
  });
});


/*----------------------------------------------------Back to top---------------------------------------------------------------*/
$(document).ready(function(){$("#back-top").hide();$(function(){$(window).scroll(function(){if($(this).scrollTop()>100){$("#back-top").fadeIn()}else{$("#back-top").fadeOut()}});$("#back-top a").click(function(){$("body,html").animate({scrollTop:0},800);return false})})})

