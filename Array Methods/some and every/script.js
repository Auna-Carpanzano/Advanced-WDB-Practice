function hasOddNumber(arr){
  return arr.some(function(val) {
    return val % 2 !== 0;
  });
}