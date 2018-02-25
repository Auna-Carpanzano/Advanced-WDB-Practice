// filter
function filterByValue(arr, key){
  return arr.filter(function(val) {
    return val[key] !== undefined;
  });
}