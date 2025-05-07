// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var force = 1;
var ball;
var player1;
var player2;

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");  
   
    player1 = new GameObject();

    player1.width = 25;
    player1.height = 125;
    player1.x = 50;

    player2 = new GameObject();

    player2.width = 25;
    player2.height = 125;
    player2.x = 950;

    ball= new GameObject();
    //------Declare the ball's speed on the x and y axis------
    ball.vx = -4;
    ball.vy = 0;
    //--
   
    timer = setInterval(animate, interval);


function animate()
{
    context.clearRect(0,0,canvas.width, canvas.height);
   
    //----Movement Using the ball's move() function----
    ball.move();    

    if (w) {
        console.log("Moving UP");
        player1.y += -2;
    }
    if (s) {
        console.log("Moving Down");
        player1.y += 2;
    }
    if (Up) {
        console.log("Moving UP");
        player2.y += -2;
    }
    if (Down) {
        console.log("Moving Down");
        player2.y += 2;
    }
   
    //---------------------------------------------------      

    //Bounce Ball off Right
    if(ball.x > canvas.width - ball.width/2)
    {
        ball.vx = -ball.vx;

        //Change ball to random color
        ball.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    }
    //Bounce Ball off Left
    if(ball.x < ball.width/2)
        {
            ball.x = canvas.width/2
            ball.y = canvas.height/2;

            //Change ball to random color
            ball.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
        }
       
    //Bounce Ball off Top
    if(ball.y < ball.height/2)
        {
            ball.y = ball.height/2;
            ball.vy = -ball.vy;

            //Change ball to random color
            ball.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
        }
   
    //Bounce Ball off bottom
    if(ball.y > canvas.height - ball.height/2)
        {
            ball.y = canvas.height - ball.height/2;
            ball.vy = -ball.vy;
           
            //Change ball to random color
            ball.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
        }

    //Limiting player to canvas
   
    if(player1.y < 0 + player1.height/2)
        {
            player1.y = 0 + player1.height/2;
        }
    if(player1.y > canvas.height + -player1.height/2)
        {
            player1.y = canvas.height + -player1.height/2;
        }
        if(player2.y < 0 + player2.height/2)
            {
                player2.y = 0 + player2.height/2;
            }
        if(player2.y > canvas.height + -player2.height/2)
            {
                player2.y = canvas.height + -player2.height/2;
            }

        //ball collosion with paddle
        if(player1.hitObject(ball))
            {
                 //ball hits top
                 if(ball.y < player1.y - player1.height/6)
                 {
                   ball.vx = -ball.vx + force;//positive speed;
                   ball.vy =  -ball.vy - force;//negative speed;
                 }
                 //middle
                else if(ball.y < player1.y + player1.height/3)
                    {
                      ball.vx = -ball.vx - force;//positive speed;
                        //ball.vy =  -ball.vy - force;//negative speed;
                    }
                    else{
                        ball.vx = - ball.vx + force;
                        ball.vy = -ball.vy +force
                    }
            }
            if(player2.hitObject(ball))
                {
                     //ball hits top
                     if(ball.y < player2.y - player2.height/6)
                     {
                       ball.vx = -ball.vx + force;//positive speed;
                       ball.vy =  -ball.vy - force;//negative speed;
                     }
                     //middle
                    else if(ball.y < player2.y + player2.height/3)
                        {
                          ball.vx = -ball.vx - force;//positive speed;
                            //ball.vy =  -ball.vy - force;//negative speed;
                        }
                        else{
                            ball.vx = - ball.vx + force;
                            ball.vy = -ball.vy +force
                        }
                }


    ball.drawCircle();
    player1.drawRect();
    player2.drawRect();
}
//AHGHHHHHHHHHHH