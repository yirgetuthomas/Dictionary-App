import './App.css';
import Search from './components/Search';
import { useState } from 'react';
const ENDPOINT = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function App() {
  const [searchResult, setSearchResult]   = useState([]);
  async function handleSearch(searchWord) {
    const url = `${ENDPOINT}${searchWord}`;
    const response = await fetch(url)
    const json = await response.json()
    setSearchResult(json[0])
    
   }
  const nouns = searchResult?.meanings?.find((result) => result.partOfSpeech === "noun");
  const verbs = searchResult?.meanings?.find((result) => result.partOfSpeech === "verb");
  console.log(searchResult)
  return (
    <div className="App">
      <Search onSearch={handleSearch}/>
      <div>
        <div>
        <h1>{searchResult?.word}</h1>
        <h2>noun</h2>
        <p>Meaning</p>
        {nouns?.definitions.map((result) => {
            return (
                <li key={result.definition}>{result.definition}</li>
            )   
        }
        )}
        <p>Synonyms</p>{" "} {nouns?.synonyms.map((result) => {
            return (
                <li key={result}>{result}</li>
            )   
        }
        )}
        </div>
        <div>
        <h2>Verb</h2>
        <p>Meaning</p>
        {verbs?.definitions.map((result) => {
            return (
                <li key={result.definition}>{result.definition}</li>
            )   
        }
        )}
        </div>
        <p>Source</p>{searchResult.sourceUrls}
      </div>
    </div>
  );
}

export default App;
