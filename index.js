const input = document.querySelector('.cityinput');
const cityNameElements = document.querySelectorAll('.city');
const btn = document.querySelector('.button');
const tempField = document.querySelector('.temp-no');
const huminityfield = document.querySelector('.humidity')
const windfield = document.querySelector('.wind')
const visifield = document.querySelector('.visibility')
const iconfield = document.querySelector('.icon')
const desfield = document.querySelector('.wetstst')
const countfield = document.querySelector('.time')

const apiKey = "7e5343f20f922f8d8a049757dba7205e";

let cityvar = '';
let tempvar = '';
let huminityvar = '';
let desvar = '';
let windvar = '';
let visivar = '';
let iconvar = '';
let countvar = '';

input.addEventListener("input", (e) => {
    cityvar = e.target.value;
});

async function getWeather(city) {
    try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get(url);
        const weatherdata = response.data;

        const { name, main, weather, wind, visibility, sys } = weatherdata;
        const { temp, humidity } = main;
        const { description, icon } = weather[0];
        const { speed } = wind;
        const { country } = sys;

        const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

        cityvar = name;
        tempvar = temp;
        huminityvar = humidity;
        windvar = speed;
        desvar = description;
        visivar = visibility;
        iconvar = iconUrl;
        countvar = country;


    } catch (error) {
        console.error("Error : " + error.message)
    }
}

btn.addEventListener('click', async () => {
    await getWeather(cityvar);
    cityNameElements.forEach(element => {
        element.innerText = cityvar;
    });
    tempField.innerText = `${tempvar} °C`;
    huminityfield.innerText = `${huminityvar}%`;
    windfield.innerText = `${windvar} Km/h`;
    visifield.innerText = `${visivar}h`;
    iconfield.src = iconvar;
    desfield.innerText = desvar;
    countfield.innerText = countvar;

    input.value = '';
});
