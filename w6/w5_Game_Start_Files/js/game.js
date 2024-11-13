/*-------------------------------------------
Game Setup
 1. canvas 
 2. context
 3. frame rate
 4. animation timer runs main function 60 frames per second
-------------------------------------------*/
var c = document.querySelector(`canvas`)
var ctx = c.getContext(`2d`)


var fps = 1000/60
var timer = setInterval(main, fps)



/*------------Declare Variables Here--------*/
//avatar
var avatar = new GameObject();
avatar.color = `#613613`;
avatar.vx = 2;
avatar.vy = 2;

//sheep
var amt = 50;
var sheep = [];
for(var i=0; i<amt; i++)
    {
       console.log(`baaa! ${i}`)
       sheep[i] = new GameObject();
       sheep[i].color = `#ffffff`;
       
       sheep[i].w = 18; 
       sheep[i].h = 18;
       sheep[i].x = rand(150, c.width);
       sheep[i].y = rand(150, c.height);
       
        
        while(sheep[i].isOverPoint(avatar))
        {
            if(sheep[i].x < avatar.x)
            {
               sheep[i].x-=1;
            }
            if(sheep[i].x >= avatar.x)
            {
               sheep[i].x++;
            }
        }
    };

//gate
var gate = c.getContext(`2d`)


/*--------------main()------------------------
This is the function that makes the game work
---------------------------------------------*/

function main()
{
    //erases the screen
    ctx.clearRect(0,0,c.width,c.height);  
    ctx.fillStyle = `#68bf4d`;
    ctx.fillRect(0,0,c.width,c.height);
    //gate
    gate.beginPath()
    gate.moveTo(0,0)
    gate.lineTo(150,0)
    gate.lineTo(150,130)

    
    gate.strokeStyle = "rgb(32,32,32)"
    gate.lineWidth = 5


    
    gate.stroke()
    gate.closePath()

    gate.beginPath()
    gate.moveTo(0,0)
    gate.lineTo(0,150)
    gate.lineTo(130,150)


    gate.strokeStyle = "rgb(32,32,32)"
    gate.lineWidth = 5



    gate.stroke()
    gate.closePath()

   
    //Any changes to numbers
    if(d==true){ avatar.x += avatar.vx; }
    if(a==true){ avatar.x += -avatar.vx;}
    if(w==true){ avatar.y += -avatar.vy;}
    if(s==true){ avatar.y += avatar.vy; }
    //Any collision detection 
    if(avatar.x < 0 + avatar.w/2){avatar.x = 0 + avatar.w/2;}
    if(avatar.x > c.width + -avatar.w/2){avatar.x = c.width + -avatar.w/2;}
    if(avatar.y < 0 + avatar.h/2){avatar.y = 0 + avatar.h/2;}
    if(avatar.y > c.height + -avatar.h/2){avatar.y = c.height + -avatar.h/2;} 
    //draw the pictures
    for(var i=0; i<sheep.length; i++)
        {
            
            if(sheep[i].overlaps(avatar))
                {
                    console.log(`boop!`)
                    sheep[i].x = 100;
                    sheep[i].y = 100;
                    
                }
            sheep[i].render();
         }
         avatar.render();

         
}


//random number generator
function rand(_low, _high)
{
    return Math.random()*(_high - _low) + _low;
}
//Converts degrees to radians
function radians(_deg)
{
    return _deg * Math.PI/180
}

//Converts radians to degrees
function degrees(_rad)
{
    return _rad * 180/Math.PI
}



function rand(_low, _high)
{
    return Math.random()*(_high - _low) + _low;
}
//-------Diagram--------
//
//              /|        c = the hypoteneuse
//            c / |        b = height
//             /  | b      a = width
//            /   |        T = arch tangent angle
//           /T___|
//             a
//
//--------------------------

//To get a and b (displacement) when you know two points
//  
//    a = destination.x - gateting.x
//    b = destination.y - gateting.y
//
//To get the total distance (hypotenuese) between two points
//    c = Math.sqrt(_a*_a + _b*_b)

//To get the arc tangent angle (labeled T in the diagram)
//    radians = Math.atan2(b, a)

//To find a and b if you know c and T
//    a = Math.cos(T) * c
//    b = Math.sin(T) * c