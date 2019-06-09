var video = document.getElementById("myVideo");

function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle") {
    x.className += " responsive";
  } else {
    x.className = "navtoggle";
  }
}

function removeResponsive(y) {
  if (y.matches) { // If media query matches
    $( "#myNavtoggle" ).removeClass( "responsive" )
  }
}

var y = window.matchMedia("(min-width: 640px)")
removeResponsive(y) // Call listener function at run time
y.addListener(removeResponsive) // Attach listener function on state changes

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
