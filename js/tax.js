$(document).ready(function () {
    $("#calculate-btn").click(function () {
        // GET user input
        let province = $("#province-select").val();
        let numItems = parseInt($("#num-items").val());

        // Validation for Item limit
        if (isNaN(numItems) || numItems < 1 || numItems > 10) {
            alert("Please enter a valid number of items (1 to 10).");
            return;
        }

        // Clear previous inputs
        $("#items-inputs").empty();
        $("#result").empty();

        // a for-loop for each item
        for (let i = 1; i <= numItems; i++) {
            $("#items-inputs").append(`<label for="item${i}">Price of Item ${i}:</label>
                                       <input type="number" id="item${i}" step="0.01" required>`);
        }

        // Add a button to calculate the total
        $("#items-inputs").append(`<button id="calculate-total-btn">Grand Total</button>`);

        // Calculate total when the new button is clicked
        $("#calculate-total-btn").css({
            'margin-left' : '30px',
            'width' : '140px',
            'height' : 'auto',
            'border-radius':'14px',
            'background-color': 'green'
         }).click(function () {
            calculateTotal(province);
        });
    });
});

function calculateTotal(province) {
    let total = 0;
    let totalTax = 0;

    // Calculate total price and tax
    $("#items-inputs input").each(function () {
        let itemPrice = parseFloat($(this).val());

        if (!isNaN(itemPrice) && itemPrice >= 0) {
            total += itemPrice;
            totalTax += calculateTax(itemPrice, province);
        }
    });

    // Display result
    $("#result").html(`<h3>Receipt:</h3>
                      <p>Number of Items: ${$("#items-inputs input").length}</p>
                      <p>Total Price: $${total.toFixed(2)}</p>
                      <p>Total Tax: $${totalTax.toFixed(2)}</p>`);
}

function calculateTax(price, province) {
    // Tax rates province-wise
    const taxRates = {
        'AB': 0.05, 'BC': 0.05, 'MB': 0.05,
        'NB': 0.15, 'NL': 0.15, 'NS': 0.15,
        'NT': 0.05, 'NU': 0.05, 'ON': 0.13,
        'PE': 0.15, 'QC': 0.05, 'SK': 0.05, 'YT': 0.05
    };

    return price * taxRates[province];
}
