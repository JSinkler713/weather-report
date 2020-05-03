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
  }

  fetchWeather = (e)=> {
    e.preventDefault();
    console.log(`fetch weather from ${this.state.weatherLocation}`);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.weatherLocation}&appid=${ApiKey}`
    fetch(url)
      .then(res=> res.json())
      .then(data=> this.setState({ weather: data }))
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
            <input onChange={this.handleLocation} placeholder='location'></input>
            <button onClick={this.fetchWeather}>Get weather</button>
          </form>
          </main>
              
        </div>
      );
    }
    return (

      <div className="App">
        <header class='nav' >
          <i class='logo'>Hello</i>
          <h1>
          Weather Report
          </h1>
          <div class='links'> Links here </div>
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
