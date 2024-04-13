
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    smoothMobile: true,
    mobile: {
      smooth: true,
      inertia: 0.8,
      getDirection: true,
      breakpoint:0,
    },
});

var surf=document.querySelector("#page1");
var cur=document.querySelector("#cursor")

surf.addEventListener("mousemove",function(dets){
    gsap.to(cur,{
        x:dets.x,
        y:dets.y
    })
})

surf.addEventListener("mouseenter",function(){
    gsap.to(cur,{
      scale:1,
      opacity:1
    })
  })
  
surf.addEventListener("mouseleave",function(){
    gsap.to(cur,{
      scale:0,
      opacity:0
    })
  })

  // R1 IMAGE CURSOR

var surf1=document.querySelector("#r1");
var cur2=document.querySelector("#cursor2")

surf1.addEventListener("mousemove",function(dets){
    gsap.to(cur2,{
        x:dets.x - 130,
        y:dets.y - 300
    })
})

surf1.addEventListener("mouseenter",function(){
    gsap.to(cur2,{
      scale:1,
      opacity:1
    })
  })
  
surf1.addEventListener("mouseleave",function(){
    gsap.to(cur2,{
      scale:0,
      opacity:0
    })
  })

    // R2 IMAGE CURSOR

var surf2=document.querySelector("#r2");
var cur3=document.querySelector("#cursor3")

surf2.addEventListener("mousemove",function(dets){
    gsap.to(cur3,{
        x:dets.x - 130,
        y:dets.y - 380
    })
})

surf2.addEventListener("mouseenter",function(){
    gsap.to(cur3,{
      scale:1,
      opacity:1
    })
  })
  
surf2.addEventListener("mouseleave",function(){
    gsap.to(cur3,{
      scale:0,
      opacity:0
    })
  })

      // R3 IMAGE CURSOR

var surf3=document.querySelector("#r3");
var cur4=document.querySelector("#cursor4")

surf3.addEventListener("mousemove",function(dets){
    gsap.to(cur4,{
        x:dets.x - 130,
        y:dets.y - 380
    })
})

surf3.addEventListener("mouseenter",function(){
    gsap.to(cur4,{
      scale:1,
      opacity:1
    })
  })
  
surf3.addEventListener("mouseleave",function(){
    gsap.to(cur4,{
      scale:0,
      opacity:0
    })
  })

        // R3 IMAGE CURSOR

var surf4=document.querySelector("#r4");
var cur5=document.querySelector("#cursor5")

surf4.addEventListener("mousemove",function(dets){
    gsap.to(cur5,{
        x:dets.x - 130,
        y:dets.y - 380
    })
})

surf4.addEventListener("mouseenter",function(){
    gsap.to(cur5,{
      scale:1,
      opacity:1
    })
  })
  
surf4.addEventListener("mouseleave",function(){
    gsap.to(cur5,{
      scale:0,
      opacity:0
    })
  })

  // LOADER

let tl=gsap.timeline()

tl.from("#loader h3",{
  x:50,
  opacity:0,
  duration:2.8,
  stagger:1.2
})
tl.to("#loader h3",{
  x:-40,
  opacity:0,
  duration:1.2,
  stagger:0.5
})
tl.to("#loader",{
  opacity:0,
})
tl.to("#loader",{
  opacity:0,
  display:"none"
})
