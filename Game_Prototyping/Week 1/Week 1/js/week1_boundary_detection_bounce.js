// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var ball;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	ball = new Ball();
	
	//------Declare the ball's speed on the x and y axis------
	ball.vx = 4;
	ball.vy = 4;
	//----------------------------------------------------
	
	timer = setInterval(animate, interval);


function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//----Movement Using the ball's move() function----
	ball.move();
	//---------------------------------------------------
	
	//--------------Bounce of Right----------------------
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.vx = -ball.vx;	
		ball.vx *= 1.2;
	}
	//--------------Bounce of Left----------------------
	if(ball.x < ball.width/2)
		{
			ball.vx = -ball.vx;	
			ball.vx *= 1.2;
		}
	//--------------Bounce off top---------------------
	if(ball.y < ball.height/2)
		{
			ball.y = ball.height / 2;	
			ball.vy = -ball.vy;
			ball.vy *= 1.2;
		}
//--------------Bounce off bottom---------------------
if(ball.y > canvas.height - ball.height / 2)
	{
		ball.y = canvas.height - ball.height /2;
		ball.vy = -ball.vy;
		ball.vy *= 1.2;
	}
	ball.draw();
}
