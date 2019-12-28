var numSquares = 6;
var colors = [];
var pickedColor;
var colordisplay = document.getElementById("colordisplay")
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var modeButtons = document.querySelectorAll(".mode");
var squares = document.querySelectorAll(".square");


init();

function init(){

	//mode button
	setupModeButtons();
	setupSquares();
	resetfunc();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		//console.log("CCC");
		modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		
		if(this.textContent == "Easy"){
			//console.log("BBB");
			numSquares = 3;
		}
		else{
			//console.log("AAA");
			numSquares = 6;
		}

		resetfunc();

		});
	}	
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){

		squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;

		if(clickedColor == pickedColor){
			message.innerHTML = "Correct";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			reset.innerHTML = "Play Again?"
		}
		else{
			message.innerHTML = "Wrong one";
			this.style.background = "#232323";
		}
	});
	}
}



function resetfunc(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colordisplay.textContent = pickedColor;

	reset.innerHTML = "New Colors";
	message.innerHTML = "";	

	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
		
	}

	h1.style.backgroundColor = 'steelblue'

}

reset.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colordisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}

	h1.style.backgroundColor = 'steelblue'
	this.innerHTML = "New Colors"

	message.innerHTML = "";
});


function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}


function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColors(num){
	var arr = [];

	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}