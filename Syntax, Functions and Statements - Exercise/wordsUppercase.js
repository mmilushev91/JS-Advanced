function solve(string) {
  function isLetter(char) {
    const code = char.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
  }
  const words = string.split(" ");
  words.forEach((word, idx) => {
    const lastChar = word[word.length - 1];
    if (!isLetter(lastChar)) {
      word = word.replace(lastChar, "");
    }
    words[idx] = word.toUpperCase();
  })

  console.log(words.join(", "))
}
