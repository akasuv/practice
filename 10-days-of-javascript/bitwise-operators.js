// https://www.hackerrank.com/challenges/js10-bitwise/problem
function getMaxLessThanK(n, k) {
  let max = 0;

  for (let i = 1; i < n - 1; i++) {
    for (let j = i + 1; j < n + 1; j++) {
      if ((i & j) > max && (i & j) < k) {
        max = i & j;
      }
    }
  }
  return max;
}
