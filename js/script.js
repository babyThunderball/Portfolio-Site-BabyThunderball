// ========================= BABYTHUNDERBALL ========================= //
// ========== HOMEPAGE NAV & HERO ========== //
/* eslint-env jquery */
// var video = document.getElementById("myVideo");

/* eslint-disable no-unused-vars */
var newWnd = window.open()
newWnd.opener = null

var x = document.getElementById('myNavtoggle')

function menuToggle () { /* eslint-disable-line no-unused-vars */
  // var x = document.getElementById("myNavtoggle");
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

function removeResponsive (y) {
  if (y.matches) { // If media query matches
    $('#myNavtoggle').removeClass('responsive')
  }
}

// ========== WHAT SVENJA'S SUGGESTED ==========

$(function () {
  $('.hamburger').click(function (e) {
    e.stopPropagation()
    console.log(this)
    $(this).toggleClass('is-active')
    var x = document.getElementById('myNavtoggle')
    if (x.className === 'navtoggle') {
      x.className += ' responsive'
    } else {
      x.className = 'navtoggle'
    }
  })

  $(document).click(function () {
    $('.hamburger').removeClass('is-active')
  })
})
// ============ WHAT I'VE TRIED SO FAR, PART 1 ============

// && $(".hamburger").addClass("is-active")

// var $x = $("#myNavtoggle");

// ========== COMMENTED OUT TO SEE IF SVENJA'S SUGGESTIONS WORK ==========
// var $hamburger = $('.hamburger')
// $hamburger.on('click', function (e) {
//   $hamburger.toggleClass('is-active')
//   // Do something else, like open/close menu
//   //   if ($x.hasClass("navtoggle responsive")) {
//   //   $( ".hamburger" ).addClass( "is-active" )
//   // } else {
//   //   $( ".hamburger" ).removeClass( "is-active" )
//   // }
// })

// THIS works to remove the class "is-active" from hamburger, but DOESN'T fix the issue of clicking "Contact" again while already at or scrolled to "#contact-scroll".
// $(window).scroll(function () {
//   var hT = $('#contact-scroll').offset().top
//   var hH = $('#contact-scroll').outerHeight()
//   var wH = $(window).height()
//   var wS = $(this).scrollTop()
//   // console.log((hT-wH) , wS);
//   if (wS > (hT + hH - wH) && (hT > wS) && (wS + wH > hT + hH)) {
//     // alert('you have scrolled to the h1!');
//     $hamburger.removeClass('is-active')
//   }
// })

// ========== END COMMENTED OUT TO SEE IF SVENJA'S SUGGESTIONS WORK ==========

// ============ END WHAT I'VE TRIED SO FAR, PART 1 ============

// ============ WHAT I'VE TRIED SO FAR, PART 2 ============

// Get the ID "contact-scroll"
// var cscroll = document.getElementById('contact-scroll');
//
// // Get its position in the viewport
// var bounding = cscroll.getBoundingClientRect();
//
// // If it's in the viewport, remove "is-active" class from hamburger. NOT WORKING!!!
//
// var isInViewport = function (elem) {
//     var bounding = elem.getBoundingClientRect();
//     if (isInViewport(cscroll)) {
//         // Do something...
//         $hamburger.removeClass( "is-active" );
//     }
//     // return (
//     //     bounding.top >= 0 &&
//     //     bounding.left >= 0 &&
//     //     bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     //     bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
//     // );
// };

// THIS is a test to see if the class will be removed if the user is already at the #contact-scroll element. Doesn't work.
// $('#contact-scroll').on('inview', function (event, visible) {
//   if (visible == true) {
//     $hamburger.removeClass( "is-active" );
// element is now visible in the viewport
//   }
// });

// ============ END WHAT I'VE TRIED SO FAR, PART 2 ============

var y = window.matchMedia('(min-width: 640px)')
removeResponsive(y) // Call listener function at run time
y.addListener(removeResponsive) // Attach listener function on state changes

$('a[href^="#"]').on('click', function (event) {
  var target = $(this.getAttribute('href'))
  if (target.length) {
    event.preventDefault()
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000)
  }
})

// ============= PROCESS SLIDER MODAL SCRIPTS =================

// ICHI //
// Get the modal
var ichiModal = document.getElementById('ichiModal')

// Get the slider that opens the modal
var ichiSlider = document.getElementById('ichi')

// When the user clicks the button, open the modal
ichiSlider.onclick = function () {
  ichiModal.style.display = 'block'
}

// Get the <span> element that closes the modal
var ichiSpan = document.getElementsByClassName('close-ichi')[0]

// When the user clicks on <span> (x), close the modal
ichiSpan.onclick = function () {
  ichiModal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (event) {
  if (event.target === ichiModal) {
    ichiModal.style.display = 'none'
  }
})

// END ICHI //

// NI //
// Get the modal
var niModal = document.getElementById('niModal')

// Get the slider that opens the modal
var niSlider = document.getElementById('ni')

// When the user clicks the button, open the modal
niSlider.onclick = function () {
  niModal.style.display = 'block'
}

// Get the <span> element that closes the modal
var niSpan = document.getElementsByClassName('close-ni')[0]

// When the user clicks on <span> (x), close the modal
niSpan.onclick = function () {
  niModal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (event) {
  if (event.target === niModal) {
    niModal.style.display = 'none'
  }
})

// END NI //

// SAN //
// Get the modal
var sanModal = document.getElementById('sanModal')

// Get the slider that opens the modal
var sanSlider = document.getElementById('san')

// When the user clicks the button, open the modal
sanSlider.onclick = function () {
  sanModal.style.display = 'block'
}

// Get the <span> element that closes the modal
var sanSpan = document.getElementsByClassName('close-san')[0]

// When the user clicks on <span> (x), close the modal
sanSpan.onclick = function () {
  sanModal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (event) {
  if (event.target === sanModal) {
    sanModal.style.display = 'none'
  }
})

// END SAN //

// SHI //
// Get the modal
var shiModal = document.getElementById('shiModal')

// Get the slider that opens the modal
var shiSlider = document.getElementById('shi')

// When the user clicks the button, open the modal
shiSlider.onclick = function () {
  shiModal.style.display = 'block'
}

// Get the <span> element that closes the modal
var shiSpan = document.getElementsByClassName('close-shi')[0]

// When the user clicks on <span> (x), close the modal
shiSpan.onclick = function () {
  shiModal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (event) {
  if (event.target === shiModal) {
    shiModal.style.display = 'none'
  }
})

// END SHI //

// GO //
// Get the modal
var goModal = document.getElementById('goModal')

// Get the slider that opens the modal
var goSlider = document.getElementById('go')

// When the user clicks the button, open the modal
goSlider.onclick = function () {
  goModal.style.display = 'block'
}

// Get the <span> element that closes the modal
var goSpan = document.getElementsByClassName('close-go')[0]

// When the user clicks on <span> (x), close the modal
goSpan.onclick = function () {
  goModal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (event) {
  if (event.target === goModal) {
    goModal.style.display = 'none'
  }
})

// END GO //

// ROKU //
// Get the modal
var rokuModal = document.getElementById('rokuModal')

// Get the slider that opens the modal
var rokuSlider = document.getElementById('roku')

// When the user clicks the button, open the modal
rokuSlider.onclick = function () {
  rokuModal.style.display = 'block'
}

// Get the <span> element that closes the modal
var rokuSpan = document.getElementsByClassName('close-roku')[0]

// When the user clicks on <span> (x), close the modal
rokuSpan.onclick = function () {
  rokuModal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (event) {
  if (event.target === rokuModal) {
    rokuModal.style.display = 'none'
  }
})

// END ROKU //

// SHICHI //
// Get the modal
var shichiModal = document.getElementById('shichiModal')

// Get the slider that opens the modal
var shichiSlider = document.getElementById('shichi')

// When the user clicks the button, open the modal
shichiSlider.onclick = function () {
  shichiModal.style.display = 'block'
}

// Get the <span> element that closes the modal
var shichiSpan = document.getElementsByClassName('close-shichi')[0]

// When the user clicks on <span> (x), close the modal
shichiSpan.onclick = function () {
  shichiModal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (event) {
  if (event.target === shichiModal) {
    shichiModal.style.display = 'none'
  }
})

// END SHICHI //

// HACHI //
// Get the modal
var hachiModal = document.getElementById('hachiModal')

// Get the slider that opens the modal
var hachiSlider = document.getElementById('hachi')

// When the user clicks the button, open the modal
hachiSlider.onclick = function () {
  hachiModal.style.display = 'block'
}

// Get the <span> element that closes the modal
var hachiSpan = document.getElementsByClassName('close-hachi')[0]

// When the user clicks on <span> (x), close the modal
hachiSpan.onclick = function () {
  hachiModal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (event) {
  if (event.target === hachiModal) {
    hachiModal.style.display = 'none'
  }
})

// END HACHI //

// KYU //
// Get the modal
var kyuModal = document.getElementById('kyuModal')

// Get the slider that opens the modal
var kyuSlider = document.getElementById('kyu')

// When the user clicks the button, open the modal
kyuSlider.onclick = function () {
  kyuModal.style.display = 'block'
}

// Get the <span> element that closes the modal
var kyuSpan = document.getElementsByClassName('close-kyu')[0]

// When the user clicks on <span> (x), close the modal
kyuSpan.onclick = function () {
  kyuModal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (event) {
  if (event.target === kyuModal) {
    kyuModal.style.display = 'none'
  }
})

// END KYU //

// When the user hovers over the slider, open the modal
// document.getElementById("ichi").addEventListener("mouseover", mouseOver);
// function mouseOver() {
//   modal.style.display = "block";
// }

// ============= END PROCESS SLIDER MODAL SCRIPTS =================

// function removeColMd4(z) {
//   if (z.matches) { // If media query matches
//     $( ".left-col-skills").removeClass( "col-md-4 col-lg-4" )
//     .filter(this).addClass( "col-md-6 col-lg-6");
//     //$( ".right-col-skills").removeClass( "col-md-4 col-lg-4")
//     //.filter(this).addClass( "col-md-6 col-lg-6");
//   }
// }
//
// var y = window.matchMedia("(min-width: 640px)")
// removeResponsive(y) // Call listener function at run time
// y.addListener(removeResponsive) // Attach listener function on state changes

// browser = {};
// if (/edge\/[0-9]{2}/i.test(navigator.userAgent)) {
//     browser.agent = "edge";
//     browser.majorVersion = parseInt(/edge\/([0-9]{2})/i.exec(navigator.userAgent)[1]);
//     browser.version = /edge\/([0-9.]+)/i.exec(navigator.userAgent)[1];
// } else if (/chrome\/[0-9]{2}/i.test(navigator.userAgent)) {
//     browser.agent = "chrome";
//     browser.majorVersion = parseInt(/chrome\/([0-9]{2})/i.exec(navigator.userAgent)[1]);
//     browser.version = /chrome\/([0-9.]+)/i.exec(navigator.userAgent)[1];
// } else if (/firefox\/[0-9]{2}/i.test(navigator.userAgent)) {
//     browser.agent = "firefox";
//     browser.majorVersion = parseInt(/firefox\/([0-9]{2})/i.exec(navigator.userAgent)[1]);
//     browser.version = /firefox\/([0-9.]+)/i.exec(navigator.userAgent)[1];
// } else if (/msie\ [0-9]{1}/i.test(navigator.userAgent)) {
//     browser.agent = "msie";
//     browser.majorVersion = parseInt(/MSIE\ ([0-9]{1})/i.exec(navigator.userAgent)[1]);
//     browser.version = /MSIE\ ([0-9.]+)/i.exec(navigator.userAgent)[1];
// } else if (/opr\/[0-9]{2}/i.test(navigator.userAgent)) {
//     browser.agent = "opera";
//     browser.majorVersion = parseInt(/opr\/([0-9]{2})/i.exec(navigator.userAgent)[1]);
//     browser.version = /opera\/([0-9.]+)/i.exec(navigator.userAgent)[1];
// } else if (/Trident\/[7]{1}/i.test(navigator.userAgent)) {
//     browser.agent = "msie";
//     browser.majorVersion = 11;
//     browser.version = "11";
// } else if (/Safari\/[0-9.]+/i.test(navigator.userAgent)) {
//     browser.agent = "safari";
//     browser.majorVersion = parseInt(/Version\/([0-9]{2})/i.exec(navigator.userAgent)[1]);
//     browser.version = /Version\/([0-9.]+)/i.exec(navigator.userAgent)[1];
// } else {
//     browser.agent = false;
//     browser.majorVersion = false;
//     browser.version  = false;
// }
//
// if (/Windows\ NT/.test(navigator.userAgent)) {
//     browser.os = "windows";
//     var winver = parseFloat(/Windows\ NT\ ([0-9]{1,2}\.[0-9]{1})/i.exec(navigator.userAgent)[1]);
//     switch(winver) {
//     case 6.0:
//         browser.osversion = "Vista";
//         break;
//     case 6.1:
//         browser.osversion = "7";
//         break;
//     case 6.2:
//         browser.osversion = "8";
//         break;
//     case 6.3:
//         browser.osversion = "8.1";
//         break;
//     case 10.0:
//         browser.osversion = "10";
//         break;
//     default:
//         browser.osversion = false;
//     }
// } else if (/OS\ X\ /.test(navigator.userAgent)) {
//     browser.os = "os x"; //
//     browser.osversion = /OS\ X\ [0-9]{2}_([0-9]{1,2})_[0-9]{1,2}/i.exec(navigator.userAgent)[1];
// } else if (/(Linux)/.test(navigator.userAgent)) {
//     browser.os = "linux";
//     browser.osversion = false;
// }
