import { FormControl, MenuItem, Select } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Header.css";
import InfoBox from "./InfoBox";
function Header() {
  //STATE => how to a write a variable in react <<<<
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("Worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  //USEEFFECT => Run a piece of code based on a given condition.
  useEffect(() => {
    // async -> send a request, wait for it, fetch the URL(data), do something with the data.
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, //India, United state of america, Afghanistan
            value: country.countryInfo.iso3, //IND, USA, AFG
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    // console.log("this is country:", countryCode);
    const url =
      countryCode === "Worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
      });
  };
  console.log("CountryInfo:", countryInfo);
  return (
    <div>
      <div className="header">
        <h2 className="header_name">COVID-19 TRACKER</h2>
        <FormControl className="header_dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            {/* Loop through all the countries and
             show the dropdown list of all options */}
            <MenuItem value="Worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}

            {/* <MenuItem value="Worldwide">option2</MenuItem>
          <MenuItem value="Worldwide">option3</MenuItem>
          <MenuItem value="Worldwide">option4</MenuItem> */}
          </Select>
        </FormControl>
      </div>
      <div className="app_stats">
        <InfoBox
          title="Coronavirus cases"
          cases={countryInfo.todayCases}
          total={countryInfo.cases}
        />
        <InfoBox
          title="Recovered"
          cases={countryInfo.todayRecovered}
          total={countryInfo.recovered}
        />
        <InfoBox
          title="Deaths"
          cases={countryInfo.todayDeaths}
          total={countryInfo.deaths}
        />
      </div>
    </div>
  );
}

export default Header;
