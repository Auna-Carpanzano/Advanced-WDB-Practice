function extractValue(arr, key){
  return arr.reduce(function(acc, next) {
    acc.push(next[key]);
    return acc;
  },[]);
}