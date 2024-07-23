export const getWeather = ({latitude, longitude}, APIkey) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
    ).then((res) => {
        if (res.ok){
            return res.json();
        } else {
            return Promise.reject (`Error: ${res.status}`)
        }
    });
};

export const filterweatherData = (data) => {
    const result = {};
    result.city = data.name;
result.temp = {f:data.main.temp};
result.type = getWeatherType(result.temp.F);
    return result;
};

const getWeatherType = (temperature) => {
    if (temperature > 86) {
        return 'hot';
      } else if (temperature >= 66 && temperature < 86) {
        return 'warm';
      } else {
        return 'cold';
      }
}