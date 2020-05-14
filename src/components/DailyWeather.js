import React, { Component } from 'react';
import '../main.css' 

class DailyWeather extends Component {
  render(){  
    
   
    // TODO currently first appearing icon, change to most frequent
    // let iconCode = this.props.weather.weather[0].icon
    // let iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`
    

    // Also need to get most occuring description
    // And most occuring icon
    let description;
    let icon;
    let highestCount = 0;
    let highestIconCount = 0;
    let descriptions = {}
    let icons = {}
    let frequentIcon;
    let frequentDescription;
    
    for (let i=0; i < 8; i++) {
      description = this.props.weather[i].weather[0].description;
      icon = this.props.weather[i].weather[0].icon
      // get icon hash map      
      if (icons[icon] === undefined) {
        icons[icon] = 1;
      } else {
        icons[icon] = icons[icon] + 1
      }
      if (icons[icon] > highestIconCount) {
        highestIconCount = icons[icon];
        frequentIcon = icon;
      }

      // description hash map
      if (descriptions[description] === undefined) {
        descriptions[description] = 1;
      } else {
        descriptions[description] = descriptions[description] + 1
      }
      // check if highest count
      if (descriptions[description] > highestCount) {
        highestCount = descriptions[description];
        frequentDescription = description;
      }
    }
    frequentIcon = frequentIcon.slice(0,2) + 'd'
     
    console.log(frequentDescription);
    
    // get the high and low temperatures
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
    let date = this.props.weather[0].dt_txt.split(" ")
    return(
      <div className='DailyWeather'> 
        <ul>
          <li>Icon: {frequentIcon}</li>
          <li>Date: {date[0]}</li>
          <li>High: {high}</li>
          <li>Low: {low}</li>
          <li>Average Temp: {avg}</li>
          <li>Description: {frequentDescription}</li>
        </ul>
      </div>
    )
  }
}

export default DailyWeather;

