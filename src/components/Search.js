import React, { useId, useState } from 'react'

function Search() {
 const [SearchWord, setSearchWord]   = useState("");
 const [SearchResult, setSearchResult]   = useState([]);
 const id = useId();
 const searchid = `${id}-search`
 
   async function handleSearch(e) {
    e.preventDefault()
    const ENDPOINT = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    const url = `${ENDPOINT}${SearchWord}`;
    const response = await fetch(url)
    const json = await response.json()
    setSearchResult(SearchResult.push(...json[0].meanings))
    console.log(json[0].meanings[0].definitions[0].definition)
    console.log(json)
    console.log(SearchResult)
    console.log(Array.isArray(SearchResult))
    
    return json
   }
 
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input 
        id={searchid}
        value={SearchWord}
        type="search"
        onChange={(event) => {
         setSearchWord(event.target.value)
        }}
        />
      </form>
      <div>
        {SearchWord}
        {SearchResult?.map((result) => {
            return <li>{result.partOfSpeech}</li>;
        }
        )}
      </div>
    </div>
  )
}

export default Search
