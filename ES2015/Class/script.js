// CLASS KEYWORD
class Person {
  constructor(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
 }
  multiplyFavoriteNumber(num) {
    return num * this.favoriteNumber;
  }
}

// INHERITANCE AND SUPER
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  start() {
    return "VROOM!";
  }
  toString() {
    return `The make, model, and year are ${make} ${model} ${year}`;
  }
}
