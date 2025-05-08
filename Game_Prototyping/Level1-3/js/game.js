// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");  
   
    var paddle = new GameObject();
    var ball = new GameObject();
    var textBox = new GameObject ({color: "black"});

    var prevY;
    var p1Wins = 0;

//physics
    var gravity = 1;
    var fX = .97;
    var fY = .97;
    var accel = 1;

//paddle
    paddle.x = canvas.width/2;
    paddle.y = canvas.height - 50;
    paddle.width = 250;
    paddle.height = 40;
    paddle.color = "brown";

//ball
ball.radius = 40;
ball.vx = 5;
ball.vy = 0;
ball.force = 5;
ball.color = "pink";

//text box

textBox.x = 80;
textBox.y = 25;

//timer

timer = setInterval(animate, interval);

// animation

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height)

    //string
    context.save();
    context.strokeStyle = "black";
    context.beginPath();
    context.moveTo(ball.x, ball.y);
    context.lineTo(paddle.x, paddle.y);
    context.closePath();
    context.lineWidth = 1;
    context.stroke();
    context.restore();

    //ball movement
    ball.vy += gravity;
    ball.x += ball.vx;
    ball.y += ball.vy;
    ball.vx *= fX;
    ball.vy *= fY;

    //Paddle movement
    //left
    if(a)
    {
        paddle.vx -= accel;
    }
    //right
    if(d)
        {
            paddle.vx += accel;
        }

paddle.vx *= fX;
paddle.x += paddle.vx;


//Boundries
//P left
if(paddle.x < paddle.width/2)
{
    paddle.x = paddle.width/2;
    paddle.vx = 0;
}
//P right
if(paddle.x > canvas.width - paddle.width/2)
    {
        paddle.x = canvas.width - paddle.width/2;
        paddle.vx = 0;
    }
//Left
if(ball.x < ball.radius)
    {
        ball.x = ball.radius;
        ball.vx = -ball.vx
    }
//Right
if(ball.x > canvas.width - ball.radius)
    {
        ball.x = canvas.width - ball.radius;
        ball.vx = -ball.vx;
    }

//Bottom 
if(ball.y > canvas.height - ball.radius)
{
    ball.y = canvas.height - ball.radius;
    ball.vy = -ball.vy;
    p1Wins = 0;
}

//Top
if (ball.y < ball.radius)
{
    ball.y = canvas.height - ball.radius;
    ball.vy = -ball.vy;
}

//paddle boundry
if(ball.edge(paddle))
{
    ball.y = paddle.y - paddle.height/2 - ball.radius;
    p1Wins++;

    if (ball.x < paddle.x + paddle.width/6 || ball.x > paddle.x - paddle.width/6)
    {
        ball.vy = -35;
        ball.vx = 0;
    }

    if (ball.x > paddle.x - paddle.width/3)
    {
        ball.vy = -35;
        ball.vx = ball.force;
    }

    else if (ball.x < paddle.x - paddle.width/3)
    {
        ball.vy = -35;
        ball.vx = - ball.force;
    }
}
var score = "Score: " + p1Wins;

paddle.drawRect();
ball.drawCircle();
textBox.drawText(score);
}




