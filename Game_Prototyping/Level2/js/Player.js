// JavaScript Document
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
            context.fillStyle = this.color;
            context.translate(this.x, this.y);
            context.beginPath();
            context.arc(0,0,this.width / 2,0,360*Math.PI/180,true)
            context.fill();
        context.restore();
       
    }  
   
    //This changes the ball's position
    this.move = function()
    {
        this.x += this.vx;
        this.y += this.vy;
    }

    this.left = function()
    {
        return this.x - this.width/2;
    }
    this.right = function()
    {
        return this.x + this.width/2;
    }
   
    this.top = function()
    {
        return this.y - this.height/2;
    }
    this.bottom = function()
    {
        return this.y + this.height/2;
    }
   
    this.hitObject = function(obj)
    {
        if(this.left() < obj.right() &&
           this.right() > obj.left() &&
           this.top() < obj.bottom() &&
           this.bottom() > obj.top())
        {
            return true
        }
        return false;
    }
}
    var w = false;
    var s = false;
    var Up = false;
    var Down = false;

    //Add Event Listeners
    document.addEventListener("keydown", press);
    document.addEventListener("keyup", release);

    //Event Functions
    function press(e)
    {
        //---This logs key codes into the browser's console.
        //console.log("Pressed" + e.keyCode);
       
        if (e.keyCode == 87) {
            w = true;
        }
        if (e.keyCode == 83) {
            s = true;
        }
        if (e.keyCode == 38) {
            Up = true;
        }
        if (e.keyCode == 40) {
            Down = true;
        }
    }

    function release(e)
    {
        //---This logs key codes into the browser's console.
        //console.log("Released" + e.keyCode);
        if (e.keyCode == 87) {
            w = false;
        }
        if (e.keyCode == 83) {
            s = false;
        }
        if (e.keyCode == 38) {
            Up = false;
        }
        if (e.keyCode == 40) {
            Down = false;
        }
    }
        