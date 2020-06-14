import React, { Component } from 'react';
import DailyWeather from './DailyWeather';
import '../main.css' 

const FiveDayWeather = ({ list})=> {
  return(
    <div className='FiveDayWeather' > 
      <DailyWeather weather={list.slice(0,8)} />
      <DailyWeather weather={list.slice(8, 16)} />
      <DailyWeather weather={list.slice(16, 24)} />
      <DailyWeather weather={list.slice(24, 32)} />
      <DailyWeather weather={list.slice(32, 40)} />
    </div>
  )
}

export default FiveDayWeather;
