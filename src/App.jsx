import React from 'react';
import './App.css';
import CountryCard from './components/CountryCard'
import NavBar from './components/NavBar';
import { useState } from 'react'
import { useEffect } from 'react';
import FilterBar from './components/FilterBar';

function App() {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data)
        setFilteredCountries(data)
      })
    }, [])  

  function filterCountries(searchString) {
    const filteredCountries = countries.filter(country => (country.name.common.toLowerCase()).includes(searchString.toLowerCase()))
    setFilteredCountries(filteredCountries)
  }

  function filterByRegion(searchString) {
    const filteredCountries = countries.filter(country => (country.region.toLowerCase()).includes(searchString.toLowerCase()))
    setFilteredCountries(filteredCountries)
  }

  let showCountries = filteredCountries.map((country, index) => {
    const { name, currencies, capital, region, subregion, languages, demonyms, area, population, flags } = country
    return (
    <CountryCard
    key={index}
    name={name.common}
    capital={capital}
    region={region}
    subregion={subregion}
    currencies={currencies}
    languages={languages}
    area={area}
    demonyms={demonyms}
    population={population}
    flag={flags.png} />
    )
  })

  return (
    <div className="App">
      <NavBar theme="dark" />
      <FilterBar handleCountry={filterCountries} handleRegion={filterByRegion} />
      <div id="countries">
        {showCountries}
      </div>
    </div>
  );
}

export default App;
