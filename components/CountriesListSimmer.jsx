import './CountriesListSimmer.css'

export default function CountriesListSimmerEffect() {
    // const mapped = new Array(10).fill(undefined)
    // const mapped = Array.from({length : 10})
  return (
    <div className="countries-container">
        {
            Array.from({length : 10}).map((el, i) => {
                return (
                <div key={i} className="country-card simmer-card">
                  <div className='countryCard-img-simmer'></div>
                  <div className='simmer-div'></div>
                  <div className='simmer-div'></div>
                  <div className='simmer-div'></div>
                  <div className='simmer-div'></div>
                </div>
              )
            })
            
        }
    </div>
  )
}
