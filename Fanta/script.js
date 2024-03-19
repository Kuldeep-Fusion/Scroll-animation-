var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#fanta",{
    top: "120%",
    left: "11%"
}, 'orange')

tl.to("#orange-slice",{
    width:"17%",
    top: "155%",
    left: "20%"
}, 'orange')
tl.to("#orange",{
    width:"20%",
    top: "165%",
    right: "10%"
}, 'orange')
tl.to("#leaf1",{
    width:"15%",
    top: "120%",
    right: "10%",
    rotate: "360deg",
}, 'orange')

tl.to("#leaf2",{
    width:"15%",
    top: "120%",
    right: "10%",
    rotate: "60deg",
}, 'orange')



var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from("#sprite",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')

tl2.from("#orange-slice2",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')

tl2.from("#pepsi",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')

tl2.from("#orange-slice3",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')

tl2.to("#orange-slice",{
    width:"16%",
    left: "42%",
    top: "212%",
    zIndex: 1
}, 'ca')
tl2.to("#fanta",{
    width:"11%",
    top: "220%",
    left: "44.5%",
}, 'ca')



// gsap.to(
//     ".box",{
//         x:500,
//         y:500,
//         rotation:-90,
//         duration:5,
//         delay:2,
//         width:100,
//         borderRadius: "50%",
//         height:100,
//         scale:5.3,
//         backgroundColor:  "blue"
//     }
// )

// gsap.to(
//     ".box",{
//         x:500,
//         // y:500,
//         rotation:-90,
//         duration:5,
//         // delay:2,
//         // width:100,
//         borderRadius: "50%",
//         // height:100,
//         // scale:5.3,
//         backgroundColor:  "blue",
//         repeat: -1,
//         yoyo: true,
//         stagger: 1
//     }
// )

// var tl = gsap.timeline({repeat: 2, repeatDelay: 1});

// tl.from(
//     ".box",{
//         opacity: 0,
//         duration:5,
//         x:500,
        
//     }
// )