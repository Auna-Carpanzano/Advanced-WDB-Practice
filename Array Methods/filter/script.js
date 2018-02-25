// filter
function filterByValue(arr, key){
  return arr.filter(function(val) {
    return val[key] !== undefined;
  });
}

function find(arr, searchValue){
  return arr.filter(function(val) {
    return val === searchValue;
  })[0];
}
