$(document).ready(function () {
    //FOCUS first Link
    $("#image_list a:first").focus();

     //Create captions object
    var imageCaptions = {};

    $("#image_list a").each(function () {
        // GET URL and caption for each image
        var imageURL = $(this).attr("href");
        var imageCaption = $(this).attr("title");

        // SAVE URL and caption data in imageCaptions object
        imageCaptions[imageURL] = imageCaption;

        // PRELOAD image
        $("<img>").attr("src", imageURL);
    });

    //ADD click event handler
    $("#image_list a").click(function (evt) {
        // Prevent the default action of the link
        evt.preventDefault();

        // GET URL of the clicked image
        var clickedImageURL = $(this).attr("href");

        // SLIDE UP animation
        $("#caption, #image").slideUp(2000, function () {
            // Set the new image and caption
            $("#image").attr("src", clickedImageURL);
            $("#caption").text(imageCaptions[clickedImageURL]);

            // Display NEW image sliding motion with 2 seconds delay
            $("#caption, #image").slideDown(2000);
        });
    });
});
