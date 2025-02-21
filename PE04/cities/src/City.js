import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import './App.css'

function City({ cities }) {     // pass cities array as prop

    // REFERENCE: https://stackoverflow.com/questions/60998386/using-the-useparams-hook-in-react

    // get city name from URL parameter
    const { cityName } = useParams();

    // find city in cities array based on cityName from URL
    // cities with spaces in between has space in URL but looks wrong
    const city = cities.find(city => city.name === cityName);

    // navigate function
    const navigate = useNavigate();

    // back button handler, go back to city list
    const handleBackClick = () => {
        navigate('/city');
    }

    return (
        <div className="city">
            <h2>{city.name}</h2>
            <p>Country : {city.country}</p>
            <p>Population : {city.population}</p>
            <button onClick={handleBackClick}>Back to City List</button>
        </div>
    );
}

export default City;