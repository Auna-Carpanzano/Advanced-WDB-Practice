var btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
    
    }
  }
  
  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
});
