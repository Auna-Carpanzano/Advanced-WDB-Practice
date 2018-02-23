var url = "https://randomuser.me/api/";
var avatar = document.getElementById("avatar");
var fullname = document.getElementById("fullname");
var username = document.getElementById("username");
var email = document.getElementById("email");
var city = document.getElementById("city");
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
