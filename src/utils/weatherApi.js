import { checkResponse } from "./api";


// export const getWeather = ({ latitude, longitude }, APIkey) => {
//   return fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
//   ).then((res) => {
//     if (res) {
//       return res.json();
//     } else {
//       return Promise.reject(`Error: ${res.status}`);
//     }
//   });
// };

export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(checkResponse).then((res) => {
    return res
  }).catch((error) => {
    console.error(error);
  });
};

export const filterweatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = {
    f: data.main.temp,
    c: Math.round(((data.main.temp - 32) * 5) / 9),
  };
  result.type = getWeatherType(result.temp.F);
  console.log(result);
  return result;
  // const main = data.main;
  // const temperature = main && main.temp;
  // const weather = {temperature: {F: Math.round(temperature), C: Math.round((temperature - 32) * 5/9)}}
  // console.log(weather);
  // return Math.ceil(temperature);
};

const getWeatherType = (temperature) => {
  if (temperature > 86) {
    return "hot";
  } else if (temperature >= 66 && temperature < 86) {
    return "warm";
  } else {
    return "cold";
  }
};

// weather.temperature.F = data.main.temp;
// weather.temperature.C = Math.round((data.main.temp - 32) * 5/9);
