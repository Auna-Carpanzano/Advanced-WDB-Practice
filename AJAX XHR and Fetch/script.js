var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
  console.log("READY STATE IS..." + XHR.readyState);
}

XHR.open("GET", "https://api.github.com/zen");
