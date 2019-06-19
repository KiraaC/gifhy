// creates an animal button
$(".animalBtn").on("click", function () {
    console.log(this)
    const search = $(this).val().trim();
    const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=kVAeSh4zD3QQSz4vVdswwl5QKrFJ8aQt&limit=10";
    // const giphyAPIKey = '&api_key=kVAeSh4zD3QQSz4vVdswwl5QKrFJ8aQt'

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response)

            // . are use to select class with jquery while # is used to select id. ** importan **
            // testing individual buttons
            // $("#animalBtn2").on("click", function () {
            //     console.log('worky')
            // })
            // $("#animalBtn3").on("click", function () {
            //     console.log('worky')
            // })
            // $("#animalBtn4").on("click", function () {
            //     console.log('worky')
            // })
            // $("#animalBtn5").on("click", function () {
            //     console.log('worky')
            // })
            // $("#animalBtn6").on("click", function () {
            //     console.log('worky')
            // })

            // api key 9gBBT9au0Ri9DECTaxgag0fvIw3X6M9w


            const animalImageUrl = response.data.image_original;
            const animalImage = $("<img>");

            animalImage.attr("src", animalImageUrl);
            animalImage.attr("alt", "animal images");

            $("#images").prepend(animalImage);

        })


    // recovered from github
    // $('#search').button({

    // }) 
    // // api key 9gBBT9au0Ri9DECTaxgag0fvIw3X6M9w
    // let giphyAPIKey = '&api_key=9gBBT9au0Ri9DECTaxgag0fvIw3X6M9w'

    // // creates an animal button
    // $("animalBtn").on("click", function () {
    //     var animalChoosen = $(this).attr("value")
    //     let giphyURL = "https://api.giphy.com/v1/gifs/search?api_key=9gBBT9au0Ri9DECTaxgag0fvIw3X6M9w&q=animals&limit=10&offset=0&rating=PG&lang=en" + animalChoosen +
    //         giphyAPIKey + "&limit=8";

    //     // console.log(giphyURL)

    //     $.ajax({
    //         url: giphyURL,
    //         method: "GET"
    //     }).then(function (response) {
    //         // console.log(response.data)

    //         for (var i = 0; i < response.data.length; i++) {
    //             console.log("hello world")

    //             $("gifs-might-appear-here").attr("src", response.data.url)
    //             // console.log(response.data)
    //         }

    //     })
    // })


































































































































































})   
