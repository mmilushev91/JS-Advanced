function solve(starsCount = 5) {
  
  for (let i = 0; i < starsCount; i++) {
    let printLine = "";
    for (let j = 0; j < starsCount; j++) {
      printLine += "*";
    }
    console.log(printLine)
  }
}
