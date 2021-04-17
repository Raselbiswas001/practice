$(document).ready( function(){

   // owlcarousel
   $(".owl-carousel").owlCarousel({
      items:5,
      center:true,
      loop:true,
      dots:false,
           responsive:{
        0:{
            items:1,
            
        },
        576:{
            items:3,
            margin:5
        },
        768:{
            items:5,
            margin:5  
        },
         992:{
            items:5,
            margin:5  
        },
        1200:{
            items:5,
            margin:5  
        }
        

    }

   });

});
