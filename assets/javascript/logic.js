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
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=zG4Nmv7IC78maeigWZU0BtIY2UUQN8c4&q="+topic;
    $.ajax({
        url: queryURL,
        method:"GET"
    })
    .then(function(response) {
        for (j = 0; j < 10; j++) {
            var image = $("<img>");
            image.attr("src", response.data[j].images.fixed_height_still.url);
            image.attr("class", "club");
            image.attr("wallflowerURL", response.data[j].images.fixed_height_still.url);
            image.attr("danceURL", response.data[j].images.fixed_height.url)
            image.attr("status", "wallflower")
            var box = $(`<div class="col-md-4 col-xs-12">`);
            box.attr("id", response.data[j].id);
            var rating = $("<div>");
            rating.attr("class", "rating");
            rating.text("Rating: "+response.data[j].rating)
            //add more attributes
            box.appendTo($("#gifs"));
            image.appendTo($("#"+response.data[j].id));
            rating.appendTo($("#"+response.data[j].id));
        }
    })
})

$("#gifs").on("click", ".club", function() {
    if ($(this).attr("status") == "wallflower") {
        $(this).attr("src", $(this).attr("danceURL"));
        $(this).attr("status", "dance")
    }
    else if ($(this).attr("status") == "dance") {
        $(this).attr("src", $(this).attr("wallflowerurl"));
        $(this).attr("status", "wallflower")
    }
})

$("#submit-button").on("click", function() {
    event.preventDefault();
    if ($("#new-input").val() != "") {
        $("#buttons").empty();
        topics.push($("#new-input").val());
        for (i=0; i < topics.length; i++) {
            var butt = $("<button>");
            butt.attr("class", "button");
            butt.attr("topic", topics[i]);
            butt.text(topics[i]);
            butt.appendTo("#buttons");
        }
    }
    $("#new-input").val("");
});

//under each gif, place its rating (g, pg, r)

//onclick of gif, toggle between animate and still
    //on click, if status = still, then change source, change status
    //else if status  = dance, change source,) change status


//form to take value from inputbox and add to topics array, remake buttons.
