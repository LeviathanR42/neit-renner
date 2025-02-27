/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	info:{
		src:`images/spritesheet.png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:256, height:256, startX:0, startY:0},
				{width:256, height:256, startX:0, startY:0},
				{width:256, height:256, startX:0, startY:0},
				{width:256, height:256, startX:0, startY:0},
				{width:256, height:256, startX:256, startY:0},
				{width:256, height:256, startX:512, startY:0},
				{width:256, height:256, startX:768, startY:0},
				{width:256, height:256, startX:1024,startY:0},
				{width:256, height:256, startX:1280,startY:0},
				{width:256, height:256, startX:1536,startY:0},
			]
		},
		//The walwidth:256, height:256,
		walk:
		{
			fps:3,
			cycle:true,
			frames:
			[
				{width:256, height:256, startX:1792, startY:0},
				{width:256, height:256, startX:2048, startY:0},
				{width:256, height:256, startX:2304, startY:0},
				{width:256, height:256, startX:2560, startY:0},
			]
		},
		//The jump animation 
		jump:
		{
			fps:15,
			cycle:false,
			frames:
			[
				{width:256, height:256, startX:2816, startY:0},
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:256, height:256, startX:3072, startY:0},
			]
		},
		//The attack animation 
		attack:
		{
			fps:3,
			cycle:false,
			//width:300,
			frames:
			[
				{width:256, height:256, startX:3328, startY:0},
				
			]
		},
		bullet:
		{
			fps:12,
			cycle:true,
			//width:300,
			frames:
			[
				{width:256, height:256, startX:3584, startY:0},
				{width:256, height:256, startX:3840,startY:0},

				
			]
		}
	}
		
}