var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight ||0);

 if(w<800){
     document.querySelector('.about-content').classList.remove('container-fluid');
   }
    else{
     document.querySelector('.about-content').classList.add('container-fluid');
    }


window.addEventListener("resize",onresize);

var onresize = function(e) {
   width = e.target.outerWidth;
   height = e.target.outerHeight;
   
   if(width<800){
     document.querySelector('.about-content').classList.remove('container-fluid');
   }
    else{
     document.querySelector('.about-content').classList.add('container-fluid');
    }    
}    
  
  //tilt effect on the logo
    VanillaTilt.init(document.querySelector(".tilt"), {
		max: 25,
		speed: 400,
		gyroscope: true,
		gyroscopeMaxAngleX:  45,
		gyroscopeMinAngleX: -45,
		gyroscopeMaxAngleY:  45,
		gyroscopeMinAngleY: -45

	});
	VanillaTilt.init(document.querySelectorAll(".tilt"));

 
   //scroll effect on th
    ScrollReveal().reveal('.heading',{delay : 200});
    ScrollReveal().reveal('.show-first',{delay : 400});
    ScrollReveal().reveal('.show-second',{delay : 800});
    ScrollReveal().reveal('.show-third',{delay : 1000});
    ScrollReveal().reveal('.show-fourth',{delay :1200});
 

   AOS.init();   
    



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}