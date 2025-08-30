class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  
  getArea() {
    return Math.PI * this.radius ** 2;
  }

  
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}


const c1 = new Circle(100);
console.log(c1.getArea().toFixed(2));
console.log(c1.getPerimeter().toFixed(2));

const c2 = new Circle(23);
console.log( c2.getArea().toFixed(2));
console.log(c2.getPerimeter().toFixed(2));
