function GameObject()
{
 //ball's location
 this.x = canvas.width/2;
 this.y = canvas.height/2;
 //ball's dimensions
 this.width = 100;
 this.height = 100;
 //ball's velocity or speed on each axis
 this.vx = 0;
 this.vy = 0;
 //ball's color
 this.color = "#ff0000";
 //draws the rectangle
 this.drawRect = function()
 {
  context.save();
   context.fillStyle = this.color;
   context.translate(this.x, this.y);
   context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
  context.restore();
  
 } 
 //This draws the ball to the screen
 this.drawCircle = function()
 {
  context.save();
   context.fillStyle = this.ric;
   context.translate(this.x, this.y);
   context.beginPath();
   context.arc(0,0,this.width / 2,0,360*Math.PI/180,true)
   context.fill();
  context.restore();
  
 } 
 //This changes the ball's position
 this.left = function() 
 {
  return {x:this.x - this.width/2 , y:this.y}
 }
 this.right = function() 
 {
  return {x:this.x + this.width/2 , y:this.y}
 }
 this.top = function() 
 {
  return {x:this.x, y:this.y - this.height/2}
 }
 this.bottom = function() 
 {
  return {x:this.x , y:this.y + this.height/2}
 }
 this.hitTestObject = function(obj)
 {
  if(this.left().x <= obj.right().x && 
     this.right().x >= obj.left().x &&
     this.top().y <= obj.bottom().y &&
     this.bottom().y >= obj.top().y)
  {
   return true
  }
  return false;
 }
 this.hitTestPoint = function(obj)
 {
  if(obj.x >= this.left().x && 
     obj.x <= this.right().x &&
     obj.y >= this.top().y &&  
     obj.y <= this.bottom().y)
  {
   return true;
  }
  return false;
 }
}
 var a = false;
 var d = false;

 //Add Event Listeners
 document.addEventListener("keydown", press);
 document.addEventListener("keyup", release);

 //Event Functions
 function press(e)
 {
  //---This logs key codes into the browser's console.
  //console.log("Pressed" + e.keyCode);
  
  if (e.keyCode == 65) {
   a = true;
  }
  if (e.keyCode == 68) {
   d = true;}
  
 }

 function release(e)
 {
  //---This logs key codes into the browser's console.
  //console.log("Released" + e.keyCode);
  if (e.keyCode == 65) {
   a = false;
  }
  if (e.keyCode == 68) {
   d = false;
  }

 }
 function death()
 {
  player.color = 'red'
 }
 function goal()
 {
  player.color = 'green'
 }