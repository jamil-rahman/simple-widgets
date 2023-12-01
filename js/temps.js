$(document).ready(function () {
    $("#convert-btn").click(function () {
        // GET input
        let temperature = parseFloat($("#temperature-input").val());
        let unit = $("input[name='unit']:checked").val();

        // CHECK for NaN
        if (isNaN(temperature)) {
            alert("Please Input a Value for Temperature.");
        } else {
            // CONVERT temp
            let convertedTemperature = (unit === "celsius") ? convertToFahrenheit(temperature) : convertToCelsius(temperature);

            // SHOW result
            $("#converted-result").text(`Converted Temperature: ${convertedTemperature}°${(unit === "celsius") ? "F" : "C"}`);
        }
    });

    // FORMULAS
    function convertToFahrenheit(celsius) {
        return ((celsius * 9 / 5) + 32).toFixed(2);
    }

    function convertToCelsius(fahrenheit) {
        return ((fahrenheit - 32) * 5 / 9).toFixed(2);
    }
});
