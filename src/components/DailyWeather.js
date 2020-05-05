import React, { Component } from 'react';
import '../main.css' 

class DailyWeather extends Component {
  render(){  
    day1 = this.props.weather.list.splice[0, 7]
    day2 = this.props.weather.list.splice[8, 15]
    day3 = this.props.weather.list.splice[16, 23]
    day4 = this.props.weather.list.splice[24, 31]
    day5 = this.props.weather.list.splice[32, 39]

    console.log(day1);
    
    return(
      <div> 
      </div>
    )
  }
}

export default CurrentWeather;

