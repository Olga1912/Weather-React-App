import React from 'react';

const Weather = props => {
    return (
        <div>
        {props.city && 
        <div>
        <p>Location: {props.city}, {props.country}</p>
        <p>Temperature: {props.temp}</p>
        <p>pressure: {props.pressure}</p>
        <p>Sunset: {props.sunset}</p>
        </div>
        }
        <p>{props.error}</p>
    </div>
    );
}

export default Weather;