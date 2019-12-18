const cvs = document.getElementById("cvs");
const c = cvs.getContext("2d");
cvs.setAttribute("width", "50%");
cvs.setAttribute("height", "50%");
cvs.margin = "0 auto";

var myOval = {
  x: cvs.width/2,
  y: cvs.height/2,
  width: cvs.width/4,
  height: cvs.height/8,
};
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
  }
  ctx.clearRect(0,0,canvas.width, canvas.height);
  drawOval(shape, ctx);
  requestAnimFrame(function() {
    animate(shape, canvas, ctx);
  });
}

drawOval(myOval, c);
document.getElementById("ovalButton").addEventListener("click", function() {animate(myOval, cvs, c);});
  