export default function SelectMenu({setQueryByRegion}) {
  return (
    <select className="filter-by-region" onChange={(e)=>{
      setQueryByRegion(e.target.value)
    }}>
      <option hidden>Filter by Region</option>
      <option value="">All Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
