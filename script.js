console.log("script JS working")

$(document).ready(function () {

  var jqxhr = $.getJSON("http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC", function (res) {
    console.log("The request worked!")
    pictures = res.data
    console.log(pictures)
    pictures.forEach( function (picture) {
      $("#photoOutput").append(`<img src="">`)
      console.log(`${picture.embed_url}`)
    })
  })

  console.log("jQuery is ready")
});
