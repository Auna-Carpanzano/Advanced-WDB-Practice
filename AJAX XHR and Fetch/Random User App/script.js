var url = "https://randomuser.me/api/";
var avatarDisplay = document.getElementById("avatar");
var fullnameDisplay = document.getElementById("fullname");
var usernameDisplay = document.getElementById("username");
var emailDisplay = document.getElementById("email");
var cityDisplay = document.getElementById("city");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  fetch(url)
  .then(function(res) {
    console.log(res);
    return res.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  })
});
