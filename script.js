

document.addEventListener("DOMContentLoaded",()=>{

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



gsap.set(".product-card",{transformPerspective:1000});



const tl = gsap.timeline();

tl.from(".brand-name",{
opacity:0,
y:-50,
duration:1
})

.from(".nav-menu a",{
opacity:0,
y:-20,
stagger:.12,
duration:.7
},"-=.6")

.from(".hero-title",{
opacity:0,
y:120,
duration:1.2,
ease:"power4.out"
},"-=.5")

.from(".hero-text",{
opacity:0,
y:40,
duration:.8
},"-=.8")

.from(".hero-btn",{
opacity:0,
scale:.7,
duration:.7
},"-=.6")

.from(".hero-image img",{
opacity:0,
x:200,
rotate:6,
duration:1.4,
ease:"power4.out"
},"-=1.2");



gsap.to(".hero-image img",{
y:80,
scrollTrigger:{
trigger:".hero",
start:"top top",
end:"bottom top",
scrub:1
}
});



gsap.utils.toArray(".section-title").forEach(title=>{

gsap.fromTo(title,
{opacity:0,y:80},
{
opacity:1,
y:0,
duration:1,
scrollTrigger:{
trigger:title,
start:"top 85%"
}
})

});



gsap.utils.toArray(".product-card").forEach((card,i)=>{

gsap.fromTo(card,
{opacity:0,y:100,scale:.9},
{
opacity:1,
y:0,
scale:1,
duration:.9,
delay:i*0.03,
scrollTrigger:{
trigger:card,
start:"top 90%"
}
})

});



gsap.utils.toArray(".collection-title").forEach(title=>{

gsap.fromTo(title,
{opacity:0,letterSpacing:"20px"},
{
opacity:1,
letterSpacing:"2px",
duration:1,
scrollTrigger:{
trigger:title,
start:"top 85%"
}
})

});



gsap.utils.toArray(".product-card img").forEach(img=>{

gsap.fromTo(img,
{scale:1.3,opacity:0},
{
scale:1,
opacity:1,
duration:1.2,
scrollTrigger:{
trigger:img,
start:"top 90%"
}
})

});



document.querySelectorAll(".product-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

gsap.to(card,{
y:-15,
rotationY:8,
scale:1.03,
boxShadow:"0 40px 90px rgba(255,77,141,.25)",
duration:.4
})

});

card.addEventListener("mouseleave",()=>{

gsap.to(card,{
y:0,
rotationY:0,
scale:1,
boxShadow:"0 10px 40px rgba(0,0,0,.1)",
duration:.4
})

});

});



document.querySelectorAll(".btn,.hero-btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

gsap.to(btn,{
scale:1.08,
y:-4,
duration:.3
})

});

btn.addEventListener("mouseleave",()=>{

gsap.to(btn,{
scale:1,
y:0,
duration:.3
})

});

});



gsap.from("#about",{
scrollTrigger:{
trigger:"#about",
start:"top 80%"
},
opacity:0,
y:70,
duration:1.1
});

gsap.from("footer",{
scrollTrigger:{
trigger:"footer",
start:"top 95%"
},
opacity:0,
y:50,
duration:1
});



document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",e=>{

const target=document.querySelector(link.getAttribute("href"));
if(!target) return;

e.preventDefault();

gsap.to(window,{
duration:1.2,
scrollTo:target,
ease:"power3.inOut"
});

});

});





gsap.to(".hero-image img",{
y:20,
repeat:-1,
yoyo:true,
duration:2.8,
ease:"sine.inOut"
});



ScrollTrigger.refresh();

});
