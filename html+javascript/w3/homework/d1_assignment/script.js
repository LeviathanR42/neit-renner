//write our w3 hw JS in this file!

//selecting &storing the canvas element to use for the asignment 
//we are drawing ON TOP OF the background image
var canvas = document.querySelector("canvas")

//RECTANGLE------------------------------------------------------
var rectangle = canvas.getContext("2d")

rectangle.beginPath()

rectangle.moveTo(85, 302)               //origin point
rectangle.lineTo(184, 302)              //top side line
rectangle.lineTo(184, 401)              //right side line
rectangle.lineTo(85, 401)               //bottom side line
rectangle.lineTo(85, 302)               //left side line

rectangle.fillStyle = "yellow"          //fill color
rectangle.strokeStyle = "black"         //stroke color
rectangle.lineWidth = 5                 //stroke width

rectangle.fill()
rectangle.stroke()
rectangle.closePath()

//CIRCLE---------------------------------------------------------
var circle = canvas.getContext("2d")

circle.beginPath()
//.arc(): (x-origin, y-origin, radius, start angle --> 0, end angle --> 2 *Math.PI)
circle.arc(385, 441, 66, 0, 2 *Math.PI)
circle.strokeStyle = "red"
circle.fillStyle = "#ffff00"
circle.lineWidth = 5

circle.fill()
circle.stroke()
circle.closePath()

//LINE-------------------------------------------------------------
var line = canvas.getContext("2d")
line.beginPath()

line.moveTo(85, 682)
line.lineTo(277, 548)
line.strokeStyle ="rgb (255, 0, 0)"
line.lineWidth= 5
line.stroke()
line.closePath()

//PENTAGON---------------------------------------------------------
var pentagon = canvas.getContext("2d")

pentagon.beginPath()

pentagon.moveTo(557, 308)
pentagon.lineTo(666, 284)
pentagon.lineTo(724, 379)
pentagon.lineTo(650, 464)
pentagon.lineTo(547, 420)
pentagon.lineTo(557, 308)

pentagon.strokeStyle = "#00ffff"
pentagon.fillStyle = "#ff00ff"
pentagon.lineWidth = 5

pentagon.stroke()
pentagon.fill()
pentagon.closePath()

//STAR-------------------------------------------------------------
var star = canvas.getContext("2d")

star.beginPath()

star.moveTo(635, 496)
star.lineTo(667, 554)
star.lineTo(733, 566)
star.lineTo(688, 616)
star.lineTo(695, 681)
star.lineTo(635, 652)
star.lineTo(575, 681)
star.lineTo(583, 616)
star.lineTo(537,567)
star.lineTo(603, 554)
star.lineTo(635, 496)

star.strokeStyle = "rgb (32, 32, 32)"
star.fillStyle = "#ffff00"
star.lineWidth = 5

star.stroke()
star.fill()
star.closePath()