
import React, { useState, useEffect } from 'react'

const FetchRequest = (props) => {
    const [ pokemon, setPokemon ] = useState({})
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        async function getPokemon(){
            try{
                setLoading(true)

                 // Simulate a delay of 2 seconds
                await new Promise(resolve => setTimeout(resolve, 2000));

                const url =`https://pokeapi.co/api/v2/pokemon/${props.pokemon}`
                const response = await fetch(url)
                const data = await response.json()
                // console.log(data)
                setPokemon(data)
                setLoading(false)
            } catch (error){
                console.log(error)
            }
        }
        getPokemon()
    }, [props.pokemon])

    if (loading){
        return (
            <div>
                <h2>Loading.....</h2>
            </div>
        )
    } else if(props.noPokemon){
        return (
            <div>
                <p>no pokemon yet, please submit a pokemon!</p>
            </div>
        )
    }
    else {
        return (
            <div> 
                <h2>FetchRequest</h2>
                <li>Pokedex Entry: { pokemon.id }</li>
                <li>Name: { pokemon.name }</li>
                {pokemon.abilities && pokemon.abilities.length > 0 ? 
                    (pokemon.abilities.map((a, idx) => <li key={idx}>
                        Ability {idx + 1}: {a.ability.name}
                    </li>)) : (<li>No Abilities Found!</li>)}
                <li>Weight: { pokemon.weight / 10}kg</li>
            </div>
        )
    }

}

export default FetchRequest