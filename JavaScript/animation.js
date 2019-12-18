window.requestAnimFrame = (
  function(callback) {
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.moxRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
       window.setTimeout(callback, 1000/60);
    };
  })();
const cvs = document.getElementById("cvs");
const c = cvs.getContext("2d");

var myOval = {
  x: cvs.width/2,
  y: cvs.height/2,
  width: cvs.width/4,
  height: cvs.height/8,
  currentPercent: 0,
  endPercent: 10,
};
var initialOval = {
  x: myOval.x,
  y: myOval.y,
  width: myOval.width,
  height: myOval.height,
  currentPercent: myOval.currentPercent,
  endPercent: myOval.endPercent,
};
function drawOval(shape, ctx) {
  ctx.beginPath();
  ctx.ellipse(shape.x, shape.y, shape.width, shape.height, 0, 0, 2*Math.PI);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "black";
  ctx.stroke();
}
var numOvals = 0;
function animate(shape, canvas, ctx, numOvals, initialOval) {
  /*var newW = shape.width*1.1;
  var newH = shape.height*1.1;
  if (newW < canvas.width-canvas.width*.1) {
    shape.width = newW;
    shape.height = newH;
  } else if (numOvals<5){
    numOvals++;
    var newOval = {
      x: initialOval.x,
      y: initialOval.y,
      width: initialOval.width,
      height: initialOval.height,
      currentPercent: initialOval.currentPercent,
      endPercent: initialOval.endPercent,
    };
    drawOval(newOval, ctx);
    animate(newOval, canvas, ctx, numOvals, initialOval);
  }*/
  shape.width = shape.width*1.1;
  shape.height = shape.height*1.1;
  ctx.clearRect(0,0,canvas.width, canvas.height);
  drawOval(shape, ctx);
  shape.currentPercent++;
  if (shape.currentPercent < shape.endPercent) {
    requestAnimFrame(function() {
      animate(shape, canvas, ctx, numOvals, initialOval);
    });
  } else if(numOvals<3){
    numOvals++;
    var newOval = {
      x: initialOval.x,
      y: initialOval.y,
      width: initialOval.width,
      height: initialOval.height,
      currentPercent: initialOval.currentPercent,
      endPercent: initialOval.endPercent,
    };
    animate(newOval, canvas, ctx, numOvals, initialOval);
  }
    
}

drawOval(myOval, c);
document.getElementById("ovalButton").addEventListener("click", function() {animate(myOval, cvs, c, numOvals, initialOval);});