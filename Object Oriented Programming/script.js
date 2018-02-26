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

Vehicle.prototype.turnOn = function() {
  this.isRunning = true;
}

Vehicle.prototype.turnOff = function() {
  this.isRunning = false;
}

Vehicle.prototype.honk = function() {
  if (this.isRunning) {
    return "beep!";
  }
}

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.family = [];
}

Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Person.prototype.addToFamily = function(person) {
  if (this.family.indexOf(person) === -1 && person instanceof Person) {
    this.family.push(person);
  }
  return this.family.length;
}

Array.prototype.map = function(callback) {
  var newArr = [];
  for (var i=0; i <this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
}

String.prototype.reverse = function() {
  var newStr = '';
  for (var i = this.length -1; i >= 0; i--) {
    newStr += this[i];
  }
  return newStr;
}

function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Vehicle.prototype.start = function() {
  return "VROOM!";
}

Vehicle.prototype.toString = function() {
  return "The make, model and year are " + this.make + " " + this.model + " " + this.year; 
}

function Car(make, model, year) {
  Vehicle.apply(this, arguments);
  this.numWheels = 4;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

function Motorcycle(make, model, year) {
  Vehicle.apply(this, arguments);
  this.numWheels = 2;
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;