function squareNumber(n) {
  let res = "";
  while (n > 0) {
    let digit = n % 10;     
    res = (digit * digit) + res; 
    n = Math.floor(n / 10); 
  }
  return Number(res);
}


console.log(squareNumber(3221)); 
console.log(squareNumber(3219)); 
console.log(squareNumber(505)); 
