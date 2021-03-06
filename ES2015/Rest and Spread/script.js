// REST AND SPREAD
function smallestValue(...nums) {
  return Math.min(...nums);
}

function placeInMiddle(arr, vals) {
  let mid = Math.floor(arr.length/2);
  arr.splice(mid, 0, ...vals);
  return arr;
}

function joinArrays(...args) {
  return args.reduce((acc, next) => acc.concat(next), []);
}

function sumEvenArgs(...args) {
  return args.reduce((acc, next) => next % 2 === 0 ? acc += next : acc, 0);
}