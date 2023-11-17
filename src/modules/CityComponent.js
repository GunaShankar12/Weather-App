import styled from 'styled-components';
import React from "react";

const WeatherLogo = styled.img`
    width: 140px;
    height: 140px;
    margin: 40px auto;
`;

const ChoseCityLabel = styled.span`
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin: 10px auto;

`;

const SearchBox = styled.form`
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    border-radius: 2px;
    color: black; 
    margin: 20px auto;
    & input{
        padding: 10px;
        font-size: 14px;
        border: none;
        outline: none;
        font-weight: bold;
    }

    & button{
        padding: 10px;
        color: white;
        background-color: black;
        font-size: 14px;
        border: none;
        outline: none;
        font-weight: bold;
        cursor: pointer;
    }

`;

const CityComponent = (props) => {  
    const {updateCity, fetchWeather} = props; 
    return (
        <>
           <WeatherLogo src="icons\perfect-day.svg"/>
           <ChoseCityLabel> Find Weather of your city </ChoseCityLabel>
           <SearchBox onSubmit={fetchWeather}>  
                <input 
                    placeholder='City' 
                    onChange={(e)=>updateCity(e.target.value)}
                />
                <button type={'submit'}>Search</button>
           </SearchBox>
        </>
    )
};

export default CityComponent;