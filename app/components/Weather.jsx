import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import ErrorModal from 'ErrorModal';
import openWeatherMap from 'openWeatherMap';

let Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,

    }
  },
  handleSearch: function(location) {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location)
      .then(temp => {
        this.setState({
          location : location,
          temp : temp,
          isLoading: false
        })
      }).catch(error => {
        this.setState({
          isLoading : false,
          errorMessage: error.message
        })
      })
  },
  componentDidMount: function(){
    let location = this.props.location.query.location;
    if(location && location.length > 0){
      this.handleSearch(location)
      window.location.hash = "#/";
    }
  },
  componentWillReceiveProps: function(newProps){
    let location = newProps.location.query.location;
    if(location && location.length > 0){
      this.handleSearch(location)
      window.location.hash = "#/";
    }
  },
  render: function () {
    let {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading){
        return <h3 className="text-center">Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    function renderError () {
      if(typeof errorMessage === 'string') {
        return <ErrorModal message={errorMessage}/>
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>

    );
  }
})

export default Weather;
