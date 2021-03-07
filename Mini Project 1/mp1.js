var time_load = document.getElementById("myTime");
var time_stamp = document.getElementById("time");

var black_color = document.getElementById("blk");
var red_color = document.getElementById("red");
var blue_color = document.getElementById("blue");
var purple_color = document.getElementById("purple");

var time_select = document.getElementById("timex");
var heartrate_select = document.getElementById("hr");


myTime.onload = function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  time_stamp.innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
};

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}


black_color.addEventListener('click', function(){
	time_load.setAttribute('src', "images/black_strap.png");
});

red_color.addEventListener('click', function(){
	time_load.setAttribute('src', "images/red_strap.png");
});

blue_color.addEventListener('click', function(){
	time_load.setAttribute('src', "images/blue_strap.png");
});

purple_color.addEventListener('click', function(){
	time_load.setAttribute('src', "images/purple_strap.png");
});


time_select.addEventListener('click', function(){
	time_stamp.style.display = "block";
	document.getElementById("beat").style.display = "none";
	document.getElementById("ratedh").style.display = "none";
	
});

heartrate_select.addEventListener('click', function(){
	document.getElementById("beat").style.display = "block";
	document.getElementById("ratedh").style.display = "block";
	time_stamp.style.display = "none";
});












