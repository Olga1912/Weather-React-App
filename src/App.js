import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = 'c0b17f58bf666514d2148864a789edd4';

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined,
  }

  gettingweather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
   

    if (city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
   
      let sunset = data.sys.sunset;
      let date = new Date();
      date.setTime(sunset);
      
      let sunset_time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_time,
        error: undefined
    });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: 'Enter city name'
      });
    }
  }
  render () {
    return (
      <div>
      <Info />
      <Form weatherMethod = {this.gettingweather}/>
      <Weather 
        temp = {this.state.temp}
        city = {this.state.city}
        country = {this.state.country}
        pressure = {this.state.pressure}
        sunset = {this.state.sunset}
        error = {this.state.error}
      />
      </div>
    )
  }
}

export default App;