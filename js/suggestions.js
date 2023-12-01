$(document).ready(function () {
    
    // Form HANDLER
    $('form').submit(function (e) {
        e.preventDefault(); 
        console.log("reached here #1")

        // RESET form
        $("#suggestion-form")[0].reset()

        //NOTIFICATION on submit
        $('#notification').text('Your suggestion has been successfully submitted.').addClass('success');
        console.log("reached here #2")

        //NOTIFICATION for 3 seconds
        setTimeout(function () {
            $('#notification').text('').removeClass('success');
        }, 3000);
        console.log("reached here #3")
    });
});
