import React, { useId, useState } from 'react'

function Search() {
 const [SearchWord, setSearchWord]   = useState("");
 const id = useId();
 const searchid = `${id}-search`
 
   async function handleSearch(e) {
    e.preventDefault()
    const ENDPOINT = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    const url = `${ENDPOINT}${SearchWord}`;
    const response = await fetch(url)
    const json = await response.json()
    console.log(json[0].meanings[0].definitions[0].definition)
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
        
        
      </div>
    </div>
  )
}

export default Search
