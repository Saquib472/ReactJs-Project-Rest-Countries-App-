import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";

export default function CountriesList({ query }) {
    const [countriesData, setCountriesData] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital')
        .then(res => res.json())
        .then((data) => {
            setCountriesData(data)
        })
    },[])

  return (
    <div className="countries-container">
      {
        countriesData.filter((country) => {
            return country.name.common.toLowerCase().includes(query.toLowerCase());
        }).map((country) => {
            return <CountryCard key={country.name.common} countryData={country} />;
        })
      }
    </div>
  );
}
