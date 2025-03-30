function solve(num1, num2, operator) {
  //'+', '-', '*', '/', '%', '**
  const operations = {
    "+": () => num1 + num2,
    "-": () => num1 - num2,
    "*": () => num1 * num2,
    "/": () => num1 / num2,
    "%": () => num1 % num2,
    "**": () => num1 ** num2,
  };
  console.log(operations[operator]());
}

solve(5, 6, "+");
solve(3, 5.5, "*");
