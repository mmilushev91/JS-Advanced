function solve(start, end) {
  let sum = 0;

  for (let i = Number(start); i <= Number(end); i++) {
    sum += i;
  }

  return sum;
}

console.log(solve("1", "5"));
console.log(solve("-8", "20"));
