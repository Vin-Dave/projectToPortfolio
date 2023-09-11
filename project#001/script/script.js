class WeatherApp {
  constructor() {
    this.input = document.querySelector("input");
    this.button = document.querySelector("button");
    this._cityName = document.querySelector(".label-name-city");
    this._warning = document.querySelector(".warning");
    this._photo = document.querySelector(".weather-image");
    this._weather = document.querySelector(".weather");
    this._temperature = document.querySelector(".temperature");
    this._humidity = document.querySelector(".humidity");

    this._LINK_API = "https://api.openweathermap.org/data/2.5/weather?q=";
    this._KEY_API = "&appid=abd5a8c38755be2a0e4b9f3bb1facde3";
    this._UNITS_API = "&units=metric";

    this.checkApiWeather();
    this.button.addEventListener("click", () => this.checkApiWeather());
  }

  async checkApiWeather() {
    try {
      const valueOfCity = this.input.value || "Częstochowa";
      const URL =
        this._LINK_API + valueOfCity + this._KEY_API + this._UNITS_API;
      const response = await fetch(URL);
      const data = await response.json();
      const city = data.name;
      const temp = data.main.temp;
      const humidity = data.main.humidity;
      const weather = Object.assign({}, ...data.weather);

      this._cityName.textContent = city;
      this._humidity.textContent = humidity;
      this._weather.textContent = weather.main;
      this._temperature.textContent = Math.floor(temp);
      this.input.value = "";
      this._warning.textContent = "";
      this._photo.src = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
    } catch (error) {
      ``;
      console.error(error);
      this.input.value = "";
      this._warning.textContent = "Enter the correct name of the city!";
    }
  }
}

const weatherApp = new WeatherApp();

// const input = document.querySelector("input");
// const button = document.querySelector("button");
// const _cityName = document.querySelector(".label-name-city");
// const _warning = document.querySelector(".warning");
// const _photo = document.querySelector(".weather-image");
// const _weather = document.querySelector(".weather");
// const _temperature = document.querySelector(".temperature");
// const _humidity = document.querySelector(".humidity");

// const _LINK_API = "https://api.openweathermap.org/data/2.5/weather?q=";
// const _KEY_API = "&appid=abd5a8c38755be2a0e4b9f3bb1facde3";
// const _UNITS_API = "&units=metric";

// const checkApiWeather = async () => {
//   try {
//     const valueOfCity = input.value || "Częstochowa";
//     const URL = _LINK_API + valueOfCity + _KEY_API + _UNITS_API;
//     const response = await fetch(URL);
//     const data = await response.json();
//     const city = data.name;
//     const temp = data.main.temp;
//     const humidity = data.main.humidity;
//     const weather = Object.assign({}, ...data.weather);

//     _cityName.textContent = city;
//     _humidity.textContent = humidity;
//     _weather.textContent = weather.main;
//     _temperature.textContent = Math.floor(temp);
//     input.value = "";
//     _warning.textContent = "";
//     _photo.src = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
//   } catch (error) {
//     console.error(error);
//     input.value = "";
//     _warning.textContent = "Enter the correct name of the city!";
//   }
// };

// checkApiWeather();
// button.addEventListener("click", checkApiWeather);

// // const checkApiWeather = () => {
// //   const valueOfCity = input.value || "London";
// //   console.log(valueOfCity);

// //   const URL = _LINK_API + valueOfCity + _KEY_API + _UNITS_API;

// //   fetch(URL)
// //     .then((response) => response.json())
// //     .then((data) => {
// //       const city = data.name;
// //       const temp = data.main.temp;
// //       const humidity = data.main.humidity;

// //       //const weather = data.weather[0].id;
// //       // const weather = data.weather[0].icon;
// //       const weather = Object.assign({}, ...data.weather);
// //       console.log(data);
// //       console.log(city, temp, humidity);
// //       console.log(weather);
// //       _cityName.textContent = city;
// //       _humidity.textContent = humidity;
// //       _weather.textContent = weather.main;
// //       _temperature.textContent = Math.floor(temp);
// //       _photo.src = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
// //     });
// // };

// // checkApiWeather();
// // fetch("https://dog.ceo/api/breeds/image/random")
// //   .then((response) => response.json())
// //   .then((data) => console.log(data));

// // axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
// //   //  document.body.style.backgroundImage("src:", `${response.data.message}`);
// //   console.log(response);
// // });
// // async function chechAPI() {
// //   try {
// //     const response = await axios
// //       .get("https://dog.ceo/api/breeds/image/random")
// //       .then((response) => console.log(response));
// //   } catch (e) {
// //     console.log(e);
// //   }
// // }
// // chechAPI();
