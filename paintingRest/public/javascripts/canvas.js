var app = app || {};
app.context = $('canvas')[0].getContext("2d");
app.canvas = $('canvas');
app.radius = 10;
var putPoint = function(e){
  app.context.beginPath();
  app.context.arc(e.offsetX, e.offSetY, radius, 0, Math.PI*2)
  app.context.fill();
}


app.canvas.addEventListener('mousedown', putPoint);
