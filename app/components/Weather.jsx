import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

let Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    this.setState({isLoading: true});

    openWeatherMap.getTemp(location)
      .then(temp => {
        this.setState({
          location : location,
          temp : temp,
          isLoading: false
        })
      }).catch(error => {
        this.setState({
          isLoading : false
        })
        alert(error);
      })
  },
  render: function () {
    let {isLoading, temp, location} = this.state;

    function renderMessage() {
      if (isLoading){
        return <h3>Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>

    );
  }
})

export default Weather;
