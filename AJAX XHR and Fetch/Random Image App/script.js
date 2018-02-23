var btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
  var XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).message;
    }
  }
  
  XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
  XHR.send();
});