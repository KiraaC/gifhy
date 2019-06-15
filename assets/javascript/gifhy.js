// api key 9gBBT9au0Ri9DECTaxgag0fvIw3X6M9w
let giphyAPIKey = '&api_key=9gBBT9au0Ri9DECTaxgag0fvIw3X6M9w'

// creates an animal button
$("animalBtn").on("click", function () {
    var animalChoosen = $(this).attr("value")
    let giphyURL = "https://api.giphy.com/v1/gifs/search?api_key=9gBBT9au0Ri9DECTaxgag0fvIw3X6M9w&q=animals&limit=10&offset=0&rating=PG&lang=en" + animalChoosen +
        giphyAPIKey + "&limit=8";

    // console.log(giphyURL)

    $.ajax({
        url: giphyURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response.data)

        for (var i = 0; i < response.data.length; i++) {
            console.log("hello world")

            $("gifs-might-appear-here").attr("src", response.data.url)
            // console.log(response.data)
        }

    })
})

// attempt #1 I think i have the wrong API key
// $("button").on("click,", function () {
//     var animal = $(this).attr("data-animal");
//     var giphyURL = 'http://api.giphy.com/v1/gifs/search?q=' +
//         giphyAPIKey + '&limit=8';
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }) 
// console.log(response)
//     .then(function (response) {

var results = response.data.image_animal_url;
for (var i = 0; i < results.length; i++) {
    var gifDiv = $("<div>");
    var rating = results[i].rating;
    var p = $("<p>").text("Rating: " + rating);
    var animalImage = $("<img>");
    animalImage.attr("src", results[i].images.fixed_height.url);
    gifDiv.prepend(p);
    gifDiv.prepend(animalImage);
    $("gifs-might-appear-here").prepend(gifDiv);
}
        
    // });
// });

// attempt #3
// var animalChoosen = $("<img>");
