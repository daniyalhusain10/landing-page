const spring = document.querySelector(".spring");
let tl = gsap.timeline()
gsap.from(".spring",{
    y: 300,
    duration: 1,
    stagger: 0.1,
})

gsap.from(".anchor",{
    y: 100,
    duration: 1,
   
})
gsap.from(".topItem",{
    y: 50,
    duration: 0.8,
    stagger:0.1,
   
})
gsap.from(".zellx",{
    y: 50,
    duration: 1,
})
gsap.registerPlugin(ScrollTrigger);

gsap.from(".mid", {
    duration: 0.5,
    opacity: 0,
    y: 50,     
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".mid",
        
        start: "top 70%",   
        end: "bottom 0%", 
               
    }
});
gsap.from(".productContainer", {
    duration:1,
     x: 1400, 
    scrollTrigger: {
        trigger: ".productContainer",
        start: "top 70%",
        end: "bottom bottom",
        
    }
});
gsap.registerPlugin(Draggable);
Draggable.create(".productContainer",{
   type: "scrollX",
  inertia: {
        power: 0.8 
    }
})