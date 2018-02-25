function extractValue(arr, key){
  return arr.reduce(function(acc, next) {
    acc.push(next[key]);
    return acc;
  },[]);
}

function vowelCount(str){
  var vowels = "aeiou";
  return str.toLowerCase().split("").reduce(function(acc, next) {
    if (vowels.indexOf(next) !== -1) {
      if (acc[next]) {
        acc[next]++;
      } else {
        acc[next] = 1;
      }
    }
    return acc;
  }, {});
}