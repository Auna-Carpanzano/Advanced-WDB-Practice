var btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
  var XHR = XMLHttpRequest();
  
  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      console.log(XHR.responseText);
    }
  }
  
  XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
  XHR.send();
});