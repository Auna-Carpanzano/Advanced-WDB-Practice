// DESTRUCTURING ARRAYS AND OBJECTS
function displayStudentInfo(obj) {
  var {first, last} = obj;
  return `Your full name is ${first} ${last}`;
}

function printFullName({first, last}) {
  return `Your full name is ${first} ${last}`;
}
