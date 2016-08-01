console.log("script JS working")

$(document).ready(function () {

  var jqxhr = $.getJSON("http://api.giphy.com/v1/gifs/search?q=the+simpsons&api_key=dc6zaTOxFJmzC", function (res) {
    pictures = res.data
    console.log(pictures)
    pictures.forEach( function (picture) {
      $("#photoOutput").append(`<img class="loadedPicture" src="${picture.images.fixed_height.url}">`)
    })
    $(".loadedPicture").toggleClass("hidden")
    $(".loadedPicture").eq(0).toggleClass("hidden active")
  })

  $(".rightButton").click( function () {
    // if () {}

    $(".active").toggleClass("hidden")
    $(".active").next().toggleClass("hidden active")
    $(".active").first().toggleClass("active")
  })

  $(".leftButton").click( function () {
    $(".active").toggleClass("hidden")
    $(".active").prev().toggleClass("hidden active")
    $(".active").last().toggleClass("active")
  })

  console.log("jQuery is ready")
});

//Need to fix loop function.
//If statement (if next().match(img))