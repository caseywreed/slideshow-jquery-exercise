console.log("script JS working")

$(document).ready(function () {

  var jqxhr = $.getJSON("http://api.giphy.com/v1/gifs/search?q=the+simpsons&api_key=dc6zaTOxFJmzC", function (res) {
    console.log("The request worked!")
    pictures = res.data
    console.log(pictures)
    pictures.forEach( function (picture) {
      $("#photoOutput").append(`<img class="loadedPicture" src="${picture.images.fixed_height.url}"><h4></h4>`)
    })
    $(".loadedPicture").toggleClass("hidden")
    $(".loadedPicture").eq(0).toggleClass("hidden")
  })

  console.log("jQuery is ready")
});
