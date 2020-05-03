import React, { Component } from 'react';
import '../main.css' 

class CurrentWeather extends Component {
  render(){  
   let tempHigh = (((this.props.weather.main.temp_max - 273.15) * 1.8) + 32).toFixed(1)

    return(
      <div> 
        <ul>
          <li>Place: {this.props.weather.name}</li>
          <li>Description: {this.props.weather.weather[0].description}</li>
          <li>High: {tempHigh} Degrees</li>
        </ul>
      </div>
    )
  }
}

export default CurrentWeather;

