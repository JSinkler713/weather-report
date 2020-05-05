import React, { Component } from 'react';
import '../main.css' 

class CurrentWeather extends Component {
  render(){  
   let tempHigh = (((this.props.weather.main.temp_max - 273.15) * 1.8) + 32).toFixed(1)
   let tempLow = (((this.props.weather.main.temp_min - 273.15) * 1.8) + 32).toFixed(1)
   let tempNow = (((this.props.weather.main.temp - 273.15) * 1.8) + 32).toFixed(1)
   let windGust = (this.props.weather.wind.gust * 2.23).toFixed(1);
   let windSpeed = (this.props.weather.wind.speed * 2.23).toFixed(1);
   let iconCode = this.props.weather.weather[0].icon
   let iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`
   if (isNaN(windGust)) {
     windGust = 0
   }
   if (isNaN(windSpeed)) {
     windSpeed = 0
   }

    return(
      <div>
        <div className='img_container'>
          <img className='img_container__icon' src={iconUrl} alt='current weather icon'/>
        </div>
        <ul>
          <li>Place: {this.props.weather.name}</li>
          <li>Description: {this.props.weather.weather[0].description}</li>
          <li>Currently {tempNow} Degrees</li>
          <li>Low: {tempLow} Degrees</li>
          <li>High: {tempHigh} Degrees</li>
          <li>Wind gusts up to {windGust}mph with avg of {windSpeed}mph</li> 
        </ul>
      </div>
    )
  }
}

export default CurrentWeather;

