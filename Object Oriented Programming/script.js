// Constructor function
function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark = function() {
    console.log(this.name + " just barked!");
  }
}

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.multiplyFavoriteNumber = function(num) {
    return num * this.favoriteNumber;
  };
}

function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}



