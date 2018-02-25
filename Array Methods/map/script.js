// map
function doubleValues(arr){
  return arr.map(function(val) {
    return val * 2;
  });
}

function valTimesIndex(arr){
  return arr.map(function (val, index) {
    return val * index;
  }); 
}

function extractKey(arr, key) {
  return arr.map(function(val) {
    return val[key];
  });  
}