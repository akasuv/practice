//https://www.hackerrank.com/challenges/js10-loops/problem
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  let vowels = [];
  let consonants = [];

  for (let i = 0; i !== s.length; i++) {
    if (["a", "e", "i", "o", "u"].includes(s[i])) {
      vowels.push(s[i]);
    } else {
      consonants.push(s[i]);
    }
  }
  vowels.forEach((c) => console.log(c));
  consonants.forEach((c) => console.log(c));
}
