import React, { useId, useState } from 'react'

function Search({ onSearch }) {
 const [searchWord, setSearchWord]   = useState("");
 const id = useId();
 const searchid = `${id}-search`
 
function handleSearch(e) {
  e.preventDefault()
  onSearch(searchWord)
}
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input 
        id={searchid}
        value={searchWord}
        type="search"
        onChange={(event) => {
         setSearchWord(event.target.value)
        }}
        />
      </form>
      
    </div>
  )
}

export default Search
