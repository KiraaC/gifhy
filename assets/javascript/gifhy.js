// varibles
const animals = ["jellyfish", "sharks", "pandas", "panthers", "owls", "unicorns"]
// creates an animal button
$(".animalBtn").on("click", function () {
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
                const animalImage = $("<img>");

                animalImage.attr("src", animalImageUrl);
                animalImage.attr("alt", "animal images");

                $("#images-might-appear-here").prepend(animalImage);
            }

        })

})

$("#submit").on("click", function (event) {
    event.preventDefault();
    // grab value from anchor
    newAnimal = $("#bar").val()
    console.log(newAnimal)
    newAnimal.text

    // create a new btn
    addButton($("#animalBtn"))
    // add button text , set = to newanimal varible.
    // append btn to page
    newImage.append(newAnimal);
    $("#images-might-appear-here")

    // pause buttons
    // $("#images-might-appear-here).on("click", funtion(){
    //     $"#images-might-appear-here"
    if ($(this).attr("state") === "still") {
        $(this).attr("state", "animated");
        $(this).attr("src", $(this).attr("animate-data"));
    }
    else {
        $(this).attr("state", "still");
        $(this).attr("src", $(this).attr("still-data"));
    }

})

 
