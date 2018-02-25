function hasOddNumber(arr){
  return arr.some(function(val) {
    return val % 2 !== 0;
  });
}

function hasAZero(num){
  return num.toString().split("").some(function(val) {
    return val === "0";
  });
}

function hasOnlyOddNumbers(arr){
  return arr.every(function(val) {
    return val % 2 !== 0;
  });
}