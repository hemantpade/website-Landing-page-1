$(document).ready(function(){
    $('.owl-carousel1').owlCarousel({
        loop:true,
        dots:true,
        margin:10,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })
 
    $('.owl-carousel2').owlCarousel({
     
        
        dots:true,
        margin:10,
        responsive:{
            0:{
                items:1,
                stagePadding: 50
            },
            600:{
                items:1
            },
            1000:{
                items:3,
                stagePadding: 0,
                margin:20
            }
        }
    })
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
document.querySelector("#btm").addEventListener('click', function(e){
    window.scrollTo(0,document.body.scrollHeight);

});

document.querySelector("#btm").addEventListener('click', function(e){
    window.scrollTo(0,document.body.scrollHeight);

});


