const content = document.getElementById("content");

export const website = (() => {
    function calcTime(offset) {

        const d = new Date();
    
        const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    
        const nd = new Date(utc + (3600000*offset));
    
        return nd.toLocaleString();
    
    }

    const header = document.createElement("header");
    const weatherType = document.createElement("div");
    const weatherTypeText = document.createElement("h2")
    const cityName = document.createElement("div"); 
    const cityNameText = document.createElement("h4");
    const date = document.createElement("div");
    const temp = document.createElement("div");
    const tempText = document.createElement("h1");
    const typeOfUnits = document.createElement("div");
    const weatherTypeImg = document.createElement("img");
    const searchForm = document.createElement("form");
    const searchBar = document.createElement("input");
    const submitSearch = document.createElement("input");

    const feelsLikeImg = document.createElement("img");
    const feelsLikeTextContainer = document.createElement("div");
    const feelsLikeLabel = document.createElement("h4");
    const feelsLikeText = document.createElement("p");

    const humidityImg = document.createElement("img");
    const humidityTextContainer = document.createElement("div");
    const humidityLabel = document.createElement("h4");
    const humidityText = document.createElement("p");

    const visibilityImg = document.createElement("img");
    const visibilityTextContainer = document.createElement("div");
    const visibilityLabel = document.createElement("h4");
    const visibilityText = document.createElement("p");

    const windImg = document.createElement("img");
    const windTextContainer = document.createElement("div");
    const windLabel = document.createElement("h4");
    const windText = document.createElement("p");

    const img = document.createElement("img");
    img.src = "images/weather-app-background.jpg";
    document.body.appendChild(img);

    const rightSideContainer = document.createElement("div");
    const feelsLike = document.createElement("div");
    const humidity = document.createElement("div");
    const visibility = document.createElement("div");
    const wind = document.createElement("div");

    function createWebsite(data) {
        const time = calcTime(data.timezone);

        weatherTypeText.innerText = data.description;
        cityNameText.innerText = data.theCityName;
        date.innerText = time;
        tempText.innerText = data.temperature + "˚F";
        typeOfUnits.innerText = "Type of Units: ˚F";
        typeOfUnits.style.fontSize = "10px";
    
        submitSearch.setAttribute("id", "submit");
        submitSearch.setAttribute("type", "submit");
        submitSearch.setAttribute("name", "submit");
        submitSearch.innerText = "Search";
    
        searchBar.setAttribute("type", "search");
        searchBar.setAttribute("placeholder", "Search Location");
        searchBar.setAttribute("name", "search");
        searchBar.setAttribute("id", "search-bar");
    
        weatherType.appendChild(weatherTypeText);
        cityName.appendChild(cityNameText);
        temp.appendChild(tempText);
    
        weatherTypeImg.classList.add("weather-type-img");
        weatherTypeImg.src = "images/cloud-2.svg";
    
        content.appendChild(header);
        header.appendChild(weatherType);
        header.appendChild(cityName);
        header.appendChild(date);
        header.appendChild(temp);
        header.appendChild(typeOfUnits);
        header.appendChild(weatherTypeImg);
        header.appendChild(searchForm);
        searchForm.appendChild(searchBar);
        searchForm.appendChild(submitSearch);
            
        feelsLikeImg.src = "images/thermometer-3.svg";
        feelsLikeImg.classList.add("right-side-img");
        feelsLikeLabel.innerText = "Feels Like";
        feelsLikeText.innerText = data.feelsLike + "˚F";
        feelsLike.appendChild(feelsLikeImg);
        feelsLikeTextContainer.appendChild(feelsLikeLabel);
        feelsLikeTextContainer.appendChild(feelsLikeText);
        feelsLike.appendChild(feelsLikeTextContainer);

        humidityImg.src = "images/droplet.svg";
        humidityImg.classList.add("right-side-img");
        humidityLabel.innerText = "Humidity"
        humidityText.innerText = data.humidity + "%";
        humidity.appendChild(humidityImg);
        humidityTextContainer.appendChild(humidityLabel);
        humidityTextContainer.appendChild(humidityText)
        humidity.appendChild(humidityTextContainer);


        visibilityImg.src = "images/eye.svg";
        visibilityImg.classList.add("right-side-img");
        visibilityLabel.innerText = "Visibility";
        visibilityText.innerText = data.visibility + "ft";
        visibility.appendChild(visibilityImg);
        visibilityTextContainer.appendChild(visibilityLabel);
        visibilityTextContainer.appendChild(visibilityText);
        visibility.appendChild(visibilityTextContainer);

        windImg.src = "images/wind-3.svg";
        windImg.classList.add("right-side-img");
        windLabel.innerText = "Wind Speed";
        windText.innerText = data.speed + "mph";
        wind.appendChild(windImg);
        windTextContainer.appendChild(windLabel);
        windTextContainer.appendChild(windText);
        wind.appendChild(windTextContainer);

        rightSideContainer.classList.add("right-side-container");
    
        content.appendChild(rightSideContainer);
        rightSideContainer.appendChild(feelsLike);
        rightSideContainer.appendChild(humidity);
        rightSideContainer.appendChild(visibility);
        rightSideContainer.appendChild(wind);
    }
    
    function modifyWebsite(data) {
        const time = calcTime(data.timezone);

        weatherTypeText.innerText = data.description;
        cityNameText.innerText = data.theCityName;
        date.innerText = time;
        tempText.innerText = data.temperature + "˚F";
        typeOfUnits.innerText = "Type of Units: ˚F";
        typeOfUnits.style.fontSize = "10px";

        feelsLikeText.innerText = data.feelsLike + "˚F";
        humidityText.innerText = data.humidity + "%";
        visibilityText.innerText = data.visibility + "ft";
        windText.innerText = data.speed + "mph";
    }
    return { createWebsite, modifyWebsite };    
})();
