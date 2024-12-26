import { useState, useRef } from 'react'
import axios from 'axios'
import WeatherInfo from './components/weatherInfo/weatherInfo'
import './App.css'
import WeatherInfo5days from './components/WeatherInfo/WeatherInfo5days/WeatherInfo5days'


function App() {
  const [weather, setWeather] = useState()
  const [weather5days, setWeather5days] = useState()

  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = "3a7ee84518af04ff4e646c24aec20a9e"
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfo5days = await axios.get(url5days)
      setWeather5days(apiInfo5days.data)
      setWeather(apiInfo.data)
  }

  return (
    <div className='container'>
      <h1>Gdt Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>

      { weather &&  <WeatherInfo weather={weather} />}
      {weather5days && <WeatherInfo5days weather5days={weather5days}/>}
    </div>
        
  )
}

export default App
