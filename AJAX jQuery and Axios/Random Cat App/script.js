$("#btn").click(function() {
  $.getJSON("https://random.cat/meow")
  .done(function(data) {
    $("#image").attr({
      src: data.file
    });
  });
});