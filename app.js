const axios = require('axios');
const apiKey = "7e5343f20f922f8d8a049757dba7205e";
async function getWeather(city) {
    try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get(url);
        const weatherdata = response.data;
        const { name, main, weather, wind, visibility, sys} = weatherdata;
        const { temp, humidity } = main;
        const { description, icon } = weather[0];
        const { speed } = wind;
        const { country } = sys;
        console.log(`city : ${name}`)
        console.log(`Temperature : ${temp}`)
        console.log(`Humidity : ${humidity}`)
        console.log(`description : ${description}`)
        console.log(`icon : ${icon}`)
        console.log(`speed : ${speed}`)
        console.log(`visibility : ${visibility}`)
        console.log(`contry : ${country}`)
    } catch (error) {
        console.error("Error : " + error.message)
    }
}
getWeather("Mann");