var btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
  var XHR = XMLHttpRequest();
  
  XHR.onreadystatechange = function() {
    
  }
  
  XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
  XHR.send();
});