import React, { Component } from 'react';
import DailyWeather from './DailyWeather';
import '../main.css' 

class FiveDayWeather extends Component {
  render(){  
    return(
      <div> 
        <DailyWeather weather={this.props.list.slice(0,8)} />
        <DailyWeather weather={this.props.list.slice(8, 16)} />
        <DailyWeather weather={this.props.list.slice(16, 24)} />
        <DailyWeather weather={this.props.list.slice(24, 32)} />
        <DailyWeather weather={this.props.list.slice(32, 40)} />
      </div>
    
    )
  }
}

export default FiveDayWeather;
