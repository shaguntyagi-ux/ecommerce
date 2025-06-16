let a=gsap.timeline()

let b=document.querySelector('.i1').addEventListener('click',function(){

gsap.to('.nav3',{
    x:620,
    duration:1,
   

})
gsap.from('.nav3 h4',{
    x:-20,
    opacity:0,
    stagger:0.3
})
})
document.querySelector('.i3').addEventListener('click',function(){
   gsap.to('.nav3',{
    x:-620,
    duration:1,
   })
})
let corsor=document.querySelector('.cursor')
document.addEventListener('mousemove',function(dets){
    gsap.to(corsor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:'back.out'
    })
})

a.from('.nav1',{
    y:-70,
    opacity:0,
    duration:0.2,
    // stagger:0.2
})
a.from('.nav1 .navdiv1,.navdiv2,.navdiv3',{
    stagger:0.3,
    y:-70,
    opacity:0,
})
gsap.to('.textanim',{
    x:-1500,
    duration:50,
    // yoyo:true,
    repeat:-1
})
let path='M 10 100 Q 700 100 1390 100'
let finalPath='M 10 100 Q 700 100 1390 100'
let string=document.querySelector('.string')

string.addEventListener('mousemove',function(dets){
     path=`M 10 100 Q ${dets.x}  ${dets.y}  1390 100`
     gsap.to('svg path',{
        attr:{d:path},
        duration:0.2,
        ease:'power3.out'

     })
    //  console.log(path)
})
string.addEventListener('mouseleave',function(dets){
    //  path=`M 45 200 Q 500 ${dets.y}  1400 200`
     gsap.to('svg path',{
        attr:{d:finalPath},
      
        ease:'power3.out'

     })
    //  console.log(path)
})
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        400:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    },
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
})
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


$(document).ready(function(){
    // $('.d6').hide()
    // $('.d1').hide()
    // $('.d2').hide()
    // $('.d3').hide()
    // $('.shop').hide()
    $('.goli1').hover(function(){
        $('.hover16').toggle()
        $('.hover6').toggle()
   
    
        // $('.d6').toggle(300)
    })
    $('.goli2').hover(function(){
        $('.hover11').toggle()
        $('.hover1').toggle()
   
    
        // $('.d1').toggle(300)
    })
    $('.goli3').hover(function(){
        $('.hover12').toggle()
        $('.hover2').toggle()
   
    
        // $('.d2').toggle(300)
    })
    $('.goli4').hover(function(){
        $('.hover13').toggle()
        $('.hover3').toggle()
   
    
        // $('.d3').toggle(300)
    })
    $('.goli5').hover(function(){
        $('.hover14').toggle()
        $('.hover4').toggle()
   
    
        // $('.d4').toggle(300)
    })
    // $('.h1').hover(function(){
    //     $('.shop').toggle()
       
        
       

    // })
    // $('.shop').hover(function(){
    //     $('.shop').toggle()
    // })
   
  
    
})
document.querySelector('.h1').addEventListener('mousemove',function(){
gsap.to('.shop',{
    y:400

})
document.querySelector('.shop').addEventListener('mouseleave',function(){
    gsap.to('.shop',{
        y:-400
    })
})
})
  AOS.init();

// gsap.from()
// 

