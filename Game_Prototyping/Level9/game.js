var canvas;
var context;
var timer;
var interval = 1000/60;

var force = 1;
var player
var score = 0;

var button = new GameObject();
button.width = 220;
button.height = 120
button.x = canvas.width/2 -20
button.y = canvas.height/2-20
button.color = '#00008B'

var states = []
var mouse = {x:0,y:0};
var currentState ="start";
var level = new Level();
	level.generate(level.l1);		

var amt = 50
var grab = []
	console.log(amt)
	for (let i = 0; i<=amt; i++)
	{
		
		grab[i] = new GameObject();
		grab[i].width = 20
		grab[i].height = 20
		grab[i].x = rand(0, canvas.width)
		grab[i].y = rand(0, canvas.height)
		grab[i].color ='teal'
		console.log(i)
	}


function changeStates(stateName)
{
	currentState = stateName;
}


 function startgame()
{
	var dx = button.x - mouse.x;
	var dy = button.y - mouse.y;
	var dist = Math.sqrt(dx*dx + dy * dy);
	console.log("startgame")
	
	seconds=60

	if(dist < button.width)
	{
		changeStates("play");
		console.log("play")
	}

	
}

function track(e)
{
	var rect = canvas.getBoundingClientRect();
	mouse.x = e.clientX - rect.left;
	mouse.y = e.clientY - rect.top;
}
states["start"] = function()
{
	

	for(var i = 0; i < level.grid.length; i++)
	{
		level.grid[i].drawRect();
	}

	button.drawRect();
	

	context.save();
		context.fillStyle = "blue";
		context.font = "bold 58px Arial"
		context.textAlign = "center";
		context.fillRect( 390, 330, 200, 100);
		context.fillStyle = "black";
		context.fillText("Start", canvas.width/2-20, canvas.height/2)
		
	context.restore();
	
}


	canvas = document.getElementById("canvas");
		canvas.addEventListener("mousemove", track);
		canvas.addEventListener("click", startgame);

	context = canvas.getContext("2d");	 


	player = new GameObject();
	
	

	//Player dimensions
    player.x = canvas.width/2;
	player.y = canvas.height/2;
	
	
	
	

	
	timer = setInterval(animate, interval);

	var seconds = 60
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
}


		

states["play"] = function()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	//console.log("playstate")

	
	

	if (a) {
		console.log("Moving left");
		player.x += -5;
	}
	if (d) {
		console.log("Moving right");
		player.x += 5;
	}
	if (w) {
		console.log("Moving UP");
		player.y += -5;
	}
	if (s) {
		console.log("Moving Down");
		player.y += 5;
	}
	
	for (let j = 0; j <=amt;j++)
	{	grab[j].drawRect();
		if (player.hitObject(grab[j]))
		{
			grab[j].x = 10000;
			score++
		}}

	if (score < 10){player.color = "blue";player.width = 60; player.height = 60;}
	if (score >= 10 && score < 20){player.color = "green"; player.width = 50; player.height = 50;}
	if (score >= 20 && score < 30){player.color = "yellow";player.width = 40; player.height = 40;}
	if (score >= 30 && score < 40){player.color = "orange";player.width = 30; player.height = 30;}
	if (score >= 40 && score <= 45){player.color = "red";player.width = 20; player.height = 20;}
	if (score >= 46 && score <= 50){player.color = "red";player.width = 10; player.height = 10;}
	if (score == 51){player.color = "purple";}


    //Limiting player to canvas
	if(player.x < 0 + player.width/2)
		{
			player.x = 0 + player.width/2;
		}
    if(player.x > canvas.width + -player.width/2)
		{
			player.x = canvas.width + -player.width/2;
		} 

	if(seconds>0 && score == 51)
	{
		context.fillText(`YOU WIN!` , canvas.width/2-150, canvas.height/2);
	}
	if (seconds>0){
		context.fillText(`Count Down: ${seconds}`, 600, 60)
	}
	if (seconds == 0 && score != 51){
		context.fillText(`YOU LOSE!` , canvas.width/2-150, canvas.height/2);
	}

    player.drawRect();
	
	if (seconds>0 )
	{	context.fillText(`Score: ${score}` , 25, 60);
    	context.font = `18px Times New Roman`;
	}
	context.fillStyle = 'black';
}

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	states[currentState]();
	
}