//For this week's Async Assignment I want you to punch the box!

var canvas;
var context;
var timer;
var interval;
var player;
var textBox
var message = ""


canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new GameObject();
textBox = new GameObject({x:canvas.width/2-100,y:0, color:"#000000"});


//Renders Ground Platform
platform0 = new GameObject();
platform0.width = 1000;
platform0.y = player.y + player.height / 2 + platform0.height / 2;
platform0.color = "#00ffff";


//Renders Left Wall
platform1 = new GameObject();
platform1.width = 50;
platform1.height = 600;
platform1.y = platform0.y - platform0.height / 2 - platform1.height / 2;
platform1.x = platform0.x - platform0.width / 2;
platform1.color = "#00ffff";

//Renders Right Wall
platform2 = new GameObject();
platform2.width = 50;
platform2.height = 600;
platform2.y = platform0.y - platform0.height / 2 - platform2.height / 2;
platform2.x = platform0.x + platform0.width / 2;
platform2.color = "#00ffff";

//Renders the Box!!!! <------------------------
platform3 = new GameObject();
platform3.width = 75;
platform3.height = 75;
platform3.y = platform2.y;
platform3.x = canvas.width / 2;
platform3.color = "#0000ff";



//Global Physics Variables
var fX = .97;
var fY = .97;

var gravity = 1;

interval = 1000 / 60;
timer = setInterval(animate, interval);

function animate() {

	context.clearRect(0, 0, canvas.width, canvas.height);

	//Jump with the w key
	if (w && player.canJump) {
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	//Apply acceleration to velocity.
	if (a) {
		player.vx += -player.ax * player.force;
	}
	if (d) {
		player.vx += player.ax * player.force;
	}

	player.vx *= fX;
	player.vy *= fY;

	player.vy += gravity;

	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);

	//Hit the Ground And Walls
	while (platform0.hitTestPoint(player.bottom()) && player.vy >= 0) {
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}

	while (platform1.hitTestPoint(player.left())) {
		player.x++;
		player.vx = 0;
	}

	while (platform2.hitTestPoint(player.right())) {
		player.x--;
		player.vx = 0;
	}

	//These Next Three While Loops Hit the Box
	while (platform3.hitTestPoint(player.top())) {
		player.y++;
		player.vy = 0;
		hitTheBox();
	}

	while (platform3.hitTestPoint(player.topleft())) {
		player.y++;
		player.vy = 0;
		hitTheBox()
	}
	while (platform3.hitTestPoint(player.topright())) {
		player.y++;
		player.vy = 0;
		hitTheBox();
	}
	//These previous three while loops hit the box

	while (platform3.hitTestPoint(player.bottom()) && player.vy >= 0) {
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}





	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect();
	platform3.drawRect();
	player.drawRect();
	textBox.drawText(message);

	//Show hit points
	player.drawDebug();
}

var hitBox = false

function hitTheBox(){
	//Renders Text when you hit the box
	if(!hitBox){
		message = "You hit the box!"
		console.log(message)
		setTimeout(clearMessage,3000)
		hitBox = true
	}
	
}

function clearMessage(){
	message = ""
	hitBox = false
}

