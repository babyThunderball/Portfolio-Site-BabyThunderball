var video = document.getElementById("myVideo");

function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle") {
    x.className += " responsive";
  } else {
    x.className = "navtoggle";
  }
}
$(function(){
		$("#navigation").slicknav();
	});

$("#navigation").slicknav({
	label: '',
	duration: 1000,
	easingOpen: "easeOutBounce", //available with jQuery UI
	//prependTo:'#demo2'
});
