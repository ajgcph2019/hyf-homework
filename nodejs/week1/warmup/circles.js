
class Circle {

  constructor(radius) {
    this.radius = radius;
  }
  getDiameter() {
    return 2 * this.radius;
  }
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}
const circle = new Circle(10);

console.log('Diameter =', circle.getDiameter().toFixed(2));
circle.getCircumference();
console.log('Circumference =', circle.getCircumference().toFixed(2));
circle.getArea();
console.log('Area =', circle.getArea().toFixed(2));


