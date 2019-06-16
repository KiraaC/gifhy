// api key 9gBBT9au0Ri9DECTaxgag0fvIw3X6M9w
let giphyAPIKey = '&api_key=9gBBT9au0Ri9DECTaxgag0fvIw3X6M9w'
queryURL="http://api.giphy.com/v1/gifs/random&api_key=${9gBBT9au0Ri9DECTaxgag0fvIw3X6M9w}&limit=10";
;



// creates an animal button
$("#animalBtn1").on("click", function () {
    console.log('worky')

    $.ajax({
        URL: queryURL,
        method: "GET"
    })
    .then(function (response) {
        console.log(response)
    })
})   
$("#animalBtn2").on("click", function () {
    console.log('worky')
})
$("#animalBtn3").on("click", function () {
    console.log('worky')
})
$("#animalBtn4").on("click", function () {
    console.log('worky')
})
$("#animalBtn5").on("click", function () {
    console.log('worky')
})
$("#animalBtn6").on("click", function () {
    console.log('worky')
})


