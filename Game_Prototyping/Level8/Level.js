
canvas = document.getElementById("canvas");
function Level()
{
	this.l1 = [
				[2,2,2,2,2,2,2,2,2,2],
				[2,2,2,0,0,0,0,0,3,2],
				[2,2,2,0,2,2,2,2,2,2],
				[2,0,0,0,2,2,0,0,0,2],
				[2,0,2,2,2,2,0,2,0,2],
				[2,0,0,0,0,0,0,2,0,2],
				[2,2,2,2,2,2,2,2,0,2],
				[2,0,0,0,0,0,0,0,0,2],
				[2,0,2,2,2,2,2,2,2,2],
				[2,0,0,0,0,2,0,0,0,2],
				[2,2,2,2,0,2,0,2,0,2],
				[2,0,0,0,0,2,0,2,0,2],
				[2,0,2,2,2,2,0,2,0,2],
				[2,0,0,0,0,0,0,2,0,2],
				[2,2,2,2,2,2,2,2,0,2],
				[2,1,0,0,4,0,0,0,0,2],
				[2,2,2,2,2,2,2,2,2,2]
			];
	
	this.grid = [];
	
	this.generate = function(level)
	{
		var tileWidth = canvas.width/level[0].length;
		var tileHeight = canvas.height/level.length;
		var g = 0;
		var x = tileWidth/2;
		var y = tileHeight/2;
		
	
	}			
}
			