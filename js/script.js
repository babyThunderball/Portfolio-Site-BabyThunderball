var video = document.getElementById("myVideo");

function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle") {
    x.className += " responsive";
  } else {
    x.className = "navtoggle";
  }
  // } else if (x.className === "hamburger hamburger--emphatic") {
  //   x.className += " is-active";
  // } else {
  //   x.className = "hamburger hamburger--emphatic";
  // }
}

var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });

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

// $('li.menuItem').click(function(){ //test to see if active state will work on click. Not finished yet.
//     $('li.menuItem').removeClass('active')
//     .filter(this).addClass('active');
// })

//TOOLTIP RESIZING SCRIPTS FOR INK TANK PROCESS PANEL
$( function()
{
    var targets = $( '[rel~=tooltip]' ),
        target  = false,
        tooltip = false,
        title   = false;

    targets.bind( 'mouseenter', function()
    {
        target  = $( this );
        tip     = target.attr( 'title' );
        tooltip = $( '<div id="ichi"></div>' );

        if( !tip || tip == '' )
            return false;

        target.removeAttr( 'title' );
        tooltip.css( 'opacity', 0 )
               .html( tip )
               .appendTo( 'body' );

        var init_tooltip = function()
        {
            if( $( window ).width() < tooltip.outerWidth() * 1.5 )
                tooltip.css( 'max-width', $( window ).width() / 2 );
            else
                tooltip.css( 'max-width', 340 );

            var pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( tooltip.outerWidth() / 2 ),
                pos_top  = target.offset().top - tooltip.outerHeight() - 20;

            if( pos_left < 0 )
            {
                pos_left = target.offset().left + target.outerWidth() / 2 - 20;
                tooltip.addClass( 'left' );
            }
            else
                tooltip.removeClass( 'left' );

            if( pos_left + tooltip.outerWidth() > $( window ).width() )
            {
                pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
                tooltip.addClass( 'right' );
            }
            else
                tooltip.removeClass( 'right' );

            if( pos_top < 0 )
            {
                var pos_top  = target.offset().top + target.outerHeight();
                tooltip.addClass( 'top' );
            }
            else
                tooltip.removeClass( 'top' );

            tooltip.css( { left: pos_left, top: pos_top } )
                   .animate( { top: '+=10', opacity: 1 }, 50 );
        };

        init_tooltip();
        $( window ).resize( init_tooltip );

        var remove_tooltip = function()
        {
            tooltip.animate( { top: '-=10', opacity: 0 }, 50, function()
            {
                $( this ).remove();
            });

            target.attr( 'title', tip );
        };

        target.bind( 'mouseleave', remove_tooltip );
        tooltip.bind( 'click', remove_tooltip );
    });
});

//TEST HOVER SCROLL FOR INK TANK PROCESS PANEL not working
var flag = false,
    goto = 0,
    hre;

    $('#ichi-title').bind('mouseenter mouseleave', function(e) {
        if (e.type === 'mouseenter') {
           flag = true;
           hre = $(this).attr('href');
           goto = $(hre).position().top;
           $('#ichi').stop().animate({top : '-'+goto },800);
        } else {
           flag = false;

            setTimeout(function() {
               if( flag != true ){
                  $('#ichi').stop().animate({top : '0' },800);
               }
            }, 1000);
        }
    });

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
