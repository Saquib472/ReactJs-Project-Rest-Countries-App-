import CountriesListSimmerEffect from "./CountriesListSimmer";
import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";

export default function CountriesList({ query , queryByRegion }) {
    const [countriesData, setCountriesData] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,tld,currencies,languages,borders')
        .then(res => res.json())
        .then((data) => {
            setCountriesData(data)
        })
    },[])

  return countriesData.length === 0 ? <CountriesListSimmerEffect /> : (
    <div className="countries-container">
      {
        countriesData.filter((country) => {
            return country.name.common.toLowerCase().includes(query.toLowerCase()) && country.region.toLowerCase().includes(queryByRegion.toLowerCase());
        }).map((country) => {
            return <CountryCard key={country.name.common} countryData={country} />;
        })
      }
    </div>
  );
}
