const input = document.querySelector("input");
const button = document.querySelector("button");
const cityName = document.querySelector(".label-name-city");
const warning = document.querySelector(".warning");
const photo = document.querySelector(".weather-image");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");

const _LINK_API = "https://api.openweathermap.org/data/2.5/weather?";
const _KEY_API = "&appid=10e43217cc19a26a121c8db3aeb8f930";

const _UNITS_API = "&units=metric";

const checkApiWeather = () => {
  const valueOfCity = input.value || "London";
  console.log(valueOfCity);

  const URL = _LINK_API + valueOfCity + _KEY_API + _UNITS_API;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

checkApiWeather();
// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
//   //  document.body.style.backgroundImage("src:", `${response.data.message}`);
//   console.log(response);
// });
// async function chechAPI() {
//   try {
//     const response = await axios
//       .get("https://dog.ceo/api/breeds/image/random")
//       .then((response) => console.log(response));
//   } catch (e) {
//     console.log(e);
//   }
// }
// chechAPI();
