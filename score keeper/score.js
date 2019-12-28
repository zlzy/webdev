var s1 = 0;
var s2 = 0;

var input = document.querySelector("input");

var max = 5;
var p = document.querySelector("p");

input.oninput = function() {
	//console.log("Got here");
	max = input.value;
	var line = "playing to " + max;
	p.innerHTML = line;
};

var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btnR = document.querySelector("#btnR");
var h1 = document.querySelector("h1");

btn1.onclick = function() {
	if(s1 < max && s2 < max){
		s1 += 1;
		h1.innerHTML = s1 + " to " + s2;
	}
}

btn2.onclick = function() {
	if(s1 < max && s2 < max){
		s2 += 1;
		h1.innerHTML = s1 + " to " + s2;
	}
}

btnR.onclick = function() {
	s1 = 0;
	s2 = 0;
	h1.innerHTML = "0 to 0";
}
