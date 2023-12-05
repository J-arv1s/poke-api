import React, { useState } from 'react'

const SearchForm = (props) => {
  
    const [ inputText, setInputText ] = useState('')

    const updateInput = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.setPokemon(inputText)
        props.setNoPokemon(false)
        setInputText('')
    }

    return (
    <div> 
        <h2>SearchForm</h2>
        <form onSubmit={ handleSubmit }>
            <label htmlFor="pokemon" style={{ marginRight: '10px'}}>
                Pokémon </label>
            <input 
                type="text" 
                id='pokemon' 
                value={ inputText }
                onChange={ updateInput } 
            />
            <input type="submit" value='Search' />
        </form>
    </div>
  )
}

export default SearchForm