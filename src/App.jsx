
import React, { useState } from 'react'
import { FetchRequest, SearchForm} from './components'

import './App.css'

function App() {

  const [ pokemon, setPokemon ] = useState([])
  const [ noPokemon, setNoPokemon ] = useState(true)

  return (
    <>
      <h1>POKÉMON APP</h1>
      <SearchForm pokemon={pokemon}
                  setPokemon={setPokemon} 
                  noPokemon={noPokemon}
                  setNoPokemon={setNoPokemon}/>
      {/* <SearchItem /> */}
      <FetchRequest pokemon={pokemon} 
                    setPokemon={setPokemon} 
                    noPokemon={noPokemon} 
                    setNoPokemon={setNoPokemon}/>
    </>
  )
}

export default App
