import React from "react";

const FilterBar = ({ handleCountry, handleRegion }) => {
  const handleOnChange = (e) => {
    handleCountry(e.target.value);
  };

  const handleOnChange2 = (e) => {
    handleRegion(e.target.value);
  };

  return (
    <div className="inputBar">
      <input
        type="text"
        name="countryName"
        id="countryName"
        className="inputs"
        placeholder="Search for a country..."
        onChange={(e) => handleOnChange(e)}
      />
      <div id="selectInput">
        <select
          name="countryRegion"
          id="countryRegion"
          className="inputs"
          onChange={(e) => handleOnChange2(e)}
        >
          <option value="" selected>
            -- Filter by region --
          </option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
