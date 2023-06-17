import { weatherData } from "./api_functions.js";
import { website } from "./website.js";

const submit = document.getElementById("submit")

async function initialRun() {
    const theWeatherData = await weatherData.getWeatherData("London");
    website.createWebsite(theWeatherData);
}

function postInitialRun() {
    document.addEventListener("submit", async (e) => { 
        const search = document.getElementById("search-bar");
        e.preventDefault();
        const theWeatherData = await weatherData.getWeatherData(search.value);
        search.value = "";
        website.modifyWebsite(theWeatherData);
    })
}


initialRun();
postInitialRun();