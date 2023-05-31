import React from 'react'

const City = ({weather}) => {
    console.log(weather)
    console.log()
   

  return (
    <div>
        <h1 class="flex items-center text-5xl font-extrabold dark:text-dark">{weather.name}   <span class="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-5">{weather.main.temp}</span></h1>
  
        <h1></h1>

<h1></h1>

<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-dark">Weather Station is <span class="text-blue-600 dark:text-blue-500">{weather.weather[0].main}</span> for {weather.name}</h1>


    </div>
  )
}

export default City