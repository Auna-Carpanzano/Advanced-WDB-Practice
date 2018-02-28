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
