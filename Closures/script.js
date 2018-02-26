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
  var completed = false;
  return function(guess) {
    if (!completed) {
      guesses++;
      if (guess === answer) {
        completed = true;
        return "You got it!";
      }
      else if (guesses === amount) {
        completed = true;
        return "No more guesses the answer was " + answer;
      }
      else if (guess > answer) return "Your guess is too high!";
      else if (guess < answer) return "Your guess is too low!";
    }
    return "You are all done playing!"
  }
}

// Call, apply, and bind
function arrayFrom(arrayLikeObject) {
  return [].slice.call(arrayLikeObject);
}

function sumEvenArguments() {
  var newArg = [].slice.call(arguments);
  return newArg.reduce(function(acc, next) {
    if (next % 2 === 0) {
      return acc + next;
    }
    return acc;
  }, 0);
}

function invokeMax(fn, num) {
  var counter = 0;
}
