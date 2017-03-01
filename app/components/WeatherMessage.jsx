import React from 'react';

let WeatherMessage = ({temp, location}) => <h3 className ="text-center">It's {temp} in {location}</h3>

module.exports = WeatherMessage;
