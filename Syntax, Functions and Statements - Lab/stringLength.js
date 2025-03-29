function solve(...strings) {
  const stringsCount = strings.length;
  let stringsLength = 0;

  strings.forEach((string) => (stringsLength += string.length));
  const stringsLengthAvg = Math.floor(stringsLength / stringsCount);

  console.log(stringsLength);
  console.log(stringsLengthAvg);
}

solve("chocolate", "ice cream", "cake");
solve("pasta", "5", "22.3");
