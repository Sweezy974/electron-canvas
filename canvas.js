const $ = require('jquery');

var colorPurple = "#cb3594";
var colorGreen = "#659b41";
var colorYellow = "#ffcf33";
var colorBrown = "#986928";
// var curColor = "#fffff";
var clickColor = new Array();
var colorWhite = "#ffffff";

context = document.getElementById('canvas').getContext("2d");

$('#canvas').mousedown(function(e){
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;

  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
});


$('#canvas').mousemove(function(e){
  if(paint){
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
  }
});


$('#canvas').mouseup(function(e){
  paint = false;
  redraw();
});

$('#canvas').mouseleave(function(e){
  paint = false;
});



var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function addClick(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
// clickTool.push(curTool);
// clickSize.push(curSize);
  clickDrag.push(dragging);
  clickColor.push(curColor);
}

function redraw(){
  context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

  // context.strokeStyle = "#df4b26";
  context.lineJoin = "round";
  context.lineWidth = 5;

  for(var i=0; i < clickX.length; i++) {
    context.beginPath();
    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       context.moveTo(clickX[i]-1, clickY[i]);
     }
     context.lineTo(clickX[i], clickY[i]);
     context.closePath();
     context.strokeStyle = clickColor[i];
     context.stroke();
  }
}
function clearCanvas()
{
  var canvasWidth = 490;
  var canvasHeight = 220;
	context.clearRect(0, 0, canvasWidth, canvasHeight);

}

function changeColorPurple(){
curColor = colorPurple;
}

function changeColorGreen(){
curColor = colorGreen;
}

function changeColorYellow(){
curColor = colorYellow;
}

function changeColorBrown(){
curColor = colorBrown;
}

function eraser() {
  curColor = colorWhite;
}
