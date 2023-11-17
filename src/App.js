import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
import axios from 'axios';
import { useState } from "react";


const API_KEY='8f5e58b13d91992c9b8fa9680bd84ebd';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin:auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px
  border-radius: 4px;
  width: 380px;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
    color: black;
    margin: 20px auto;
    font-size: 18px;
    font-weight: bold;
`;



function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  

  const fetchWeather = async(e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`)
    updateWeather(response.data);
    console.log(response.data);
  };

  return (
    <Container>
      <AppLabel>Weather App</AppLabel>
      {city && weather ?
       (<WeatherComponent weather={weather} city = {city}/>) : (<CityComponent updateCity={updateCity} fetchWeather={fetchWeather}/>)}
      
    </Container>
  );
}

export default App;
