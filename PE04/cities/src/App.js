import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CityList from './CityList';
import AddCity from './AddCity';
import City from './City';
import './App.css'

function App() {

  // array to hold the list of cities
  const [cities, setCities] = useState([
    { name: 'Seattle', country: 'USA', population: '744,000' },
    { name: "London", country: "UK", population: '8,982,000' },
    { name: "Tokyo", country: "Japan", population: '13,900,000' }
  ])

  // function to add new city
  const addCity = (newCity) => {
    setCities([...cities, newCity]);  // replace array with newly added city
  }

  return (
    <BrowserRouter>
      <div className='container'>
        <h1>Cities Application</h1>
        <nav className='navbar'>
          <ul>
            <li>
              <Link to='/city'>Cities List</Link>
            </li>
            <li>
              <Link to='/add'>Add City</Link>
            </li>
          </ul>
        </nav>

        <div className='content'>
          <Routes>
            <Route path='/city' element={<CityList cities={cities}/>} />
            <Route path='/add' element={<AddCity addCity={addCity}/>} />
            <Route path='/city/:cityName' element={<City cities={cities} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;