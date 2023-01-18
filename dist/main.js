/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api_functions.js":
/*!******************************!*\
  !*** ./src/api_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"weatherData\": () => (/* binding */ weatherData)\n/* harmony export */ });\nconst key = '279383eda6e111f02686023cc63cdb86';\nconst units = \"imperial\";\n\nconst weatherData = (() => {\n    function makeDataReadable(data) {\n        const {\n            name: theCityName,\n            main: { temp: temperature, feels_like: feelsLike, humidity, temp_min: low, temp_max: high },\n            timezone,\n            visibility,\n            weather: [{ description }],\n            wind: { speed },\n        } = data;\n        return { theCityName, temperature, feelsLike, timezone, visibility, humidity, low, high, description, speed };\n    }\n\n     async function getWeatherData(city) {\n        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=` + key;\n        \n        let lat;\n        let lon;\n    \n        const coordinatesResponse = await fetch(url, {mode: 'cors'});\n        const coordinatesResponseData = await coordinatesResponse.json();\n    \n        lat = coordinatesResponseData[0].lat;\n        lon = coordinatesResponseData[0].lon;\n    \n        const urlWithCoords = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`;\n        try {\n            const response = await fetch(urlWithCoords, {mode: 'cors'});\n            if (!response.ok) throw new Error(`City ${city} not found`);\n            const weatherData = makeDataReadable(await response.json());\n            console.log(weatherData);\n            return weatherData;\n        } \n        catch(error) {\n            alert(error);\n            return null;\n        }\n    }\n\n    return { getWeatherData };\n})();\n\n\n\n\n\n\n//# sourceURL=webpack://odin-weather-app/./src/api_functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api_functions.js */ \"./src/api_functions.js\");\n/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website.js */ \"./src/website.js\");\n\n\n\nconst submit = document.getElementById(\"submit\")\n\nasync function initialRun() {\n    const theWeatherData = await _api_functions_js__WEBPACK_IMPORTED_MODULE_0__.weatherData.getWeatherData(\"London\");\n    _website_js__WEBPACK_IMPORTED_MODULE_1__.website.createWebsite(theWeatherData);\n}\n\nfunction postInitialRun() {\n    document.addEventListener(\"submit\", async (e) => { \n        const search = document.getElementById(\"search-bar\");\n        e.preventDefault();\n        const theWeatherData = await _api_functions_js__WEBPACK_IMPORTED_MODULE_0__.weatherData.getWeatherData(search.value);\n        _website_js__WEBPACK_IMPORTED_MODULE_1__.website.modifyWebsite(theWeatherData);\n    })\n}\n\n\ninitialRun();\npostInitialRun();\n\n//# sourceURL=webpack://odin-weather-app/./src/index.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"website\": () => (/* binding */ website)\n/* harmony export */ });\nconst content = document.getElementById(\"content\");\n\nconst website = (() => {\n    const header = document.createElement(\"header\");\n    const weatherType = document.createElement(\"div\");\n    const weatherTypeText = document.createElement(\"h2\")\n    const cityName = document.createElement(\"div\"); \n    const cityNameText = document.createElement(\"h4\");\n    const highLow = document.createElement(\"div\");\n    const temp = document.createElement(\"div\");\n    const tempText = document.createElement(\"h1\");\n    const typeOfUnits = document.createElement(\"div\");\n    const weatherTypeImg = document.createElement(\"img\");\n    const searchForm = document.createElement(\"form\");\n    const searchBar = document.createElement(\"input\");\n    const submitSearch = document.createElement(\"input\");\n\n    const feelsLikeImg = document.createElement(\"img\");\n    const feelsLikeTextContainer = document.createElement(\"div\");\n    const feelsLikeLabel = document.createElement(\"h4\");\n    const feelsLikeText = document.createElement(\"p\");\n\n    const humidityImg = document.createElement(\"img\");\n    const humidityTextContainer = document.createElement(\"div\");\n    const humidityLabel = document.createElement(\"h4\");\n    const humidityText = document.createElement(\"p\");\n\n    const visibilityImg = document.createElement(\"img\");\n    const visibilityTextContainer = document.createElement(\"div\");\n    const visibilityLabel = document.createElement(\"h4\");\n    const visibilityText = document.createElement(\"p\");\n\n    const windImg = document.createElement(\"img\");\n    const windTextContainer = document.createElement(\"div\");\n    const windLabel = document.createElement(\"h4\");\n    const windText = document.createElement(\"p\");\n\n    const img = document.createElement(\"img\");\n    img.src = \"images/weather-app-background.jpg\";\n    document.body.appendChild(img);\n\n    const rightSideContainer = document.createElement(\"div\");\n    const feelsLike = document.createElement(\"div\");\n    const humidity = document.createElement(\"div\");\n    const visibility = document.createElement(\"div\");\n    const wind = document.createElement(\"div\");\n\n    function createWebsite(data) {\n        weatherTypeText.innerText = data.description;\n        cityNameText.innerText = data.theCityName;\n        highLow.innerText = `Low: ${data.low}, High: ${data.high}`;\n        tempText.innerText = data.temperature + \"˚F\";\n        typeOfUnits.innerText = \"Type of Units: ˚F\";\n        typeOfUnits.style.fontSize = \"10px\";\n    \n        submitSearch.setAttribute(\"id\", \"submit\");\n        submitSearch.setAttribute(\"type\", \"submit\");\n        submitSearch.setAttribute(\"name\", \"submit\");\n        submitSearch.innerText = \"Search\";\n    \n        searchBar.setAttribute(\"type\", \"search\");\n        searchBar.setAttribute(\"placeholder\", \"Search Location\");\n        searchBar.setAttribute(\"name\", \"search\");\n        searchBar.setAttribute(\"id\", \"search-bar\");\n    \n        weatherType.appendChild(weatherTypeText);\n        cityName.appendChild(cityNameText);\n        temp.appendChild(tempText);\n    \n        weatherTypeImg.classList.add(\"weather-type-img\");\n        weatherTypeImg.src = \"images/cloud-2.svg\";\n    \n        content.appendChild(header);\n        header.appendChild(weatherType);\n        header.appendChild(cityName);\n        header.appendChild(highLow);\n        header.appendChild(temp);\n        header.appendChild(typeOfUnits);\n        header.appendChild(weatherTypeImg);\n        header.appendChild(searchForm);\n        searchForm.appendChild(searchBar);\n        searchForm.appendChild(submitSearch);\n            \n        feelsLikeImg.src = \"images/thermometer-3.svg\";\n        feelsLikeImg.classList.add(\"right-side-img\");\n        feelsLikeLabel.innerText = \"Feels Like\";\n        feelsLikeText.innerText = data.feelsLike + \"˚F\";\n        feelsLike.appendChild(feelsLikeImg);\n        feelsLikeTextContainer.appendChild(feelsLikeLabel);\n        feelsLikeTextContainer.appendChild(feelsLikeText);\n        feelsLike.appendChild(feelsLikeTextContainer);\n\n        humidityImg.src = \"images/droplet.svg\";\n        humidityImg.classList.add(\"right-side-img\");\n        humidityLabel.innerText = \"Humidity\"\n        humidityText.innerText = data.humidity + \"%\";\n        humidity.appendChild(humidityImg);\n        humidityTextContainer.appendChild(humidityLabel);\n        humidityTextContainer.appendChild(humidityText)\n        humidity.appendChild(humidityTextContainer);\n\n\n        visibilityImg.src = \"images/eye.svg\";\n        visibilityImg.classList.add(\"right-side-img\");\n        visibilityLabel.innerText = \"Visibility\";\n        visibilityText.innerText = data.visibility + \"ft\";\n        visibility.appendChild(visibilityImg);\n        visibilityTextContainer.appendChild(visibilityLabel);\n        visibilityTextContainer.appendChild(visibilityText);\n        visibility.appendChild(visibilityTextContainer);\n\n        windImg.src = \"images/wind-3.svg\";\n        windImg.classList.add(\"right-side-img\");\n        windLabel.innerText = \"Wind Speed\";\n        windText.innerText = data.speed + \"mph\";\n        wind.appendChild(windImg);\n        windTextContainer.appendChild(windLabel);\n        windTextContainer.appendChild(windText);\n        wind.appendChild(windTextContainer);\n\n        rightSideContainer.classList.add(\"right-side-container\");\n    \n        content.appendChild(rightSideContainer);\n        rightSideContainer.appendChild(feelsLike);\n        rightSideContainer.appendChild(humidity);\n        rightSideContainer.appendChild(visibility);\n        rightSideContainer.appendChild(wind);\n    }\n    \n    function modifyWebsite(data) {\n        weatherTypeText.innerText = data.description;\n        cityNameText.innerText = data.theCityName;\n        highLow.innerText = `Low: ${data.low}, High: ${data.high}`;\n        tempText.innerText = data.temperature + \"˚F\";\n        typeOfUnits.innerText = \"Type of Units: ˚F\";\n        typeOfUnits.style.fontSize = \"10px\";\n\n        feelsLikeText.innerText = data.feelsLike + \"˚F\";\n        humidityText.innerText = data.humidity + \"%\";\n        visibilityText.innerText = data.visibility + \"ft\";\n        windText.innerText = data.speed + \"mph\";\n    }\n    return { createWebsite, modifyWebsite };    \n})();\n\n\n//# sourceURL=webpack://odin-weather-app/./src/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;