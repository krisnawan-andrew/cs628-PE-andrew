import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css'

function AddCity({ addCity }) {     // addCity function passed as prop from App

    // states to manage input
    const [name, setName] = useState('')
    const [country, setCountry] = useState('')
    const [population, setPopulation] = useState('')

    // navigate function
    const navigate = useNavigate();

    // function for add button
    const handleClick = (e) => {
        e.preventDefault();

        // create a new City object
        const newCity = {
            name: name,
            country: country,
            population: population
        }

        // save the new city by calling addCity function
        addCity(newCity);

        // redirect to city list
        navigate('/city');
    }

    return (
        <div className="add-city">
            <h2>Add City</h2>
            
            <form onSubmit={handleClick}>
                <label>Name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label>Country: </label>
                <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
                <br />
                <label>Population: </label>
                <input
                    type="text"
                    value={population}
                    onChange={(e) => setPopulation(e.target.value)}
                />
                <br />
                <button type="submit">Add City</button>
            </form>
        </div>
        
    )
}

export default AddCity;