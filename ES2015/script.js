// REFACTOR WITH ARROW FUNCTIONS

//function tripleAndFilter(arr){
//  return arr.map(function(value){
//    return value * 3;
//  }).filter(function(value){
//    return value % 5 === 0;
//  })
//}

let tripleAndFilter = arr => arr.map(value => value * 3).filter(value => value % 5 === 0);

//function doubleOddNumbers(arr){
//  return arr.filter(function(val){
//      return val % 2 !== 0;
//  }).map(function(val){
//      return val *2;
//  })
//}

let doubleOddNumbers = arr => arr.filter(val => val % 2 !== 0).map(val => val * 2);
