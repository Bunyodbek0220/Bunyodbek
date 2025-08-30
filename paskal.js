
function factorial(num) {
  let res = 1;
  for (let i = 1; i <= num; i++) res *= i;
  return res;
}


function combination(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}


function pascalTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      row.push(combination(i, j));
    }
    console.log(row.join(" "));
  }
}


pascalTriangle(10);
