import React from "react";
import { Link } from "react-router-dom";

function CityList({ cities }) {         // pass cities array as prop

    // if cities array is empty
    if (!cities || cities.lenght === 0) {
        return <h2>No cities has been added.</h2>
    }

    // map cities array to show all cities in the array
    return (
        <div className="city-list">
            <h2>City List</h2>
            <ul>
                {cities.map((city, index) => (
                  <li key={index}>
                    <Link to={`/city/${city.name}`}>{city.name}</Link>
                  </li>  
                ))}    
            </ul>
        </div>
    )
}

export default CityList;