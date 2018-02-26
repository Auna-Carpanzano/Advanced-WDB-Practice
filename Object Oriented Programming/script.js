// Constructor function
function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark = function() {
    console.log(this.name + " just barked!");
  }
}

function Person(firstName, lastName, favoriteColor, favoriteNumber) {

}