// Closures
function specialMultiply(a, b) {
  if (arguments.length === 1) {
    return function(b) {
      return a * b;
    };
  }
  return a * b;
}

function guessingGame(amount){
  var answer = Math.floor(Math.random()*11);
  var guesses = 0;
}
