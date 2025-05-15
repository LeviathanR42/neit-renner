//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;

//This is used to stop the player from moving through obstacles.
var prevX;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	player.x = 100;
	player.color = "blue";
	
	lBlock1 = new GameObject(canvas.width - 750, canvas.height/2-100, 100, 100,"#ff0000");
	
	lBlock2 = new GameObject(canvas.width/2,  canvas.height/2-250, 100, 100,"#ff0000");
	lBlock3 = new GameObject(750, canvas.height/2-100, 100, 100,"#ff0000");
	lBlock4 = new GameObject(650, canvas.height/2+250, 100, 100,"#ff0000");
	lBlock5 = new GameObject(canvas.width - 650, canvas.height/2+250, 100, 100,"#ff0000");

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	//Move the Player to the right
	if(d)
	{
		//console.log("Moving Right");
		player.x += 2;
	}
	
	if(a)
	{
		//console.log("Moving Right");
		player.x += -2;
	}
	
	if (w) {
		console.log("Moving UP");
		player.y += -2;
	}
	if (s) {
		console.log("Moving Down");
		player.y += 2;
	}
	
	//Check Collisions
	
	//Demonstrates Accuracy of Bounding Box Collision
	if(lBlock1.hitTestObject(player))
	{
		//change color
		lBlock1.color = "green";
	}
	if(lBlock2.hitTestObject(player))
		{
			//change color
			lBlock2.color = "green";
		}
	if(lBlock3.hitTestObject(player))
	{
		//change color
		lBlock3.color = "green";
	}
	if(lBlock4.hitTestObject(player))
		{
			//change color
			lBlock4.color = "green";
		}
		if(lBlock5.hitTestObject(player))
			{
				//change color
				lBlock5.color = "green";
			}

	
	
	//Update the Screen
	player.drawCircle();
	lBlock1.drawCircle();
	lBlock2.drawCircle();
	lBlock3.drawCircle();
	lBlock4.drawCircle();
	lBlock5.drawCircle();
	
}

