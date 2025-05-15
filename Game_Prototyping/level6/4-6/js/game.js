var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var timer;
var interval = 1000/60;
timer = setInterval(animate, interval)

var score = 0;
var amount = 5;
var circles = [];
var squares = [];



var fX = .85;
var fY = .97;
var gravity = 1;

var player = new GameObject();
player.width = 50;
player.height = 50;
player.x = canvas.width/2
player.y = canvas.height - 70
player.color = 'yellow'

for(var i = 0; i < amount; i++)
 {
  circles[i] = new GameObject();
  circles[i].width = 15
  circles[i].height = 15
  circles[i].x = Math.random() * canvas.width;
  circles[i].y = 0 - Math.random();
  circles[i].vy = Math.random() * 10 + 5;
 }

for(var i = 0; i < amount; i++)
 {
  squares[i] = new GameObject();
  squares[i].width = 15
  squares[i].height = 15
  squares[i].x = Math.random() * canvas.width;
  squares[i].y = 0 - Math.random();
  squares[i].vy = Math.random() * 10 + 5;
 }



function animate()
{ 
 context.clearRect(0,0,canvas.width, canvas.height); 

    if (a) {
  console.log("Moving UP");
  player.x += -2;
 }
 if (d) {
  console.log("Moving Down");
  player.x += 2;
 }


 for(var p = 0; p < circles.length; p++)
 { 
  circles[p].x += circles[p].vx;
  circles[p].y += circles[p].vy;
   
  if(circles[p].hitTestPoint(player))
  {
            circles[p].y = 0 - Math.random();
            score = 0
   setInterval(function(){player.color = 'red'}, 500)
   player.color = 'yellow'
  
  }

  if(circles[p].y > canvas.height - circles[p].height/2)
  {
   circles[p].y = 0 - Math.random();
   
  }

  
  circles[p].drawCircle();
 }

 for(var p = 0; p < squares.length; p++)
 { 
  squares[p].x += squares[p].vx;
  squares[p].y += squares[p].vy;
   
  if(squares[p].hitTestPoint(player))
  {
            squares[p].y = 0 - Math.random();
            score++
   setInterval(function(){player.color = 'green'}, 500)
   player.color = '#ffff00'
  }

  if(squares[p].y > canvas.height - squares[p].height/2)
  {
   squares[p].y = 0 - Math.random();
  }
  
        squares[p].drawRect();
 }

    //keep player on canvas
 if(player.x < 0 + player.width/2)
  {
   player.x = 0 + player.width/2;
  }
    if(player.x > canvas.width + -player.width/2)
  {
   player.x = canvas.width + -player.width/2;
  } 
    


    player.drawRect();

 context.fillText(`Score: ${score}` , 25, 60);
    context.font = `30px Ariel bold`;
}