import React, { Component } from 'react';  
import logo from './logo.svg';
import CurrentWeather from './components/CurrentWeather';
import './main.css' 

const ApiKey = `${process.env.REACT_APP_API_KEY}`
// use your own Api key here, or make a call to an express app to handle that on the backend



class App extends Component {
  state = {
    weatherLocation: '',
    weather: '',
    weatherFiveDay: '',
  }

  fetchWeather = (e)=> {
    e.preventDefault();
    let content = document.querySelector('input')
    let string = this.state.weatherLocation
    let zipCode = Number(string)
    let url
    if (isNaN(zipCode)) {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.weatherLocation}&appid=${ApiKey}`
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${ApiKey}`
    }
    fetch(url)
      .then(res=> res.json())
      .then(data=> {
        if (data.cod === 200) {
          content.style.border = "none";
          this.setState({ weather: data })
        } else {
          content.style.border = "2px solid red"
          console.log("Can't find that location try again")
        }})
      .catch(err=> console.log(err));
  }


  fetchWeatherFiveDay = (e)=> {
    e.preventDefault();
    let string = this.state.weatherLocation
    let zipCode = Number(string)
    let url
    if (isNaN(zipCode)) {
      url = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.weatherLocation}&appid=${ApiKey}`
    } else {
      url = `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&appid=${ApiKey}`
    }
    fetch(url)
      .then(res=> res.json())
      .then(data=> this.setState({ weatherFiveDay: data }))
      .catch(err=> console.log(err));
  }


  handleLocation = (e) => {
    this.setState({weatherLocation: e.target.value})
  }



  render(){
    if(!this.state.weather) {
      return (
        <div className="App">
          <header class='nav' >
            <h1>
            Weather Report
            </h1>
          </header>
          <main className='main'>
          <form className='content'>
            <input onChange={this.handleLocation} placeholder='city or zip'></input>
            <button onClick={this.fetchWeather}>Get weather</button>
          </form>
          </main>
              
        </div>
      );
    }
    return (

      <div className="App">
        <header class='nav' >
          <h1>
          Weather Report
          </h1>
        </header>
        <main className='main'>
          <div className='content'>
          <form>
            <input onChange={this.handleLocation} placeholder='location'></input>
            <button onClick={this.fetchWeather}>Get weather</button>
          </form>
          <CurrentWeather weather={this.state.weather} />
          </div>
          </main>

      </div>
    );
  }
}

export default App;
