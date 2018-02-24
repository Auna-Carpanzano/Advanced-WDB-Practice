var url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
var xhrBtn = document.getElementById("xhr");
var fetchBtn = document.getElementById("fetch");
var jqueryBtn = document.getElementById("jquery");
var axiosBtn = document.getElementById("axios");
var quote = document.getElementById("quote");

// XHR
xhrBtn.addEventListener("click", function () {
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      quote.innerText = JSON.parse(XHR.responseText);
    }
  }

  XHR.open("GET", url);
  XHR.send();  
});

// jQuery
jqueryBtn.addEventListener("click", function () {
  $.getJSON(url, function(data) {
    quote.innerText = data;
  })
});

// Axios
axiosBtn.addEventListener("click", function () {
  axios.get(url)
  .then(function(res) {
    quote.innerText = res.data;
  })
});
  
// Fetch
fetchBtn.addEventListener("click", function () {
  fetch(url)
  .catch(function() {
    alert("ERROR");
  })
});