import axios from "axios";


const API_KEY = "691022e047d6e88d4866d7b9bdf500c6";

const makeIconURL = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getFormattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
  try{
    const data = await axios.get(URL)
      .then((res) => res.data)
      const {
        weather,
        main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
        wind: { speed },
        sys: { country },
        name,
      } = data;
      const { description, icon } = weather[0];
      
      return {
        description,
        iconURL : makeIconURL(icon),
        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
        speed,
        country,
        name,
      };
    }catch(e){
      throw new Error("Not Found");
    }
};

export { getFormattedWeatherData };
