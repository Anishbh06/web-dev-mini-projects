const apiKey = "507694d3734d22f2163359fe4745240b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=";
const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')


async function checkWeather(city){
    const resp = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if(resp.status == 404){
        document.querySelector('.error').style.display = 'block'
    }
    else{
        let data = await resp.json();

        console.log(data)

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =Math.round(data.main.temp) +"c";
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    
        if(data.weather[0].main == "clouds" ){
           
            weatherIcon.setAttribute("src","weather-app-img/images/rain.png");
    
        }
        else if(data.weather[0].main == "snow" ){
           
            weatherIcon.setAttribute("src","weather-app-img/images/snow.png");
    
        }
        else if(data.weather[0].main == "mist" ){
           
            weatherIcon.setAttribute("src","weather-app-img/images/mist.png");
    
        }
        
    
        document.querySelector('.weather').style.display = 'block'
        document.querySelector('.error').style.display = 'none'

    }
   
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);

})