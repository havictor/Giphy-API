var topics = ["dota", "hearthstone", "stardew valley", "motorcycles", "skydiving"]
//take topics in array and create buttons in html
for (i=0; i < topics.length; i++) {
    var butt = $("<button>");
    butt.attr("class", "button");
    butt.attr("topic", topics[i]);
    butt.text(topics[i]);
    butt.appendTo("#buttons");
}
//onclick of button, grab 10 static images and place on page
$("#buttons").on("click", ".button", function() {
    var topic = $(this).attr("topic")
    var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=zG4Nmv7IC78maeigWZU0BtIY2UUQN8c4&q="+topic
    $.ajax({
        url: queryURL,
        method:"GET"
    })
    .then(function(response) {
        for (j = 0; j < 10; j++) {
            var image = $("<img>");
            image.attr("src", response.data[j].images.fixed_height_still.url);
            image.attr("stillURL", response.data[j].images.fixed_height_still.url);
            //add more attributes

            image.appendTo($("#gifs"));
        }
    })
})
//under each gif, place its rating (g, pg, r)

//onclick of gif, toggle between animate and still



//form to take value from inputbox and add to topics array, remake buttons.
