
        // Example of weather-based advice (you can modify this to fetch real data)
        function getWeatherAdvice() {
            const adviceElement = document.getElementById("weather-advice");

            // Random example conditions, you can integrate this with real weather data
            const weatherConditions = ["sunny", "rainy", "cloudy", "stormy"];
            const currentCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];

            let advice = "";

            switch (currentCondition) {
                case "sunny":
                    advice = "It's sunny today! Make sure to water your coffee plants early in the morning or late in the afternoon to avoid evaporation.";
                    break;
                case "rainy":
                    advice = "Rainy weather! Make sure your coffee plants are well-drained to prevent root rot. Avoid applying fertilizers during heavy rains.";
                    break;
                case "cloudy":
                    advice = "Cloudy today. This is a good time for light pruning as direct sunlight isn't intense. Keep an eye on pests.";
                    break;
                case "stormy":
                    advice = "Stormy weather ahead! Secure any loose plants and avoid working in the field during thunderstorms.";
                    break;
                default:
                    advice = "Keep monitoring the weather and follow best farming practices for your coffee plants!";
            }

            // Display the advice
            adviceElement.textContent = advice;
        }

        // Call the function to load the weather advice when the page loads
        window.onload = getWeatherAdvice;