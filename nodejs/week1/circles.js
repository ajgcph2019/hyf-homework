
class Circle {

  constructor(radius) {
    this.radius = radius;
  }
    getArea() {
    return Math.PI * Math.pow(this.radius,2);
  }
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
  getDiameter() {
    return 2 * this.radius;
  }
 
}
const circle = new Circle(10);
circle.getArea();
circle.getCircumference();
console.log('Circumference =', circle.getCircumference().toFixed(2));
console.log('Area =', circle.getArea().toFixed(2));
console.log('Diameter =', circle.getDiameter().toFixed(2));




