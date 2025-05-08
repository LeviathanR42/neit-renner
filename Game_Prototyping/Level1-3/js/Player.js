// JavaScript Document
function GameObject()
{
    //position
    this.x = canvas.width/2;
    this.y = canvas.height/2;
   
    //size
    this.width = 100;
    this.height = 100;
    this.radius = 0;

   
    //physics 
    this.vx = 0;
    this.vy = 0;
    this.force = 0;
   
    //text color
    this.color = "black";
   
    //renders shapes
    this.drawRect = function()
    {
        context.save();
            context.fillStyle = this.color;
            context.translate(this.x, this.y);
            context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
        context.restore();
       
    }  
    this.drawCircle = function()
    {
        context.save();
            context.fillStyle = this.color;
            context.translate(this.x, this.y);
            context.beginPath();
            context.arc(0,0,this.width/2, this.height/2, 360*Math.PI/2, true);
            context.closePath();
            context.fill();
        context.restore();
       
    }  

    this.drawText = function(msg)
    {
        context.save();
        context.fillStyle = this.color;
        context.translate (this.x, this.y);
        context.font = "25px Arial black";
        context.fillText(msg, -75, 70);
        context.restore();
    }
   
    //This changes position
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
   
    this.edge = function(obj)
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
    var a = false;
    var d = false;
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
       
        if (e.keyCode == 65) {
            a = true;
        }
        if (e.keyCode == 68) {
            d = true;
        }
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
        if (e.keyCode == 65) {
            a = false;
        }
        if (e.keyCode == 68) {
            d = false;
        }
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
        