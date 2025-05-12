var c = document.querySelector(`canvas`)
var ctx = c.getContext(`2d`)
ctx.fillStyle = `#008000ff`
ctx.fillRect(0, 0, c.width, c.height)
var fps = 1000/60
var timer = setInterval(main, fps)

var score = 0

var avatar = new GameObject();
avatar.color = `#ff0099`;
avatar.vx = 2;
avatar.vy = 2;

var testPickup = new GameObject();
testPickup.x = 100;
testPickup.y = 100;
testPickup.w = 18;
testPickup.h = 18;
testPickup.color = `#2244ff`;

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

   if(d==true){ avatar.x += avatar.vx; }
    if(a==true){ avatar.x += -avatar.vx;}
    if(w==true){ avatar.y += -avatar.vy;}
    if(s==true){ avatar.y += avatar.vy; }

    if(avatar.x < 0 + avatar.w/2){avatar.x = 0 + avatar.w/2;}
    if(avatar.x > c.width + -avatar.w/2){avatar.x = c.width + -avatar.w/2;}
    if(avatar.y < 0 + avatar.h/2){avatar.y = 0 + avatar.h/2;}
    if(avatar.y > c.height + -avatar.h/2){avatar.y = c.height + -avatar.h/2;} 


     if(testPickup.overlaps(avatar))
    {
        testPickup.x = 1000;
        score++;
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

    testPickup.render();
    avatar.render();
    ctx.textAlign = `center`;
    ctx.font =`64px Arial`;
    ctx.fillText(`Score = ${score}`, 200, 70)
}

function rand(_low, _high)
{
    return Math.random()*(_high - _low) + _low;
}