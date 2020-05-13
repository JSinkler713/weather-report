import React, { Component } from 'react';
import '../main.css' 

class DailyWeather extends Component {
  render(){  
    
   
    // TODO currently first appearing icon, change to most frequent
    // let iconCode = this.props.weather.weather[0].icon
    // let iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`
    // Also need to get most occuring description


    let temps = this.props.weather.map((period)=> {
      return period.main.temp
    })
    let high = temps.reduce((a,b)=> Math.max(a,b))
    high = (((high - 273.15) * 1.8) + 32).toFixed(1)
    let low = temps.reduce((a,b)=> Math.min(a,b))
    low = (((low - 273.15) * 1.8) + 32).toFixed(1)
    
    let sum = 0;
    temps.forEach(temp=> sum+=temp)
    let avg = sum / 8;
    avg = (((avg - 273.15) * 1.8) + 32).toFixed(1)
    console.log(`the high is: ${high}`)
    console.log(`the low is: ${low}`)
    console.log(`the avg is ${avg}`)
    let date = this.props.weather[0].dt_txt.split(" ")
    return(
      <div className='DailyWeather'> 
        <ul>
          <li>Date: {date[0]}</li>
          <li>High: {high}</li>
          <li>Low: {low}</li>
          <li>Average Temp: {avg}</li>
        </ul>
      </div>
    )
  }
}

export default DailyWeather;

