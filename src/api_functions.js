const key = '279383eda6e111f02686023cc63cdb86';
const units = "imperial";

export const weatherData = (() => {
    function makeDataReadable(data) {
        const {
            name: theCityName,
            main: { temp: temperature, feels_like: feelsLike, humidity, temp_min: low, temp_max: high },
            timezone,
            visibility,
            weather: [{ description }],
            wind: { speed },
        } = data;
        return { theCityName, temperature, feelsLike, timezone, visibility, humidity, low, high, description, speed };
    }

     async function getWeatherData(city) {
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=` + key;
        
        let lat;
        let lon;
    
        const coordinatesResponse = await fetch(url, {mode: 'cors'});
        const coordinatesResponseData = await coordinatesResponse.json();
    
        lat = coordinatesResponseData[0].lat;
        lon = coordinatesResponseData[0].lon;
    
        const urlWithCoords = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`;
        try {
            const response = await fetch(urlWithCoords, {mode: 'cors'});
            if (!response.ok) throw new Error(`City ${city} not found`);
            const weatherData = makeDataReadable(await response.json());
            console.log(weatherData);
            return weatherData;
        } 
        catch(error) {
            alert(error);
            return null;
        }
    }

    return { getWeatherData };
})();




