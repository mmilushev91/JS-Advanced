function solve(starsCount = 5) {
  const printLine = [];
  
  for (let i = 0; i < starsCount; i++) {
    printLine.push("*");
  }
  
  for (let i = 0; i < starsCount; i++) {
    console.log(printLine.join(" "))
  }
}
