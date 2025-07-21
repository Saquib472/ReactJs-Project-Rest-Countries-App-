import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useState } from "react";
import useTheme from "../hooks/useTheme";
// import { useOutletContext } from "react-router";

export default function Home(){
  const [query, setQuery] = useState('')
  const [queryByRegion, setQueryByRegion] = useState('')
  // const [isDark] = useOutletContext()
  const [isDark] = useTheme()
  return (
    <> 
      <main className={`${isDark ? 'dark' : ''}`}>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery}/>
          <SelectMenu setQueryByRegion={setQueryByRegion}/>
        </div>
        <CountriesList query={query} queryByRegion={queryByRegion}/>
      </main>
    </>
  )
}
 