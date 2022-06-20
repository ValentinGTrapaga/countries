import { useState } from "react";

const CountryCard = (props) => {
  const [showBack, setShowBack] = useState(true);

  function handleClick() {
    setShowBack((prev) => !prev);
  }

  function getLanguages(languagesArr) {
    let newArr = [];
    for (const key in languagesArr) {
      newArr.push(languagesArr[key]);
    }
    return newArr;
  }

  function getCurrencies(currenciesArr) {
    let newArr = [];
    for (const key in currenciesArr) {
      newArr.push(`${currenciesArr[key].name} (${currenciesArr[key].symbol})`);
    }
    return newArr;
  }

  let languages = getLanguages(props.languages).join(", ");
  let currencies = getCurrencies(props.currencies).join(", ");

  if (showBack) {
    return (
      <div className="card" onClick={handleClick}>
        <img className="countryImg" src={props.flag} alt={props.name} />
        <div className="info">
          <h3 className="countryTitle">{props.name}</h3>
          <p>Population: {props.population.toLocaleString("en-US")}</p>
          <p>
            Region: {props.region}, subregion: {props.subregion}
          </p>
          <p>Capital: {props.capital}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card" onClick={handleClick}>
        <div className="infoBack">
          <p>Area: {props.area} km^2</p>
          <p>Languages: {languages}</p>
          <p>Currencies: {currencies}</p>
          <h6>
            Demonyms
          </h6>
            <p className="demonyms">Female: {props.demonyms.eng.f}</p>
            <p className="demonyms">Male: {props.demonyms.eng.m}</p>
        </div>
      </div>
    );
  }
};

export default CountryCard;
