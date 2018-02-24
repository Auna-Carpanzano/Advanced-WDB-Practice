// forEach
function doubleValues(arr) {
  var newArr = [];
  arr.forEach(function(val) {
    newArr.push(val * 2);
  });
  return newArr;
}