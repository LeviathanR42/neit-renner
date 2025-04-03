// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var player;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	player = new Player();
	
	//------Declare the Player's speed on the x and y axis------
	player.vx = -2;
	player.vy = -2;
	//----------------------------------------------------
	
	timer = setInterval(animate, interval);


function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	player.move();
	
	//--------------Loop the Screen----------------------
	if(player.x > canvas.width + player.width/2)
	{
		player.x = -player.width/2	
	}
	if(player.x < player.width / 2)
	{
		player.x = canvas.width + player.width / 2
	}
	if(player.y > canvas.height + player.height/2)
	{
		player.y = -player.height/2	
	}
	if(player.y < player.height / 2)
	{
		player.y = canvas.height + player.height / 2
	}
	//---------------------------------------------------
	
	player.draw();
}
