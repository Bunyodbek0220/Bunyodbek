
class Box {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  
  getVolume() {
    return this.length * this.width * this.height;
  }
}


function totalVolume(...boxes) {
  return boxes.reduce((sum, box) => sum + box.getVolume(), 0);
}


const box1 = new Box(10, 10, 8); 
const box2 = new Box(10, 6, 8); 


console.log(box1.getVolume()); 
console.log(box2.getVolume()); 
console.log(totalVolume(b1, b2));
