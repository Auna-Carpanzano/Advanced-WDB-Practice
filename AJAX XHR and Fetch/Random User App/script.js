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
    var fullname = data.results[0].name.first + " " + data.results[0].name.last;
    fullnameDisplay.innerText = fullname;
    avatarDisplay.src = data.results[0].picture.medium;
  })
  .catch(function(err) {
    console.log(err);
  })
});
