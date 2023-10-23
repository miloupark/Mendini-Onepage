AOS.init();
gsap.registerPlugin(ScrollTrigger);

// header-title_alessandro
gsap.to(".title-l-clip", {
  y: -100, // 슬라이딩할 거리 설정
  duration: 1, // 애니메이션 지속 시간 설정
  repeat: -1, // 무한 반복
  ease: "linear" // 선형 이징 사용
});


// Mendini who - mendini name
var ctrl = new ScrollMagic.Controller();

$(".mendini-who").each(function(i) {
  var inner = $(this).find(".amuleto-outer");
  var outer = $(this).find(".amuleto-inner");
  var tl = new TimelineMax();
  
  tl.from(outer, 0.25, { scaleX: 0 });
  tl.from(inner, 0.65, { yPercent: 100, ease: Back.easeOut });
  
  new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0,
  })
    .setTween(tl)
    .addIndicators({
      colorTrigger: "white",
      colorStart: "white",
      colorEnd: "white",
      indent: 40
    })
    .addTo(ctrl);
});


// Object-Swiper
var swiper = new Swiper(".mySwiper-object1", {
  slidesPerView: 6,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
// Object-Swiper2
var swiper = new Swiper(".mySwiper-object2", {
  slidesPerView: 6,
  spaceBetween: 30,
  // direction: 'reversed',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
  
// $(document).ready(function() {
// 	$('#fullpage').fullpage({
// 		//options here
// 		autoScrolling:true,
// 		scrollHorizontally: true
// 	});
 
// 	//methods
// 	$.fn.fullpage.setAllowScrolling(false);
// });

// if (첫번째섹션이라면) { 	
// 	$("img").attr("data-aos", "fade-down") 	
// 	aos.refreshHard() } 
// else if (첫번째 섹션이 아니라면) {
//  	$("#section1 [data-aos]").attr("data-aos", "") 	
// aos.refreshHard() 
// }



// afterLoad : function(origin, destination) {
//   $('#fullpage .section').find('.animated').each(function() {
//           var $this = $(this);
//           var Ani = $this.attr('data-animated');
//           $this.removeClass(Ani);
//         });
//         $('#fullpage .section').eq(destination - 1).find('.animated').each(function () {
//           var $this = $(this);
//           var Ani = $this.attr('data-animated');
//           $this.addClass(Ani);
//         });
//   }

// // gsap.registerPlugin(ScrollTrigger);
// gsap.to(".mendini-who-shape-circle", {
//   scrollTrigger: {
//     trigger: ".mendini-who",
//     markers: true,
//     start: "20% 1px",
// 		scrub: true,
//   },
//   x: -300, duration: 1,
// });

// const headerEl = document.querySelector('#header');

// // 페이지에 스크롤 이벤트 추가 
// window.addEventListener(
//   'scroll',
//   // _.throttle(함수, 시간)
//   // 스크롤이 300ms마다 한번씩 실행되도록 설정
//   _.throttle(function(){
//     console.log(window.scrollY);
//     // 페이지의 스크롤 위치가 200px보다 크면
//     if (window.scrollY > 200) {
//       // gsap.to(요소, 시간, 옵션);
//       gsap.to(headerEl, 0.6, {
//         opacity: 0,
//         display: 'none',
//       });
//     } else {
//         // 페이지의 스크롤 위치가 200px보다 작으면
//         gsap.to(headerEl, 0.6, {
//           opacity: 1,
//           display: 'block',
//         });
//       }
//   }, 300)
// );