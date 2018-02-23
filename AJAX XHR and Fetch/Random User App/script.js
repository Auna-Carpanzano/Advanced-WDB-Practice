var url = "https://randomuser.me/api/";
var avatarDisplay = document.getElementById("avatar");
var fullnameDisplay = document.getElementById("fullname");
var usernameDisplay = document.getElementById("username");
var emailDisplay = document.getElementById("email");
var cityDisplay = document.getElementById("city");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  fetch(url)
  .then(parseJSON)
  .then(updateProfile)
  .catch(function(err) {
    console.log(err);
  })
});

function parseJSON (res) {
  return res.json().then(function(parsedData) {
    return parsedData.results[0];
  })
}

function updateProfile (data) {
  var fullname = data.name.first + " " + data.name.last;
  fullnameDisplay.innerText = fullname;
  avatarDisplay.src = data.picture.medium;
  usernameDisplay.innerText = data.login.username;
  emailDisplay.innerText = data.email;
  cityDisplay.innerText = data.location.city;
}