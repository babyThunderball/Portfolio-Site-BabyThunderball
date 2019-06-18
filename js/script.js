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

$('li.menuItem').click(function(){ //test to see if active state will work on click. Not finished yet.
    $('li.menuItem').removeClass('active')
    .filter(this).addClass('active');
})

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

browser = {};
if (/edge\/[0-9]{2}/i.test(navigator.userAgent)) {
    browser.agent = "edge";
    browser.majorVersion = parseInt(/edge\/([0-9]{2})/i.exec(navigator.userAgent)[1]);
    browser.version = /edge\/([0-9.]+)/i.exec(navigator.userAgent)[1];
} else if (/chrome\/[0-9]{2}/i.test(navigator.userAgent)) {
    browser.agent = "chrome";
    browser.majorVersion = parseInt(/chrome\/([0-9]{2})/i.exec(navigator.userAgent)[1]);
    browser.version = /chrome\/([0-9.]+)/i.exec(navigator.userAgent)[1];
} else if (/firefox\/[0-9]{2}/i.test(navigator.userAgent)) {
    browser.agent = "firefox";
    browser.majorVersion = parseInt(/firefox\/([0-9]{2})/i.exec(navigator.userAgent)[1]);
    browser.version = /firefox\/([0-9.]+)/i.exec(navigator.userAgent)[1];
} else if (/msie\ [0-9]{1}/i.test(navigator.userAgent)) {
    browser.agent = "msie";
    browser.majorVersion = parseInt(/MSIE\ ([0-9]{1})/i.exec(navigator.userAgent)[1]);
    browser.version = /MSIE\ ([0-9.]+)/i.exec(navigator.userAgent)[1];
} else if (/opr\/[0-9]{2}/i.test(navigator.userAgent)) {
    browser.agent = "opera";
    browser.majorVersion = parseInt(/opr\/([0-9]{2})/i.exec(navigator.userAgent)[1]);
    browser.version = /opera\/([0-9.]+)/i.exec(navigator.userAgent)[1];
} else if (/Trident\/[7]{1}/i.test(navigator.userAgent)) {
    browser.agent = "msie";
    browser.majorVersion = 11;
    browser.version = "11";
} else if (/Safari\/[0-9.]+/i.test(navigator.userAgent)) {
    browser.agent = "safari";
    browser.majorVersion = parseInt(/Version\/([0-9]{2})/i.exec(navigator.userAgent)[1]);
    browser.version = /Version\/([0-9.]+)/i.exec(navigator.userAgent)[1];
} else {
    browser.agent = false;
    browser.majorVersion = false;
    browser.version  = false;
}

if (/Windows\ NT/.test(navigator.userAgent)) {
    browser.os = "windows";
    var winver = parseFloat(/Windows\ NT\ ([0-9]{1,2}\.[0-9]{1})/i.exec(navigator.userAgent)[1]);
    switch(winver) {
    case 6.0:
        browser.osversion = "Vista";
        break;
    case 6.1:
        browser.osversion = "7";
        break;
    case 6.2:
        browser.osversion = "8";
        break;
    case 6.3:
        browser.osversion = "8.1";
        break;
    case 10.0:
        browser.osversion = "10";
        break;
    default:
        browser.osversion = false;
    }
} else if (/OS\ X\ /.test(navigator.userAgent)) {
    browser.os = "os x"; // 
    browser.osversion = /OS\ X\ [0-9]{2}_([0-9]{1,2})_[0-9]{1,2}/i.exec(navigator.userAgent)[1];
} else if (/(Linux)/.test(navigator.userAgent)) {
    browser.os = "linux";
    browser.osversion = false;
}