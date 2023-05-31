import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import City from './City';


function App() {
  const apikeys="8588d93a4c1b3c4c8a8833f664f07608"


  const[city,setCity]=useState("ankara")
  const[weatherData,setWeatherData]=useState(null)
  
const getWeatherData=()=>{

  const currentWeather=axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikeys}&units=metric`).then((response)=>{
setWeatherData(response.data)
console.log(weatherData)
        }).catch((error)=>console.log(error))
   
}


useEffect(()=>{

getWeatherData()


},[city])
//console.log(city)
  return (
    <div className="App">
    <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
           <input
           
           onChange={(e)=>setCity(e.target.value)}
           
           placeholder='Enter City' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
        </div>
        <City weather={weatherData}/>
    </div>
  );
}

export default App;
