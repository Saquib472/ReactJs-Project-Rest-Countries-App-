import { useEffect, useState } from "react";
import './CountryDetail.css';
import { Link, useLocation, useParams } from "react-router";
import CountryDetailSimmer from "./CountryDetailSimmer";
import useTheme from "../hooks/useTheme";

export default function CountryDetail() {
  // const countryName = new URLSearchParams(location.search).get("name");
  const countryName = useParams().country
  const [notFound, setNotFound] = useState(false)
  const [countryData, setCountryData] = useState(null)
  const {state} = useLocation()
  // const [isDark] = useOutletContext()
  const [isDark] = useTheme()

  useEffect(() => {
    if(state){
      setCountry(state)
      return
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {  
        setCountry(data)
      })
      .catch((err) => {
        setNotFound(true)
      })
  },[countryName]);

  function setCountry(data){
    setCountryData({
          flag : data.flags.svg,
          name : data.name.common,
          nativeName : Object.values(data.name.nativeName)[0]?.common,
          population : data.population.toLocaleString('en-IN'),
          region : data.region,
          subregion : data.subregion,
          capital : data.capital.join(', '),
          tld : data.tld.join(', '),
          currencies : Object.values(data.currencies).map((currency) => currency.name).join(', '),
          languages : Object.values(data.languages).join(', '),
          borders : []
        })

        if(data.borders){
          Promise.all(data.borders.map((border) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => res.json())
            .then(([borderData]) => {
              return borderData.name.common
            })
          }))
          .then((borders) => {
            setCountryData((prevData) => ({...prevData , borders}))
          })
        }
  }

  if(notFound){
    return <div>Country not found</div>
  }

  // if(true){
  //   return <CountryDetailSimmer /> 
  // }

  return  (
    <main className={`${isDark ? 'dark' : ''}`}>
      <div className="country-details-container">
        <span
          className="back-button" 
          onClick={() => {
            history.back();
          }}
        >
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        {
          countryData === null ? <CountryDetailSimmer /> : 
          <div className="country-details">
            <img src={countryData.flag} alt={`${countryData.name} flag`} />
            <div className="details-text-container">
              <h1>{countryData.name}</h1>
              <div className="details-text">
                <p>
                  <b>Native Name: </b>
                  <span className="native-name">{countryData.nativeName}</span>
                </p>
                <p>
                  <b>Population: </b>
                  <span className="population">{countryData.population}</span>
                </p>
                <p>
                  <b>Region: </b>
                  <span className="region">{countryData.region}</span>
                </p>
                <p>
                  <b>Sub Region: </b>
                  <span className="sub-region">{countryData.subregion}</span>
                </p>
                <p>
                  <b>Capital: </b>
                  <span className="capital">{countryData.capital}</span>
                </p>
                <p>
                  <b>Top Level Domain: </b>
                  <span className="top-level-domain">{countryData.tld}</span>
                </p>
                <p>
                  <b>Currencies: </b>
                  <span className="currencies">{countryData.currencies}</span>
                </p>
                <p>
                  <b>Languages: </b>
                  <span className="languages">{countryData.languages}</span>
                </p>
              </div>
              { 
                countryData.borders.length !== 0 && <div className="border-countries">
                  <b>Border Countries: </b>&nbsp;
                  {
                    countryData.borders.map((border) => <Link key={border} to={`/${border}`}>{border}</Link>)
                  }
                </div>
              }
            </div>
          </div>
        }
      </div>
    </main>
  );
}
