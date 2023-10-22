
const tl = gsap.timeline();

tl.from("#nav img, #mid , #right" ,{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.3
})
tl.from("#p1 h1",{
    y:100,
    opacity:0,
    stagger:0.2
})


tl.from("#p1 #left-img ,#p1 #left-lower " , {
    x:-100,
    opacity:0,
    stagger:0.2

})

tl.from("#p1 #rigth-img ,#p1 #lower " , {
    x:100,
    opacity:0,
    stagger:0.2

})

tl.from("#down" ,{

    y:40,
    opacity:0,
    duration:0.4,
    repeat:-1,
    yoyo:true
})