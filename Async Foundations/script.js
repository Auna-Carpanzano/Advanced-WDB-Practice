// forEach structure with callback function
function forEach(arr, callback) {
  for (var i=0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

// Stand alone findIndex function
function findIndex(arr, callback) {
  for (var i=0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
}

// setInterval exercise
function countDown(seconds) {
  
}