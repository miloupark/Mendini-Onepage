AOS.init();
gsap.registerPlugin(ScrollTrigger);




// object card
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});


// matter.js of fullpage 1st section
var w = window.innerWidth;
var h = window.innerHeight;
// asset의 갯수
const numCircles = 5;

let ground;
let wall1;
let wall2;

const content = document.querySelector('.intro-matterjs-shapes');

// Matter.js module aliases
let elements = [];

window.addEventListener('resize', (e) => {
  w = window.innerWidth;
  h = window.innerHeight;
  engine.render.canvas.width = w;
  engine.render.canvas.height = h;
  
  Matter.Body.setPosition(wall2, Matter.Vector.create(w + 30, h * .5), { passive: true } );
  Matter.Body.setPosition(ground, Matter.Vector.create(w * .5, h + 30), { passive: true });
  
});

// create a Matter.js engine
var engine = Matter.Engine.create(content, {
  render: {
    options: {
      width: w,
      height: h,
      wireframes: false,
      background: "#eee;"
    }
  }
});

window.engine = engine;

var mouseConstraint = Matter.MouseConstraint.create(engine, {
  constraint: {
    render: {
      visible: false
    }
  }
});

// create 5 boxes and a ground
for (var i = 0; i < numCircles; i++) {
  var x = Math.random() * w;
  var y = Math.random() * -h;
  var fixedRadius = 70; // asset의 크기

  elements.push(Matter.Bodies.circle(x, y, fixedRadius, {
    render: {
      sprite: {
        texture: '/images/mendinishapes 1.svg',
        xScale: (fixedRadius / (245/2)) + 0.2,
        yScale: (fixedRadius / (227/2)) + 0.2
      }
    }
  }));
  elements.push(Matter.Bodies.circle(x, y, fixedRadius, {
    render: {
      sprite: {
        texture: '/images/mendinishapes 2.svg',
        xScale: (fixedRadius / (245/2)) + 0.2,
        yScale: (fixedRadius / (227/2)) + 0.2
      }
    }
  }));
  elements.push(Matter.Bodies.circle(x, y, fixedRadius, {
    render: {
      sprite: {
        texture: '/images/mendinishapes 3.svg',
        xScale: (fixedRadius / (245/2)) + 0.2,
        yScale: (fixedRadius / (227/2)) + 0.2
      }
    }
  }));
  elements.push(Matter.Bodies.circle(x, y, fixedRadius, {
    render: {
      sprite: {
        texture: '/images/mendinishapes 4.svg',
        xScale: (fixedRadius / (245/2)) + 0.2,
        yScale: (fixedRadius / (227/2)) + 0.2
      }
    }
  }));
  elements.push(Matter.Bodies.circle(x, y, fixedRadius, {
    render: {
      sprite: {
        texture: '/images/mendinishapes 5.svg',
        xScale: (fixedRadius / (245/2)) + 0.2,
        yScale: (fixedRadius / (227/2)) + 0.2
      }
    }
  }));
}

ground = Matter.Bodies.rectangle(w/2, h+30, w*5., 60, { isStatic: true });
wall1 = Matter.Bodies.rectangle(-30, h/2, 60, h*2, { isStatic: true });
wall2 = Matter.Bodies.rectangle(w+30, h/2, 60, h*2, { isStatic: true });
window.wall2 = wall2;
elements.push(ground);
elements.push(wall1);
elements.push(wall2);

// add all of the bodies to the world
Matter.World.add(engine.world, elements);
Matter.World.add(engine.world, mouseConstraint);

// run the engine
Matter.Engine.run(engine);





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
  

