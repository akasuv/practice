//https://www.hackerrank.com/challenges/js10-count-objects/problem
/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  return objects.reduce((acc, cur) => (cur.x === cur.y ? ++acc : acc), 0);
}
