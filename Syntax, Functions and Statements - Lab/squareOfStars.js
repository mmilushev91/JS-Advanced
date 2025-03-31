function solve(starsCount = 5) {
  let printLine = "";
  
  for (let i = 0; i < starsCount; i++) {
    printLine += "*";
  }
  
  for (let i = 0; i < starsCount; i++) {
    console.log(printLine)
  }
}
