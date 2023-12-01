$(document).ready(() => {
    // ON MOUSE HOVER
    $('#faq_rollovers li h2').mouseenter( function() {
        // EXPAND <p> element
        $(this).next('p').removeClass('hidden');
    });

    // ON MOUSE LEAVE
    $('#faq_rollovers li h2').mouseleave(function () {
        // Hide the corresponding <p> element
        $(this).next('p').addClass('hidden');
    });
}); //end ready
