var canvas;
var context;
var timer;
var interval;
var player;
var friend;
var platform;
var gravity = 1;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new GameObject();

//Friend setup
friend = new GameObject();
friend.color = '#0000ff';
friend.x = 100;

//Creates Ground Platform
platform = new GameObject();
platform.width = 10000;
platform.y = canvas.height;
platform.color = "#00ffff";

//Global Physics Variables
var fX = .97;
var fY = .97;

interval = 1000/60;
timer = setInterval(animate, interval);

function animate(){
    context.clearRect(0,0,canvas.width, canvas.height);	
    player.vy += gravity;
    friend.vy += gravity;
    if (a) {
		player.vx += -player.ax * player.force;
	}
	if (d) {
		player.vx += player.ax * player.force;
	}

    while (platform.hitTestPoint(player.bottom()) && player.vy >= 0) {
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}

    while (platform.hitTestPoint(friend.bottom()) && friend.vy >= 0) {
		friend.y--;
		friend.vy = 0;
	}

    player.vx *= fX;
	player.vy *= fY;

    follow();

    player.move();
    friend.move();
    friend.drawRect();
    platform.drawRect();
    player.drawRect();
}

function follow()
{
	var dx = player.x - friend.x;
	var dy = player.y - friend.y;
	
	var dist = Math.sqrt(dx * dx + dy * dy);
	//You will need to check the distance here. Dont forget to set friend.vx to zero to get yoru froend to stop.
    
    var radians = Math.atan2(dy, dx);
	friend.vx = Math.cos(radians) * friend.force;

		if (dist > 200)
		{
			friend.vx *= 2;
			console.log('following')
		}
		else
			{
				friend.vx = 0
				console.log('stop')
			}

}