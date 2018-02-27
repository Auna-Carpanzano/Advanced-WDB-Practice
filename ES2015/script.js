// REFACTOR WITH ARROW FUNCTIONS

//function tripleAndFilter(arr){
//  return arr.map(function(value){
//    return value * 3;
//  }).filter(function(value){
//    return value % 5 === 0;
//  })
//}

let tripleAndFilter = arr => arr.map(value => value * 3).filter(value => value % 5 === 0);
