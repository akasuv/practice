//https://www.hackerrank.com/challenges/js10-arrows/problem
/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
  return nums.map((n) => (n % 2 ? n * 3 : n * 2));
}
