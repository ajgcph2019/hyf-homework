const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
const maxRadius = 20;

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillcolor = fillColor;
  }
  draw() {
    //By default canvas takes a size of 300x150 px, will change it to take the full browser window size.
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    context.beginPath();
    context.arc(
      this.x,
      this.y,
      this.r,
      this.startAngle,
      this.endAngle,
      this.fillColor
    );

    context.fillStyle = getRandomColor();
    context.fill();
  }
}

//  const circle1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
// circle1.draw();
//  const circle2 = new Circle(200, 200, 20, 0, 2 * Math.PI, "#000000");
// circle2.draw();
//  const circle3 = new Circle(300, 150, 20, 0, 2 * Math.PI, "#FF0000");
//  circle3.draw();
function drawRandomCircle() {
  const randomX = Math.floor(Math.random() * canvas.width);
  const randomY = Math.floor(Math.random() * canvas.height);
  const randomR = Math.round(Math.random() * maxRadius);
  const randomColor = getRandomColor();

  const circleRandom = new Circle(
    randomX,
    randomY,
    randomR,
    0,
    2 * Math.PI,
    randomColor
  );

  circleRandom.draw();
}
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
setInterval(drawRandomCircle, 100);

//we need two variables for keeping track of whether mouse was click or released.

document.addEventListener("click", onMouseClick, false);
document.addEventListener("mousemove", onMouseMove, false);

function onMouseClick(e) {
  mouseClicked = !mouseClicked;
}
function onMouseMove(e) {
  if (mouseClicked) {
    context.beginPath();
    context.arc(e.clientX, e.clientY, randomR, 0, Math.PI * 2, false);
    context.lineWidth = 5;
    context.strokeStyle = getRandomColor();
    context.stroke();
  }
}
