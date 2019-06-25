// varibles
const animals = ["jellyfish", "sharks", "pandas", "panthers", "owls", "unicorns"]
// creates an animal button
$(document).on("click", ".animalBtn", function () {

    console.log(this)
    const search = $(this).val().trim();
    const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=kVAeSh4zD3QQSz4vVdswwl5QKrFJ8aQt&limit=4";
    // const giphyAPIKey = '&api_key=kVAeSh4zD3QQSz4vVdswwl5QKrFJ8aQt'

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response)

            // loop through images
            // grab url from fixed height they will be nested
            for (let i = 0; i < response.data.length; i++) {
                console.log(response.data[i])
                const animalImageUrl = response.data[i].images.fixed_height.url;
                const stillImage = response.data[i].images.fixed_height_still.url;
                const animalImage = $("<img>");
// storing var here
                animalImage.attr("src", animalImageUrl);
                animalImage.attr("alt", "animal images");
                animalImage.addClass("pics")
                animalImage.attr("still-data", stillImage);
                animalImage.attr("animate-data", animalImageUrl);
                $("#images-might-appear-here").prepend(animalImage);
            }

        })

})
$(document).on("click", ".pics", function (event) {
    console.log($(this).attr("state"))
    if ($(this).attr("state") === "still") {
        $(this).attr("state", "animated");
        $(this).attr("src", $(this).attr("animate-data"));
    }
    else {
        $(this).attr("state", "still");
        $(this).attr("src", $(this).attr("still-data"));
    }
})
$("#submit").on("click", function (event) {
    event.preventDefault();
    // grab value from anchor
    newAnimal = $("#bar").val()
    console.log(newAnimal)
    // create and store new btn
    var newButton = $("<button>")
    newButton.text(newAnimal)
    // add class
    newButton.addClass("animalBtn").val(newAnimal)

    $("#buttons").append(newButton)
})


