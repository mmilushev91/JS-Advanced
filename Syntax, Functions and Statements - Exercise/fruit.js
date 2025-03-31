function solve(fruit, weight, price) {
  const weightKG = weight / 1000;
  const money = weightKG * price;
  
  console.log(`I need ${money.toFixed(2)} to buy ${weightKG.toFixed(2)} kilograms ${fruit}.`)
}
