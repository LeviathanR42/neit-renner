
var canvas;
var context;
var timer;
var interval = 1000/60;
var player;
var boxes;


//---------------Set Friction and Gravity-----------------
var frictionX = .85;
//You will need to set the frictionY to 1 (Try to play with the values)	
var frictionY = 1;
var gravity = 1;
//--------------------------------------------------------



	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	player = new GameObject();
	player.force = 2;
	//You will need to drop the player from the height of the boxes
	player.y = 100;
	
	timer = setInterval(animate, interval);

	boxes = []

	for(var i = 0; i<4; i++){
		boxes[i] = new GameObject();
		if(i==0){
			boxes[i].x = canvas.width/5;
		}
		else{
			boxes[i].x = canvas.width/5 + boxes[i-1].x;
		}
		boxes[i].y = 100;	
	}

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	bouncingBox();

	for(var i = 0; i<4; i++){
		boxes[i].drawRect();
		boxes[i].drawOutline();
		if(player.hitTestObject(boxes[i])){
			//Change boxes color to green when it collides with player
			boxes[i].color = "#00ff00";
			player.color = "#00ff00";
		}
		
	}
	
	player.drawRect();
}



function bouncingBox()
{
	if(d)
	{	
		player.vx += player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	
	player.vy *= frictionY;
	player.vx *= frictionX;
	
	player.vy += gravity;
	
	player.x += player.vx;
	player.y += player.vy;
	
	//--------------------Check Collision With Bottom of Canvas------------------------------------------------------
	if(player.y > canvas.height - player.height/2)
	{
		
		//--------Bounce the Box---------------------------------------------------------------
		player.y = canvas.height - player.height/2;
		
		//the decimal is how bouncy you want the object to be
		//It should be a number between 0 and 2;
		player.vy = -player.vy * 1;
		
	}

	//-----------------------------------------------------------------------------------------
}


