export default function CountryCard({countryData}) {
  return (
    <a className="country-card" href="/country.html?name=Togo">
        <img src={countryData.flags.svg} alt={`${countryData.name.common} flag`} />
        <div className="card-text">
            <h3 className="card-title">{countryData.name.common}</h3>
            <p><b>Population: </b>{countryData.population.toLocaleString(
                'en-IN'
              )}</p>
            <p><b>Region: </b>{countryData.region}</p>
            <p><b>Capital: </b>{countryData.capital?.[0]}</p>
        </div>
    </a>
  )
}
