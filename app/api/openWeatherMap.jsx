import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=2d43793b1f103a912de9c3822dec064d&units=imperial';
const openWeatherMap = {
  getTemp: location => {
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl)
      .then((res) => {
        if(res.data.cod && res.data.message) {
          throw new Error(res.data.message);
          return;
        }
        return res.data.main.temp;
    }).catch(error => {
      throw new Error(error.data.message)
    });
  }
}
export default openWeatherMap;
