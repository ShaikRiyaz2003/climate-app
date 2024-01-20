import { useEffect, useState } from "react"
import Descriptions from "./Components/Descriptions"
import { getFormattedWeatherData } from "./utilities/weatherServices"
import { Bounce, toast } from 'react-toastify';
import { dataContext } from "./Contexts";

import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer} from "react-toastify/dist/components";

function App() {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [city, setCity] = useState("hyderabad");
  const [bg, setBg] = useState("app");
  useEffect(() => {
    const fetchWeatherData = async() =>{
      try{
        const data = await getFormattedWeatherData(city, units);
        const threshold = units == "metric" ? 20 : 60;
        if(data.temp < threshold)
          setBg("app cold")
        else
          setBg("app")
        setWeather(data);
      }
      catch(e){
        toast.error("City Not Found", {
          position: "bottom-right",
          autoClose: 3000,
          closeOnClick: true,
          draggable: true,
          theme: "dark",
          transition: Bounce
        });
      }
    }
    fetchWeatherData();
  }, [units, city]);
  

  const handleUnitChange = () => {
    if(units == "metric"){
      setUnits("imperial");
    }else{
      setUnits("metric")
    }
  }
  const handleCityDown = (e) => {
    if(e.key == "Enter"){
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  }
  return (
  <dataContext.Provider value = {{weather, units}}>
    <div className = {bg} >
      <div className="overlay">
        {weather && (
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="Enter City..." autoComplete="off" onKeyDown={(e) => {handleCityDown(e)}}/>
            <button onClick={() => {handleUnitChange()}}>{units == "metric" ? '°C' : '°F'}</button>
          </div>
          <div className="section section__temperature">
            <div className="icon">
              <h3>{`${weather.name}, ${weather.country}`}</h3>
              <img src={weather.iconURL} alt="weatherIcon" />
              <h3>{weather.description}</h3>
            </div>
            <div className="temperature">
              <h1>{`${weather.temp.toFixed()} °${units == "metric" ? 'C' : 'F'}`}</h1>
            </div>
          </div>
          {/* bottom description */}
          <Descriptions/>
        </div>
        )}
        
      </div>
    </div>
  </dataContext.Provider>)
}

export default App
