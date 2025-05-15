var c = document.querySelector(`canvas`)
var ctx = c.getContext(`2d`)
ctx.fillStyle = `#008000ff`
ctx.fillRect(0, 0, c.width, c.height)
var fps = 1000/60
var interval = 1000/60;
var timer = setInterval(main, interval);

var score = 0

var avatar = new GameObject();
avatar.color = `#ff0099`;
avatar.vx = 2;
avatar.vy = 2;

var collect = new GameObject();
collect.x = 100;
collect.y = 100;
collect.w = 18;
collect.h = 18;
collect.color = `#2244ff`;

var minutes = 0
var seconds = 60
var timesUp

var timerText = new GameObject();
timerText.x = c.width/2 - 100
timerText.y = c.height/2 - 250
timerText.color = "#000"


setTimeout(setTimer, 1000)

function setTimer(){
	seconds -= 1
	if(seconds > 0){
		setTimeout(setTimer, 1000);
	}
	
}

var amt = 50;
var pickups = [];

for(var i=0; i<amt; i++)
{
    pickups[i] = new GameObject();
    pickups[i].color = `#ffff00`;
    pickups[i].w = 18; 
    pickups[i].h = 18;
    pickups[i].x = rand(0, c.width);
    pickups[i].y = rand(0, c.height);
    
     while(pickups[i].overlaps(avatar))
    {
        if(pickups[i].x < avatar.x)
        {
            pickups[i].x-=1;
        }
        if(pickups[i].x >= avatar.x)
        {
            pickups[i].x++;
        }
    }
};

function main()
{
    ctx.clearRect(0,0,c.width,c.height); 

   if(d==true)
    {
         avatar.x += avatar.vx; 
    }
    if(a==true)
    {
         avatar.x += -avatar.vx;
    }
    if(w==true)
    { 
        avatar.y += -avatar.vy;
    }
    if(s==true)
    {
        avatar.y += avatar.vy;
    }

    if(avatar.x < 0 + avatar.w/2)
    {
        avatar.x = 0 + avatar.w/2;
    }
    if(avatar.x > c.width + -avatar.w/2)
    {
        avatar.x = c.width + -avatar.w/2;
    }
    if(avatar.y < 0 + avatar.h/2)
    {
        avatar.y = 0 + avatar.h/2;
    }
    if(avatar.y > c.height + -avatar.h/2)
    {
        avatar.y = c.height + -avatar.h/2;
    } 


     if(collect.overlaps(avatar))
    {
        collect.x = 1000;
        score++;
    }
//win function
    if (score == 51 && seconds > 0)
    {
        ctx.fillText(`YOU WIN`, 300, 70)
    }
    if (seconds == 0)
    {
    ctx.fillText(`You Lose...`, 300, 70)
    }
for(var i=0; i<pickups.length; i++)
    {
       if(pickups[i].overlaps(avatar))
            {
                pickups[i].x = 10000;
                score++
            }
        pickups[i].render();
    }

    collect.render();
    avatar.render();
    ctx.textAlign = `center`;
    ctx.font =`16px Arial`;
    ctx.fillText(`Score = ${score}`, 200, 70)	
    if (seconds > 0 && score != 51)
    {
	ctx.fillText(`${seconds}`, 300, 70)
    }
}
	
function rand(_low, _high)
{
    return Math.random()*(_high - _low) + _low;
}