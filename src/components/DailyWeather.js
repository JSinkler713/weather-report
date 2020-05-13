import React, { Component } from 'react';
import '../main.css' 

class DailyWeather extends Component {
  render(){  
    let temps = this.props.weather.map((period)=> {
      return period.main.temp
    })
    let high = temps.reduce((a,b)=> Math.max(a,b))
    let low = temps.reduce((a,b)=> Math.min(a,b))
    let sum = 0;
    temps.forEach(temp=> sum+=temp)
    let avg = sum / 8;
    console.log(`the high is: ${high}`)
    console.log(`the low is: ${low}`)
    console.log(`the avg is ${avg}`)
    let date = this.props.weather[0].dt_txt.split(" ")
    return(
      <div> 
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

