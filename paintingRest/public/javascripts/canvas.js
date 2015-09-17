var app = app || {};
app.canvas = document.getElementById('canvas');
app.context = canvas.getContext('2d');


var radius = 10,
    minRad = 0.5,
    maxRad = 100,
    interval = 5,
    radSpan = document.getElementById('radval'),
    decRad = document.getElementById('decrad'),
    incRad = document.getElementById('incrad');



app.setRadius = function(newRadius){
    if (newRadius < minRad){
      newRadius = minRad;
      radius = newRadius;
      radSpan.innerHTML = radius;
      app.context.lineWidth = radius*2;
    }
    else if (newRadius>maxRad) {
      newRadius = MaxRad;
      radius = newRadius;
      radSpan.innerHTML = radius;
      app.context.lineWidth = radius*2;
    }
    else {
      radius = newRadius;
      app.context.lineWidth = radius*2;
      radSpan.innerHTML = radius
      }
    }

app.mousedown = false;
app.context.lineWidth = radius*2;

app.putPoint = function(e){
  if(app.mousedown){
  app.context.lineTo(e.offsetX, e.offsetY);
  app.context.stroke();
  app.context.beginPath();
  app.context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2)
  // clientX e.clientY relative to browser window
  app.context.fill();
  app.context.beginPath();
  app.context.moveTo(e.offsetX, e.offsetY);
  }
}

app.engage = function(e){
  app.mousedown = true;
   app.putPoint(e);
}

app.disengage = function(){
  app.mousedown = false;
  app.context.beginPath();
}


app.canvas.addEventListener('mousedown', app.engage);
app.canvas.addEventListener('mousemove', app.putPoint);
app.canvas.addEventListener('mouseup', app.disengage);
