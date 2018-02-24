// forEach
function doubleValues(arr) {
  var newArr = [];
  arr.forEach(function(val) {
    newArr.push(val * 2);
  });
  return newArr;
}

function onlyEvenValues(arr){
  var newArr = [];
  arr.forEach(function(val) {
    if (val % 2 === 0) {
      newArr.push(val);
    }
  });
  return newArr;
}

function showFirstAndLast(arr){
  var newArr = [];
  arr.forEach(function(val) {
    newArr.push(val[0] + val[val.length-1]);
  });
  return newArr;
}