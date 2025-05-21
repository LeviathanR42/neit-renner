//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var score = 0;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new GameObject();
player.force = 1;

follower = new GameObject();
follower.x = 0;
follower.y = 0;

//friction
var fX = .80;
var fY = .80;

var angle = 0;

//gravity gets added to the vy
var gravity = 0;

interval = 1000 / 60;
timer = setInterval(animate, interval);

var mouseX, mouseY;
canvas.addEventListener("mousemove", function (e) {
	getMousePosition(canvas, e);
});

function getMousePosition(canvas, event) {
	let rect = canvas.getBoundingClientRect();
	let x = event.clientX - rect.left;
	let y = event.clientY - rect.top;
	// console.log("Coordinate x: " + x, "Coordinate y: " + y);
	mouseX = x;
	mouseY = y;
}

canvas.addEventListener("click", function (e) {
	shoot()
});



//Stores the bullets
var bullets = [];
//Used to select a bullet to fire
var currentBullet = 0;
//The timer for each bullet
var fireCounter = 30;
var fireRate = 5;
//How far the bullet can go
var range = canvas.width / 2;
//The amount of bullets to create
var bulletAmount = 25;
//Modifies the direction of the bullet when fired
var dir = { x: 1, y: 0 };

//Creates targets
var targets = [];
var targetAmount = 10;

for(let i = 0; i<targetAmount; i++){
	targets[i] = new GameObject({width:30});
	targets[i].color = "green";
	let targetData = getRandomOffscreenPosition();
	targets[i].x = targetData.x;
	targets[i].y = targetData.y;
	targets[i].vx = targetData.vx;
	targets[i].vy = targetData.vy;
	//console.log(targets[i]);
}

for (var b = 0; b < bulletAmount; b++) {
	bullets[b] = new GameObject({ force: 10, width: 10, height:10 });
	//bullets[b].world = level;
	bullets[b].x = player.x;
	bullets[b].color = "blue";
	bullets[b].y = -1000;
}

function shoot() {
	if (fireCounter <= 0) {
		//Convert Angle to Radians
		var radians = player.angle * Math.PI / 180;

		//Calculate acceleration modifiers (length and height of player)
		dir.x = Math.cos(radians);
		dir.y = Math.sin(radians);
		//place the bullet at the player's position minus the bullet's world
		bullets[currentBullet].x = player.x + dir.x * 50;
		bullets[currentBullet].y = player.y + dir.y * 50;
		//set the velocity using the dir modifier
		bullets[currentBullet].vx = dir.x * bullets[currentBullet].force;
		bullets[currentBullet].vy = dir.y * bullets[currentBullet].force;
		//reset the fireCounter
		fireCounter = fireRate;
		//increment the currentBullet index so that you can use the next bullet
		currentBullet++;
		//reset the currentBullet index when you exceed the bulletAmount
		if (currentBullet >= bulletAmount) {
			currentBullet = 0;
		}
	}

}

function getRandomOffscreenPosition(canvasWidth = 1000, canvasHeight = 800) {
    const buffer = rand(50,200); // how far offscreen the point can spawn
    const side = Math.floor(Math.random() * 4); // 0 = top, 1 = right, 2 = bottom, 3 = left

    let x, y, vx, vy, dx, dy, radians;

    switch (side) {
        case 0: // top
            x = Math.random() * canvasWidth;
            y = -buffer;
			dx = x - player.x;
			dy = y - player.y;
            break;
        case 1: // right
            x = canvasWidth + buffer;
            y = Math.random() * canvasHeight;
			dx = x - player.x;
			dy = y - player.y;
            break;
        case 2: // bottom
            x = Math.random() * canvasWidth;
            y = canvasHeight + buffer;
			dx = x - player.x;
			dy = y - player.y;
            break;
        case 3: // left
            x = -buffer;
            y = Math.random() * canvasHeight;
			dx = x - player.x;
			dy = y - player.y;
            break;
    }
	radians = Math.atan2(dy, dx);
	vx = -Math.cos(radians);
	vy = -Math.sin(radians);

    return { x, y, vx, vy};
}


function animate() {

	context.clearRect(0, 0, canvas.width, canvas.height);

	point(); //- points at the target
	

	fireCounter--;
	//------------Move bullets and check for collision-------------------
	for(var b = 0; b < bullets.length; b++)
		{
			//-----------------Limits the range------------------
			
			var dx = bullets[b].x - player.x;
			var dy = bullets[b].y - player.y;
			var dist = Math.sqrt(dx * dx + dy * dy);
			let range = 1200;
			if(dist >= range)
			{
				bullets[b].vx = 0;
				bullets[b].y = -1000;
			}
			
			//Checks collision against the targets
			for(let i = 0; i < targets.length; i++)
			{
				if(targets[i].hitTestPoint(bullets[b]))
				{
					bullets[b].vx = 0;
					bullets[b].y = -1000;
					let targetData = getRandomOffscreenPosition();
					targets[i].x = targetData.x;
					targets[i].y = targetData.y;
					targets[i].vx = targetData.vx;
					targets[i].vy = targetData.vy;
					score ++;
				}
			}
		
			
			bullets[b].move();
			bullets[b].drawRect();
		
	}

	for(let t= 0; t < targets.length;t++){
		targets[t].move();
		targets[t].drawCircle();

		let dx = targets[t].x - player.x;
		let dy = targets[t].y - player.y;
		let dist = Math.sqrt(dx * dx + dy * dy);

		if(dist<30){
			let targetData = getRandomOffscreenPosition();
			targets[t].x = targetData.x;
			targets[t].y = targetData.y;
			targets[t].vx = targetData.vx;
			targets[t].vy = targetData.vy;
			score++
		}
	}
	
	player.drawTriangle();

}




function point() {
	var dx = mouseX - player.x;
	var dy = mouseY - player.y;

	var dist = Math.sqrt(dx * dx + dy * dy);

	var radians = Math.atan2(dy, dx);

	player.angle = radians * 180 / Math.PI;
}






