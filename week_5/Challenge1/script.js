const weather_type_images = {
    "Clear": "images/clear.jpg",
    "Clouds": "images/clouds.jpg",
    "Haze": "images/haze.jpg",
    "Mist": "images/mist.jpg",
    "Rain": "images/rain.jpg",
    "Smoke": "images/smoke.jpg",
    "Snow": "images/snow.jpg",
    "Thunderstorm": "images/thunderstorm.jpg"
};

const temp_images = {
    "Hot": "images/hot.jpg",   // Celsius > 25
    "Okay": "images/okay.jpg", // Celsius 5-25
    "Cold": "images/cold.jpg"  // Celsius < 5
};


// DO NOT CHANGE THE FUNCTION SIGNATURE
function check_weather() {

    console.log("=== [START] check_weather() ===");

    //============================================================================
    // Task 1
    // Key in your own OpenWeatherMap.org API key (DO NOT SHARE IT WITH OTHERS)
    //============================================================================
    const weather_api_key = 'be1164a25e1dbdddb3ec966caa0eb89c';


    //============================================================================
    // Task 2
    // Retrieve the user input (city name) from <input>
    //============================================================================
    // const city = 'Moscow'; // Default value, you need to replace this string with actual user input
    const city = document.getElementById("city").value;


    // DO NOT MODIFY THIS
    let api_endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_api_key}&units=metric`;


    axios.get(api_endpoint)
    .then(response => {
        // Inspect what's in the API response
        const data = response.data;
        console.log(data);

        //============================================================================
        // Task 3
        // Retrieve the weather info (e.g. Rain, Clouds, etc.)
        //============================================================================
        
        // YOUR CODE GOES HERE
        // Make use of const weather_type_images (at the top)
        let weather_images = document.getElementById("weather_images");
        weather_images.innerHTML = "";
        for(let weather of data.weather) {
            let p = document.createElement("p");
            let img = document.createElement("img");
            let value = weather.main;
            img.src = weather_type_images[value];
            p.appendChild(img);
            weather_images.appendChild(p);
        }


        //======================================================================================
        // Task 4
        // Perform JavaScript DOM to reflect weather info and temperature info in the HTML page.
        //======================================================================================

        // YOUR CODE GOES HERE
        // Make use of const temp_images (at the top)
        let temperature = document.getElementById("temperature_image");
        let temp = data.main.temp;
        if(temp > 25) {
            temperature.src = temp_images["Hot"];
        } else if (temp < 5) {
            temperature.src = temp_images["Cold"];
        } else temperature.src = temp_images["Okay"];
        
    })
    .catch(error => {
        console.log(error.message);
    })
    
    console.log("=== [END] check_weather() ===");
}
