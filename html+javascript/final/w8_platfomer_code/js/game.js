
var c = document.querySelector(`canvas`)
var ctx = c.getContext(`2d`)
var fps = 1000/60
var timer = setInterval(main, fps)
function main()
{
    ctx.clearRect(0,0,c.width,c.height); 
    state()
}

//setup
var state;
var button = new GameObject('#start');
var avatar = new GameObject('#avatar');
//var star = new GameObject('#star')
var ground = new GameObject();
//var wall = new GameObject();
var level = new GameObject();

   
var platform = []

    var amt = 1;
    var star = [];
    var starCount = 0
    for(var i=0; i<amt; i++)
        {
        star = new GameObject('#star');
        star.w = 15; 
        star.h = 15;
        star.x = 80
        star.y = 50
        star.world = level
            
        };

        var amt = 1;
        var star1 = [];
        
        for(var i=0; i<amt; i++)
            {
            star1 = new GameObject('#star1');
            star1.w = 15; 
            star1.h = 15;
            star1.x = 690
            star1.y = 160
            star1.world = level
                
            };
            
            var amt = 1;
            var star2 = [];
        
        for(var i=0; i<amt; i++)
            {
            star2 = new GameObject('#star2');
            star2.w = 15; 
            star2.h = 15;
            star2.x = 317
            star2.y = 289
            star2.world = level
                
            };
            var amt = 1;
            var star3 = [];
            
        for(var i=0; i<amt; i++)
            {
            star3 = new GameObject('#star3');
            star3.w = 15; 
            star3.h = 15;
            star3.x = 683
            star3.y = 439
            star3.world = level
                
            };
            for(var i=0; i<amt; i++)
                {
                star4 = new GameObject('#star4');
                star4.w = 15; 
                star4.h = 15;
                star4.x = 111
                star4.y = 367
                star4.world = level
                    
                };

                for(var i=0; i<amt; i++)
                    {
                    star5 = new GameObject('#star5');
                    star5.w = 15; 
                    star5.h = 15;
                    star5.x = 155
                    star5.y = 201
                    star5.world = level
                        
                    };
                    for(var i=0; i<amt; i++)
                        {
                        star6 = new GameObject('#star6');
                        star6.w = 15; 
                        star6.h = 15;
                        star6.x = 471
                        star6.y = 102
                        star6.world = level
                            
                        };
                        for(var i=0; i<amt; i++)
                            {
                            star7 = new GameObject('#star7');
                            star7.w = 15; 
                            star7.h = 15;
                            star7.x = 268
                            star7.y = 61
                            star7.world = level
                                
                            };
                            for(var i=0; i<amt; i++)
                                {
                                star8 = new GameObject('#star8');
                                star8.w = 15; 
                                star8.h = 15;
                                star8.x = 516
                                star8.y = 248
                                star8.world = level
                                    
                                };

    
function init()
{
    state = menu

    avatar.color = `blue`;

    level.x = 0; 
    level.y = 0;

    

    ground.color = `black`;
    ground.w = c.width;
    ground.h = c.height*.001;
    ground.y = c.height - ground.h/2;
    ground.world = level

    for(let i = 0; i < 10; i++)
        {
            platform[i] = new GameObject();
            platform[i].w=121;
            platform[i].h=30;
            platform[i].color = 'tan';
            ground.world = level
        }

        platform[0].x=681
        platform[0].y=466

        platform[1].x=401
        platform[1].y=437

        platform[2].x=114
        platform[2].y=391

        platform[3].x=314
        platform[3].y=310

        platform[4].x=512
        platform[4].y=273

        platform[5].x=689
        platform[5].y=189

        platform[6].x=470
        platform[6].y=126

        platform[7].x=270
        platform[7].y=84

        platform[8].x=89
        platform[8].y=72

        platform[9].x=157
        platform[9].y=227


        
        
        
    /*platform.w = 80;
    platform.h = 14;
    platform.color = `tan`
    platform.x=200
    platform.y = 400
    platform.world = level*/
    

    /*wall.h = 200;
    wall.w = 34;
    wall.color = `purple`
    wall.x = 500;
    wall.world = level*/
   
}
init();

/*---------------Game Screens (states)----------------*/
function menu()
{
    if(clicked(button))
    {
        state = game;
    }
    button.h = 500
    button.w = 800
    button.render()
    button.graphic(button.x,button.y);
    button.img.h = 500
    button.img.w = 800


}


function win()
{
    let winn = new GameObject('#winn') ;
    winn.h = 500
    winn.w = 800 
    winn.img.h = 500 
    winn.img.w = 800
    winn.x = 400
    winn.y = 250
    console.log(`hell yeah brother`)
    winn.graphic(winn.x,winn.y);
}
function lose()
{   let loose = new GameObject('#loose') ;
    loose.h = 500
    loose.w = 800 
    loose.img.h = 500 
    loose.img.w = 800
    loose.x = 400
    loose.y = 250
    console.log(`uh oh`)
    loose.graphic(loose.x,loose.y);
}

function game()
{
    if(sp == true && avatar.canJump == true)
    {
        avatar.canJump = false;
        avatar.vy = -25;
    }

    if(a == true)
    {
        avatar.vx += -1;
    }
    if(d == true)
    {
        avatar.vx += 1;
    }

    avatar.vx *= .85;
    avatar.vy += 1;
    avatar.move();

    //used to move the level. 
    var offset = {x:avatar.vx, y:avatar.vy}

    while(ground.isOverPoint(avatar.bottom()))
    {
        avatar.vy = 0;
        avatar.y--;
        offset.y--;
        avatar.canJump = true;
    }
    for(let i = 0; i< platform.length; i++)
    {
         while(platform[i].isOverPoint(avatar.bottom()) && avatar.vy >= 0)
    {
        avatar.vy = 0;
        avatar.y--;
        offset.y--;
        avatar.canJump = true;
    }
    while(star.overlaps(avatar))
        {
            star.x= 2000
            console.log('slay')
            starCount++
        }
    while(star1.overlaps(avatar))
        {
            star1.x= 2000
            console.log('wow')
            starCount++
        }
    while(star2.overlaps(avatar))
         {
            star2.x= 2000
            console.log('yay')
            starCount++
        }
    while(star3.overlaps(avatar))
            {
               star3.x= 2000
               console.log('oh yeah')
               starCount++
           }
    while(star4.overlaps(avatar))
    {
        star4.x= 2000
        console.log('ahaha')
        starCount++
    }
    while(star5.overlaps(avatar))
        {
            star5.x= 2000
            console.log('wooo')
            starCount++
        }
        while(star6.overlaps(avatar))
            {
                star6.x= 2000
                console.log('booyah')
                starCount++
            }
            while(star7.overlaps(avatar))
                {
                    star7.x= 2000
                    console.log('Hazzah')
                    starCount++
                }
                while(star8.overlaps(avatar))
                    {
                        star8.x= 2000
                        console.log('Hurray!')
                        starCount++
                    }
}
if(star.x == 2000 && star1.x == 2000 && star2.x == 2000 && star3.x == 2000 && star4.x == 2000 && star5.x == 2000 && star6.x == 2000 && star7.x == 2000 && star8.x == 2000)
    {
        state = win
    }
if(avatar.y >= 500)
{ 
    
    state = lose
    
}
   /* while(wall.isOverPoint(avatar.right()) && avatar.vx >= 0)
    {
        avatar.vx = 0;
        avatar.x--;
        offset.x--;
    }*/

    /*-------Level movement threshold----*/
    //if(avatar.x > 500 || avatar.x < 300)
    //{
        //Level movement code
        //level.x -= offset.x;
        //avatar.x -= offset.x;
        //level.y -= offset.y;
        //avatar.y -= offset.y;
    //}

    /*----- Camera Code -----------
        var dx = c.width/2 - avatar.x
        var dy = c.height/2 - avatar.y
        
        level.x += dx*.05; 
        avatar.x += dx*.05; 
        level.y += dy*.15; 
        avatar.y += dy*.15; 
    //----------------------------*/
    

    ground.render();
    //wall.render();
    //avatar.render();
    avatar.graphic(avatar.x,avatar.y);
    //platform[i].render();
    star.graphic(star.x,star.y);
    star1.graphic(star1.x,star1.y);
    star2.graphic(star2.x,star2.y);
    star3.graphic(star3.x,star3.y);
    star4.graphic(star4.x,star4.y);
    star5.graphic(star5.x,star5.y);
    star6.graphic(star6.x,star6.y);
    star7.graphic(star7.x,star7.y);
    star8.graphic(star8.x,star8.y);
   
    
    
}


