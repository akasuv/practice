//https://www.hackerrank.com/challenges/js10-switch/problem
function getLetter(s) {
  let letter;
  // Write your code here
  let f = s[0];
  switch ("A") {
    case "A": {
      if (/[aeiou]/.test(f)) {
        letter = "A";
        break;
      }
    }
    case "B": {
      if (/[bcdfg]/.test(f)) {
        letter = "B";
        break;
      }
    }
    case "C": {
      if (/[hjklm]/.test(f)) {
        letter = "C";
        break;
      }
    }
    case "D": {
      if (/[npqrstvwxyz]/.test(f)) {
        letter = "D";
      }
    }
  }
  return letter;
}
