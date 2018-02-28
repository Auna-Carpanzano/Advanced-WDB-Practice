// DESTRUCTURING ARRAYS AND OBJECTS
function displayStudentInfo(obj) {
  var {first, last} = obj;
  return `Your full name is ${first} ${last}`;
}

function printFullName({first, last}) {
  return `Your full name is ${first} ${last}`;
}

function createStudent({likesES2015 = true, likesJavaScript = true} = {}) {
  var start = "The student ";
  if (likesES2015 && likesJavaScript) {
    start += "likes JavaScript and ES2015";
  } else if (likesJavaScript) {
    start += "The student likes JavaScript!";
  } else if (likesES2015) {
    start += "The student likesES2015!";
  } else {
    start += "The student does not like much...";
  }
  return start;
}

function reverseArray(arr) {
  for (var i=0; i <arr.length/2; i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  return arr;
}
