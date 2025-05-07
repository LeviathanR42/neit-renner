
//canvas and context
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
	
//timebase
var interval = 1000/60;
var timer = setInterval(animate, interval);

//This file sets up a Timer that Count Downs on the Canvas in a HUD
//When the Timer Counts down to Zero Make Something happen


var minutes = 0
var seconds = 10
var timesUp

var timerText = new GameObject();
timerText.x = canvas.width/2 - 100
timerText.y = canvas.height/2 - 250
timerText.color = "#000"


setTimeout(setTimer, 1000)

function setTimer(){
	seconds -= 1
	if(seconds > 0){
		setTimeout(setTimer, 1000);
	}
	else
	{
	timesUp = new GameObject();
	timesUp.x = 450;
	timesUp.color = "blue";
	console.log("times up!")
	timesUp.drawCircle();
	}
}
function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	timerText.drawText(`Count Down: ${seconds}`)
	
}










