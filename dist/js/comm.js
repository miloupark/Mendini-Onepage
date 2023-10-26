AOS.init();
gsap.registerPlugin(ScrollTrigger);


// new fullpage('#fullpage', {
//   // options here
// });


// $(document).ready(function() {  
//   //activate fullpage.js
//   $('#fullpage').fullpage({
//     scrollBar: true,
//     navigation: true,
//     navigationTooltips: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'],
//     loopBottom: true,
//     sectionSelector: 'section'
//   });
// });

// // header-title_alessandro
// gsap.to(".title-l-clip", {
//   y: -100, // 슬라이딩할 거리 설정
//   duration: 1, // 애니메이션 지속 시간 설정
//   repeat: -1, // 무한 반복
//   ease: "linear" // 선형 이징 사용
// });


// // Mendini who - mendini name
// var ctrl = new ScrollMagic.Controller();

// $(".mendini-who").each(function(i) {
//   var inner = $(this).find(".amuleto-outer");
//   var outer = $(this).find(".amuleto-inner");
//   var tl = new TimelineMax();
  
//   tl.from(outer, 0.25, { scaleX: 0 });
//   tl.from(inner, 0.65, { yPercent: 100, ease: Back.easeOut });
  
//   new ScrollMagic.Scene({
//     triggerElement: this,
//     triggerHook: 0,
//   })
//     .setTween(tl)
//     .addIndicators({
//       colorTrigger: "white",
//       colorStart: "white",
//       colorEnd: "white",
//       indent: 40
//     })
//     .addTo(ctrl);
// });


// // Object-Swiper
// var swiper = new Swiper(".mySwiper-object1", {
//   slidesPerView: 6,
//   spaceBetween: 30,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
// });
// // Object-Swiper2
// var swiper = new Swiper(".mySwiper-object2", {
//   slidesPerView: 6,
//   spaceBetween: 30,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
// });
  

