//https://www.hackerrank.com/challenges/js10-arrays/problem
/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  // Complete the function
  let max = nums[0];
  let secLarge = nums[0];

  for (let i = 1; i < nums.length; i++) {
    max = nums[i] > max ? nums[i] : max;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > secLarge && nums[i] !== max) {
      secLarge = nums[i];
    }
  }

  return secLarge;
}
