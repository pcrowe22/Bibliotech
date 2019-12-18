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
cvs.setAttribute("width", "90%");
cvs.setAttribute("height", "70%");
cvs.setAttribute("margin-left", "auto");
cvs.setAttribute("margin-right", "auto");

var myOval = {
  x: cvs.width/2,
  y: cvs.height/2,
  width: cvs.width/4,
  height: cvs.height/8,
};
var initialOval = myOval;
function drawOval(shape, ctx) {
  ctx.beginPath();
  ctx.ellipse(shape.x, shape.y, shape.width, shape.height, 0, 0, 2*Math.PI);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "black";
  ctx.stroke();
}
function animate(shape, canvas, ctx) {
  var newW = shape.width*1.1;
  var newH = shape.height*1.1;
  if (newW < canvas.width-canvas.width*.1) {
    shape.width = newW;
    shape.height = newH;
  } else {
    var newOval = initialOval;
    drawOval(newOval, ctx);
    animate(newOval, canvas, ctx);
  }
  ctx.clearRect(0,0,canvas.width, canvas.height);
  drawOval(shape, ctx);
  requestAnimFrame(function() {
    animate(shape, canvas, ctx);
  });
}

drawOval(myOval, c);
document.getElementById("ovalButton").addEventListener("click", function() {animate(myOval, cvs, c);});
  